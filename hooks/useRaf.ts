"use client";

import { useCallback, useEffect, useRef } from "react";

type RafCallback = (delta: number) => void;

/**
 * Executes a callback every animation frame.
 * Returns start/stop controls.
 */
export default function useRaf(
  callback: RafCallback,
  autoStart = true
) {
  const frameRef = useRef<number>();
  const lastTimeRef = useRef<number>();
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const loop = useCallback((time: number) => {
    const lastTime = lastTimeRef.current ?? time;
    const delta = time - lastTime;

    lastTimeRef.current = time;

    callbackRef.current(delta);

    frameRef.current = requestAnimationFrame(loop);
  }, []);

  const start = useCallback(() => {
    if (frameRef.current) return;

    lastTimeRef.current = undefined;
    frameRef.current = requestAnimationFrame(loop);
  }, [loop]);

  const stop = useCallback(() => {
    if (!frameRef.current) return;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = undefined;
    lastTimeRef.current = undefined;
  }, []);

  useEffect(() => {
    if (autoStart) {
      start();
    }

    return stop;
  }, [autoStart, start, stop]);

  return {
    start,
    stop,
    running: frameRef.current !== undefined,
  };
}