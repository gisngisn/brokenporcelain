"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection =
  | "up"
  | "down"
  | null;

type UseScrollDirectionOptions = {
  threshold?: number;
};

export default function useScrollDirection({
  threshold = 8,
}: UseScrollDirectionOptions = {}) {
  const lastY = useRef(0);

  const [direction, setDirection] =
    useState<ScrollDirection>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      const delta = currentY - lastY.current;

      if (Math.abs(delta) < threshold) {
        return;
      }

      setDirection(delta > 0 ? "down" : "up");

      lastY.current = currentY;
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
  }, [threshold]);

  return direction;
}