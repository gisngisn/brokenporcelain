"use client";

import { useEffect } from "react";

type ModifierKeys = {
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
};

type UseHotkeyOptions = {
  enabled?: boolean;
  preventDefault?: boolean;
};

export default function useHotkey(
  key: string,
  callback: (event: KeyboardEvent) => void,
  modifiers: ModifierKeys = {},
  options: UseHotkeyOptions = {}
) {
  const {
    enabled = true,
    preventDefault = true,
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const {
        ctrl = false,
        shift = false,
        alt = false,
        meta = false,
      } = modifiers;

      if (event.key !== key) {
        return;
      }

      if (event.ctrlKey !== ctrl) {
        return;
      }

      if (event.shiftKey !== shift) {
        return;
      }

      if (event.altKey !== alt) {
        return;
      }

      if (event.metaKey !== meta) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      callback(event);
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
  }, [
    key,
    callback,
    modifiers,
    enabled,
    preventDefault,
  ]);
}