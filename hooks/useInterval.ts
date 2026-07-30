"use client";

import { useEffect, useRef } from "react";

type IntervalCallback = () => void;

/**
 * Executes a callback at a fixed interval while
 * always using the latest callback reference.
 */
export default function useInterval(
  callback: IntervalCallback,
  delay: number | null
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = window.setInterval(() => {
      callbackRef.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}