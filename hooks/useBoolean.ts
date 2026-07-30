"use client";

import { useCallback, useState } from "react";

export interface UseBooleanReturn {
  value: boolean;
  set: (value: boolean) => void;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

/**
 * Boolean state helper.
 */
export default function useBoolean(
  initialValue = false
): UseBooleanReturn {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((previous) => !previous);
  }, []);

  const set = useCallback((nextValue: boolean) => {
    setValue(nextValue);
  }, []);

  return {
    value,
    set,
    on,
    off,
    toggle,
  };
}