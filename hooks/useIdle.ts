"use client";

import { useEffect, useRef, useState } from "react";

type UseIdleOptions = {
  timeout?: number;
  enabled?: boolean;
};

const EVENTS = [
  "mousemove",
  "mousedown",
  "keydown",
  "touchstart",
  "wheel",
  "scroll",
] as const;

export default function useIdle({
  timeout = 60000,
  enabled = true,
}: UseIdleOptions = {}) {
  const [idle, setIdle] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const clear = () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };

    const start = () => {
      clear();

      timer.current = window.setTimeout(() => {
        setIdle(true);
      }, timeout);
    };

    const reset = () => {
      setIdle(false);
      start();
    };

    EVENTS.forEach((event) => {
      window.addEventListener(event, reset, {
        passive: true,
      });
    });

    start();

    return () => {
      clear();

      EVENTS.forEach((event) => {
        window.removeEventListener(event, reset);
      });
    };
  }, [timeout, enabled]);

  return idle;
}