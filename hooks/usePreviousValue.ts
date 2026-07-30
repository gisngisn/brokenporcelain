"use client";

import { useEffect, useRef } from "react";

/**
 * Returns the previous value from the last render.
 */
export default function usePreviousValue<T>(value: T) {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}