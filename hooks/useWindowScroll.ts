"use client";

import { useEffect, useState } from "react";

export type WindowScrollState = {
  x: number;
  y: number;
  atTop: boolean;
  atBottom: boolean;
};

/**
 * Tracks window scroll state.
 */
export default function useWindowScroll() {
  const [scroll, setScroll] =
    useState<WindowScrollState>({
      x: 0,
      y: 0,
      atTop: true,
      atBottom: false,
    });

  useEffect(() => {
    const update = () => {
      const {
        scrollX,
        scrollY,
      } = window;

      const {
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      setScroll({
        x: scrollX,
        y: scrollY,
        atTop: scrollY <= 0,
        atBottom:
          scrollY + clientHeight >=
          scrollHeight - 1,
      });
    };

    update();

    window.addEventListener(
      "scroll",
      update,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  return scroll;
}