"use client";

import { useCallback, useRef, useState } from "react";

type PromiseState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export default function usePromise<T>(
  promiseFunction: (...args: any[]) => Promise<T>
) {
  const [state, setState] = useState<PromiseState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const mounted = useRef(true);

  const execute = useCallback(
    async (...args: any[]) => {
      setState({
        data: null,
        error: null,
        loading: true,
      });

      try {
        const data = await promiseFunction(...args);

        if (mounted.current) {
          setState({
            data,
            error: null,
            loading: false,
          });
        }

        return data;
      } catch (error) {
        const err =
          error instanceof Error
            ? error
            : new Error("Promise failed");

        if (mounted.current) {
          setState({
            data: null,
            error: err,
            loading: false,
          });
        }

        throw err;
      }
    },
    [promiseFunction]
  );

  return {
    ...state,
    execute,
  };
}