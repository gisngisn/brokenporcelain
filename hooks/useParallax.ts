"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

type UseParallaxOptions = {
  enabled?: boolean;
  strength?: number;
};

export default function useParallax<
  T extends HTMLElement = HTMLDivElement
>(
  ref: RefObject<T | null>,
  {
    enabled = true,
    strength = 20,
  }: UseParallaxOptions = {}
) {
  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;

    if (!element) return;

    const handleMove = (event: MouseEvent) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) *
        strength;

      const y =
        (event.clientY / window.innerHeight - 0.5) *
        strength;

      gsap.to(element, {
        x,
        y,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener(
      "mousemove",
      handleMove,
      {
        passive: true,
      }
    );

    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      window.removeEventListener(
        "mouseleave",
        reset
      );
    };
  }, [enabled, ref, strength]);
}