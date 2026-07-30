"use client";

import { RefObject, useEffect } from "react";

export default function useClickOutside<
  T extends HTMLElement = HTMLElement
>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;

      if (!element) return;

      if (element.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, {
      passive: true,
    });

    return () => {
      document.removeEventListener(
        "mousedown",
        listener
      );
      document.removeEventListener(
        "touchstart",
        listener
      );
    };
  }, [ref, handler, enabled]);
}