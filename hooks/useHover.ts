"use client";

import {
  RefObject,
  useEffect,
  useState,
} from "react";

export default function useHover<
  T extends HTMLElement = HTMLElement
>(ref: RefObject<T | null>) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    const handleTouchStart = () => {
      setHovered(true);
    };

    const handleTouchEnd = () => {
      setHovered(false);
    };

    element.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    element.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    element.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    element.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true,
      }
    );

    return () => {
      element.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      element.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      element.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      element.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [ref]);

  return hovered;
}