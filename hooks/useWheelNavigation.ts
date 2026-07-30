"use client";

import { useEffect, useRef } from "react";

type UseWheelNavigationProps = {
  enabled?: boolean;
  threshold?: number;
  throttle?: number;
  onPrevious?: () => void;
  onNext?: () => void;
};

export default function useWheelNavigation({
  enabled = true,
  threshold = 40,
  throttle = 700,
  onPrevious,
  onNext,
}: UseWheelNavigationProps) {
  const locked = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const handleWheel = (event: WheelEvent) => {
      if (locked.current) return;

      if (Math.abs(event.deltaY) < threshold) return;

      locked.current = true;

      if (event.deltaY > 0) {
        onNext?.();
      } else {
        onPrevious?.();
      }

      window.setTimeout(() => {
        locked.current = false;
      }, throttle);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [
    enabled,
    threshold,
    throttle,
    onPrevious,
    onNext,
  ]);
}