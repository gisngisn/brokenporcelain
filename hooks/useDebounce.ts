"use client";

import { useEffect, useState } from "react";

/**
 * 防抖 Hook
 *
 * const value = useDebounce(search, 300);
 */
export default function useDebounce<T>(
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
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}