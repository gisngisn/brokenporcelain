"use client";

import {
  DependencyList,
  useCallback,
  useRef,
} from "react";

/**
 * Returns a callback with a stable reference
 * while always calling the latest implementation.
 */
export default function useStableCallback<
  T extends (...args: any[]) => any
>(
  callback: T,
  dependencies: DependencyList = []
): T {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  return useCallback(
    ((...args: Parameters<T>) =>
      callbackRef.current(...args)) as T,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
}