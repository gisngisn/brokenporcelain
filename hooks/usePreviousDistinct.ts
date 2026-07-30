"use client";

import { useEffect, useRef } from "react";

/**
 * Returns the previous value only when it changes.
 * If the current value is equal to the previous one,
 * the last distinct value is preserved.
 */
export default function usePreviousDistinct<T>(
  value: T,
  isEqual: (a: T, b: T) => boolean = Object.is
) {
  const currentRef = useRef(value);
  const previousRef = useRef<T>();

  useEffect(() => {
    if (!isEqual(currentRef.current, value)) {
      previousRef.current = currentRef.current;
      currentRef.current = value;
    }
  }, [value, isEqual]);

  return previousRef.current;
}