"use client";

import { useRef } from "react";

/**
 * Creates a value only once during the component's lifetime.
 * Similar to useMemo(() => value, []) but guaranteed to stay constant.
 */
export default function useConst<T>(
  initializer: () => T
): T {
  const ref = useRef<{
    initialized: boolean;
    value: T;
  }>();

  if (!ref.current) {
    ref.current = {
      initialized: true,
      value: initializer(),
    };
  }

  return ref.current.value;
}