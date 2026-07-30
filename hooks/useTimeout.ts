"use client";

import { useEffect, useRef } from "react";

type TimeoutCallback = () => void;

/**
 * Executes a callback once after the specified delay,
 * always using the latest callback reference.
 */
export default function useTimeout(
  callback: TimeoutCallback,
  delay: number | null
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = window.setTimeout(() => {
      callbackRef.current();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}