"use client";

import { useEffect } from "react";

/**
 * Locks the document body scroll while enabled.
 */
export default function useLockScroll(
  locked = true
) {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;

    const previousOverflow = body.style.overflow;
    const previousTouchAction =
      body.style.touchAction;

    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.touchAction =
        previousTouchAction;
    };
  }, [locked]);
}