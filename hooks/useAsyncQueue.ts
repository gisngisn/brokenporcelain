"use client";

import { useCallback, useRef, useState } from "react";

type QueueTask<T> = () => Promise<T>;

type AsyncQueueState<T> = {
  result: T | null;
  error: Error | null;
  running: boolean;
};

export default function useAsyncQueue<T>() {
  const queue = useRef<QueueTask<T>[]>([]);
  const processing = useRef(false);

  const [state, setState] =
    useState<AsyncQueueState<T>>({
      result: null,
      error: null,
      running: false,
    });

  const processQueue = useCallback(async () => {
    if (processing.current) return;

    processing.current = true;

    setState((prev) => ({
      ...prev,
      running: true,
    }));

    while (queue.current.length > 0) {
      const task = queue.current.shift();

      if (!task) continue;

      try {
        const result = await task();

        setState({
          result,
          error: null,
          running: true,
        });
      } catch (error) {
        setState({
          result: null,
          error:
            error instanceof Error
              ? error
              : new Error("Unknown error"),
          running: true,
        });
      }
    }

    processing.current = false;

    setState((prev) => ({
      ...prev,
      running: false,
    }));
  }, []);

  const add = useCallback(
    (task: QueueTask<T>) => {
      queue.current.push(task);
      processQueue();
    },
    [processQueue]
  );

  const clear = useCallback(() => {
    queue.current = [];
  }, []);

  return {
    ...state,
    add,
    clear,
  };
}