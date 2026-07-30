"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

type UseGSAPOptions = {
  enabled?: boolean;
  duration?: number;
  delay?: number;
};

export default function useGSAP(
  ref: RefObject<HTMLElement | null>,
  {
    enabled = true,
    duration = 1,
    delay = 0,
  }: UseGSAPOptions = {}
) {
  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;

    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power3.out",
      }
    );

    return () => {
      animation.kill();
    };
  }, [ref, enabled, duration, delay]);
}