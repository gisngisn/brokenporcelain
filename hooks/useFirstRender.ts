"use client";

import { useEffect, useRef } from "react";

/**
 * Returns true only during the first render.
 * After the component mounts it permanently becomes false.
 */
export default function useFirstRender() {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current;
}