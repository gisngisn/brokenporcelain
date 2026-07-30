"use client";

import { useCallback, useRef } from "react";

/**
 * 节流 Hook
 *
 * const throttled = useThrottle(fn, 500);
 */
export default function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  const lastExecuted = useRef(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastExecuted.current < delay) {
        return;
      }

      lastExecuted.current = now;

      callback(...args);
    },
    [callback, delay]
  );
}