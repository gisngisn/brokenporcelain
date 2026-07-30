"use client";

import { useEffect, useRef } from "react";

/**
 * Ref that tracks whether the component is mounted.
 * Useful for async callbacks to avoid state updates after unmount.
 */
export default function useMountedRef() {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;
}