"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection =
  | "up"
  | "down"
  | null;

type Options = {
  threshold?: number;
  enabled?: boolean;
};

/**
 * Detects scroll direction with threshold filtering.
 */
export default function useScrollDirectionAdvanced({
  threshold = 10,
  enabled = true,
}: Options = {}) {
  const [direction, setDirection] =
    useState<ScrollDirection>(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      const difference =
        currentY - lastScrollY.current;

      if (Math.abs(difference) < threshold) {
        return;
      }

      setDirection(
        difference > 0
          ? "down"
          : "up"
      );

      lastScrollY.current = currentY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [threshold, enabled]);

  return direction;
}