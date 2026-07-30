"use client";

import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [storedValue, setStoredValue] =
    useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(
        `Failed to read localStorage key "${key}"`,
        error
      );
    }
  }, [key]);

  const setValue = useCallback(
    (value: T | ((value: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function
            ? value(storedValue)
            : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(
          key,
          JSON.stringify(valueToStore)
        );
      } catch (error) {
        console.error(
          `Failed to write localStorage key "${key}"`,
          error
        );
      }
    },
    [key, storedValue]
  );

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);

      setStoredValue(initialValue);
    } catch (error) {
      console.error(
        `Failed to remove localStorage key "${key}"`,
        error
      );
    }
  }, [initialValue, key]);

  return [
    storedValue,
    setValue,
    remove,
  ] as const;
}