"use client";

import { useEffect, useRef } from "react";

/**
 * 获取上一次的值
 *
 * const previous = usePrevious(value);
 */
export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}