"use client";

import { useEffect, useRef } from "react";

type AnimationCallback = (
  deltaTime: number,
  elapsedTime: number
) => void;

/**
 * Executes a callback every animation frame.
 */
export default function useAnimationFrame(
  callback: AnimationCallback,
  enabled = true
) {
  const callbackRef = useRef(callback);
  const frameRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const startTimeRef = useRef<number>();

  callbackRef.current = callback;

  useEffect(() => {
    if (!enabled) return;

    const animate = (time: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = time;
      }

      const previous =
        previousTimeRef.current ?? time;

      const deltaTime = time - previous;
      const elapsedTime =
        time - startTimeRef.current;

      previousTimeRef.current = time;

      callbackRef.current(
        deltaTime,
        elapsedTime
      );

      frameRef.current =
        requestAnimationFrame(animate);
    };

    frameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = undefined;
      previousTimeRef.current = undefined;
      startTimeRef.current = undefined;
    };
  }, [enabled]);
}