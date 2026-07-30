"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

interface UseControllableStateOptions<T> {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}

/**
 * Supports both controlled and uncontrolled state.
 */
export default function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>) {
  const [internalValue, setInternalValue] =
    useState(defaultValue);

  const controlled = value !== undefined;

  const currentValue = controlled
    ? value
    : internalValue;

  const setValue = useCallback(
    (next: SetStateAction<T>) => {
      const resolved =
        typeof next === "function"
          ? (next as (prev: T) => T)(currentValue)
          : next;

      if (!controlled) {
        setInternalValue(resolved);
      }

      onChange?.(resolved);
    },
    [controlled, currentValue, onChange]
  );

  return [
    currentValue,
    setValue,
  ] as const satisfies readonly [
    T,
    Dispatch<SetStateAction<T>>
  ];
}