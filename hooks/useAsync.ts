"use client";

import { useCallback, useState } from "react";

type AsyncState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

type AsyncReturn<T> = AsyncState<T> & {
  execute: (...args: any[]) => Promise<T | undefined>;
};

export default function useAsync<T>(
  asyncFunction: (...args: any[]) => Promise<T>
): AsyncReturn<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = useCallback(
    async (...args: any[]) => {
      setState({
        data: null,
        error: null,
        loading: true,
      });

      try {
        const response = await asyncFunction(...args);

        setState({
          data: response,
          error: null,
          loading: false,
        });

        return response;
      } catch (error) {
        const err =
          error instanceof Error
            ? error
            : new Error("Unknown error");

        setState({
          data: null,
          error: err,
          loading: false,
        });

        return undefined;
      }
    },
    [asyncFunction]
  );

  return {
    ...state,
    execute,
  };
}