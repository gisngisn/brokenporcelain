"use client";

import { useEffect } from "react";

type UseKeyboardNavigationProps = {
  enabled?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  onFirst?: () => void;
  onLast?: () => void;
};

export default function useKeyboardNavigation({
  enabled = true,
  onPrevious,
  onNext,
  onFirst,
  onLast,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          onPrevious?.();
          break;

        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          event.preventDefault();
          onNext?.();
          break;

        case "PageUp":
          event.preventDefault();
          onPrevious?.();
          break;

        case "Home":
          event.preventDefault();
          onFirst?.();
          break;

        case "End":
          event.preventDefault();
          onLast?.();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    enabled,
    onPrevious,
    onNext,
    onFirst,
    onLast,
  ]);
}