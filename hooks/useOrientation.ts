"use client";

import { useEffect, useState } from "react";

export type Orientation =
  | "portrait"
  | "landscape"
  | "unknown";

/**
 * Detects current device orientation.
 */
export default function useOrientation() {
  const getOrientation = (): Orientation => {
    if (
      typeof window === "undefined"
    ) {
      return "unknown";
    }

    return window.innerWidth >
      window.innerHeight
      ? "landscape"
      : "portrait";
  };

  const [orientation, setOrientation] =
    useState<Orientation>(
      getOrientation()
    );

  useEffect(() => {
    const update = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener(
      "resize",
      update
    );

    window.addEventListener(
      "orientationchange",
      update
    );

    return () => {
      window.removeEventListener(
        "resize",
        update
      );

      window.removeEventListener(
        "orientationchange",
        update
      );
    };
  }, []);

  return orientation;
}