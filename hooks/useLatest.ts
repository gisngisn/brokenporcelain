"use client";

import { useEffect, useRef } from "react";

/**
 * Keeps a mutable ref pointing to the latest value.
 * Useful inside callbacks to avoid stale closures.
 */
export default function useLatest<T>(value: T) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}