"use client";

import { RefObject, useEffect, useState } from "react";

type UseIntersectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export default function useIntersection<T extends Element>(
  ref: RefObject<T | null>,
  {
    root = null,
    rootMargin = "0px",
    threshold = 0.2,
    once = false,
  }: UseIntersectionOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = ref.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold, once]);

  return isIntersecting;
}