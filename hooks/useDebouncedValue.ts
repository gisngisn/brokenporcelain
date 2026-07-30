"use client";

import { useEffect, useState } from "react";

/**
 * Returns a value after it has stopped changing
 * for the specified delay.
 */
export default function useDebouncedValue<T>(
  value: T,
  delay = 300
): T {
  const [debouncedValue, setDebouncedValue] =
    useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}