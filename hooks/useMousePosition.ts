"use client";

import { useEffect, useState } from "react";

export type MousePosition = {
  x: number;
  y: number;
};

export default function useMousePosition() {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 0) return;

      setMouse({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return mouse;
}