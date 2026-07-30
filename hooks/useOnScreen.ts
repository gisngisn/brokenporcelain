"use client";

import {
  RefObject,
  useEffect,
  useState,
} from "react";

export default function useOnScreen<
  T extends Element = HTMLElement
>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit
) {
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: options?.root ?? null,
        rootMargin:
          options?.rootMargin ?? "0px",
        threshold:
          options?.threshold ?? 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    ref,
    options?.root,
    options?.rootMargin,
    options?.threshold,
  ]);

  return isVisible;
}