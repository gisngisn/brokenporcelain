"use client";

import { useEffect } from "react";

type HotkeyHandler = (
  event: KeyboardEvent
) => void;

type Hotkeys = Record<
  string,
  HotkeyHandler
>;

/**
 * Keyboard shortcut manager.
 *
 * Example:
 * {
 *   "Escape": close,
 *   "ArrowRight": next
 * }
 */
export default function useHotkeys(
  hotkeys: Hotkeys,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const handler =
        hotkeys[event.key];

      if (!handler) return;

      handler(event);
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [hotkeys, enabled]);
}