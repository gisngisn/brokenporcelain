"use client";

import { useEffect, useState } from "react";

export default function useReducedMotion() {
  const [reducedMotion, setReducedMotion] =
    useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener(
        "change",
        updatePreference
      );

      return () => {
        mediaQuery.removeEventListener(
          "change",
          updatePreference
        );
      };
    }

    mediaQuery.addListener(updatePreference);

    return () => {
      mediaQuery.removeListener(updatePreference);
    };
  }, []);

  return reducedMotion;
}