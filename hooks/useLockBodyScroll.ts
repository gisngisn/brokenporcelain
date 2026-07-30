"use client";

import { useEffect } from "react";

type UseLockBodyScrollOptions = {
  enabled?: boolean;
};

export default function useLockBodyScroll({
  enabled = true,
}: UseLockBodyScrollOptions = {}) {
  useEffect(() => {
    if (!enabled) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousTouchAction = body.style.touchAction;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousTouchAction;
    };
  }, [enabled]);
}