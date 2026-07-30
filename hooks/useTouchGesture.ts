"use client";

import { useEffect, useRef } from "react";

type GestureDirection =
  | "next"
  | "previous"
  | null;

type UseTouchGestureOptions = {
  enabled?: boolean;
  threshold?: number;
};

export default function useTouchGesture({
  enabled = true,
  threshold = 60,
}: UseTouchGestureOptions = {}) {
  const startX = useRef(0);
  const startY = useRef(0);

  const direction = useRef<GestureDirection>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleStart = (
      event: TouchEvent
    ) => {
      const touch = event.touches[0];

      startX.current = touch.clientX;
      startY.current = touch.clientY;

      direction.current = null;
    };

    const handleMove = (
      event: TouchEvent
    ) => {
      const touch = event.touches[0];

      const deltaX =
        touch.clientX - startX.current;

      const deltaY =
        touch.clientY - startY.current;

      if (
        Math.abs(deltaX) >
        Math.abs(deltaY)
      ) {
        if (
          Math.abs(deltaX) >
          threshold
        ) {
          direction.current =
            deltaX < 0
              ? "next"
              : "previous";
        }
      }
    };

    window.addEventListener(
      "touchstart",
      handleStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchmove",
      handleMove,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "touchstart",
        handleStart
      );

      window.removeEventListener(
        "touchmove",
        handleMove
      );
    };
  }, [
    enabled,
    threshold,
  ]);

  return direction.current;
}