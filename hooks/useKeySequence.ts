"use client";

import { useEffect, useRef } from "react";

type KeySequenceHandler = () => void;

/**
 * Detects a sequence of key presses.
 *
 * Example:
 * ["g", "a", "l", "l", "e", "r", "y"]
 */
export default function useKeySequence(
  sequence: string[],
  callback: KeySequenceHandler,
  timeout = 1000
) {
  const buffer = useRef<string[]>([]);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      buffer.current.push(event.key);

      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      timer.current = window.setTimeout(() => {
        buffer.current = [];
      }, timeout);

      const matched =
        sequence.every(
          (key, index) =>
            buffer.current[index] === key
        );

      if (matched) {
        callback();
        buffer.current = [];
      }

      if (
        buffer.current.length >
        sequence.length
      ) {
        buffer.current.shift();
      }
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

      if (timer.current) {
        window.clearTimeout(timer.current);
      }
    };
  }, [
    sequence,
    callback,
    timeout,
  ]);
}