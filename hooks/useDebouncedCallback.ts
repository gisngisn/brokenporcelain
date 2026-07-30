"use client";

import {
  useCallback,
  useEffect,
  useRef,
} from "react";

type AnyFunction = (
  ...args: any[]
) => void;

/**
 * Returns a debounced callback.
 * The callback runs only after no calls occur
 * within the specified delay.
 */
export default function useDebouncedCallback<T extends AnyFunction>(
  callback: T,
  delay = 300
) {
  const timer = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  return debounced;
}