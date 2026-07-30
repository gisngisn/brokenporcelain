"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether a keyboard key is currently pressed.
 */
export default function useKeyPress(
  targetKey: string
) {
  const [pressed, setPressed] =
    useState(false);

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === targetKey) {
        setPressed(true);
      }
    };

    const handleKeyUp = (
      event: KeyboardEvent
    ) => {
      if (event.key === targetKey) {
        setPressed(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "keyup",
      handleKeyUp
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );
    };
  }, [targetKey]);

  return pressed;
}