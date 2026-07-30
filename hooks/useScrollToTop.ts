"use client";

import { useCallback } from "react";

/**
 * Smoothly scrolls the page back to the top.
 */
export default function useScrollToTop() {
  const scrollToTop = useCallback(
    (smooth = true) => {
      if (typeof window === "undefined") {
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: smooth
          ? "smooth"
          : "auto",
      });
    },
    []
  );

  return scrollToTop;
}