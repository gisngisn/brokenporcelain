"use client";

import { useEffect, useRef } from "react";

type SwipeDirection =
  | "left"
  | "right"
  | "up"
  | "down";

type UseSwipeOptions = {
  threshold?: number;
  enabled?: boolean;
};

type SwipeHandlers = {
  onSwipe?: (direction: SwipeDirection) => void;
};

export default function useSwipe(
  handlers: SwipeHandlers,
  {
    threshold = 50,
    enabled = true,
  }: UseSwipeOptions = {}
) {
  const startX = useRef(0);
  const startY = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handleTouchStart = (
      event: TouchEvent
    ) => {
      const touch = event.touches[0];

      startX.current = touch.clientX;
      startY.current = touch.clientY;
    };

    const handleTouchEnd = (
      event: TouchEvent
    ) => {
      const touch = event.changedTouches[0];

      const deltaX =
        touch.clientX - startX.current;

      const deltaY =
        touch.clientY - startY.current;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (
        absX < threshold &&
        absY < threshold
      ) {
        return;
      }

      if (absX > absY) {
        handlers.onSwipe?.(
          deltaX > 0
            ? "right"
            : "left"
        );
      } else {
        handlers.onSwipe?.(
          deltaY > 0
            ? "down"
            : "up"
        );
      }
    };

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [
    handlers,
    threshold,
    enabled,
  ]);
}