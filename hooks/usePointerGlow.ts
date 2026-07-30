"use client";

import { useEffect, useState } from "react";

export type PointerPosition = {
  x: number;
  y: number;
};

type UsePointerGlowOptions = {
  enabled?: boolean;
  smoothing?: number;
};

export default function usePointerGlow({
  enabled = true,
  smoothing = 0.15,
}: UsePointerGlowOptions = {}) {
  const [pointer, setPointer] = useState<PointerPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!enabled) return;

    let animationFrame = 0;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    const animate = () => {
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;

      setPointer({
        x: currentX,
        y: currentY,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, [enabled, smoothing]);

  return pointer;
}