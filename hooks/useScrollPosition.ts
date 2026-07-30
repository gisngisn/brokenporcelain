"use client";

import { useEffect, useState } from "react";

export type ScrollPosition = {
  x: number;
  y: number;
};

/**
 * Tracks current window scroll position.
 */
export default function useScrollPosition() {
  const [position, setPosition] =
    useState<ScrollPosition>({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    updatePosition();

    window.addEventListener(
      "scroll",
      updatePosition,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updatePosition
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updatePosition
      );

      window.removeEventListener(
        "resize",
        updatePosition
      );
    };
  }, []);

  return position;
}