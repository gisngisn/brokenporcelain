"use client";

import { useEffect } from "react";

/**
 * Locks page scrolling while active.
 */
export default function useScrollLock(
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow =
      body.style.overflow;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousPaddingRight =
      body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight =
        `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow =
        previousBodyOverflow;

      html.style.overflow =
        previousHtmlOverflow;

      body.style.paddingRight =
        previousPaddingRight;
    };
  }, [enabled]);
}