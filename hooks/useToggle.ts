"use client";

import { Dispatch, SetStateAction, useCallback, useState } from "react";

type ToggleReturn = [
  boolean,
  () => void,
  Dispatch<SetStateAction<boolean>>
];

/**
 * Simple boolean toggle hook.
 */
export default function useToggle(
  initialValue = false
): ToggleReturn {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((previous) => !previous);
  }, []);

  return [value, toggle, setValue];
}