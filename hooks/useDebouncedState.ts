"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

/**
 * State with automatic debounce delay.
 */
export default function useDebouncedState<T>(
  initialValue: T,
  delay = 300
): [
  T,
  Dispatch<SetStateAction<T>>,
  T
] {
  const [value, setValue] = useState(initialValue);

  const [debouncedValue, setDebouncedValue] =
    useState(initialValue);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, delay]);

  return [
    value,
    setValue,
    debouncedValue,
  ];
}