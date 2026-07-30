"use client";

import { useEffect, useState } from "react";

/**
 * Tracks page scroll progress.
 *
 * Returns:
 * 0   = top
 * 1   = bottom
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.min(
          Math.max(
            scrollTop / documentHeight,
            0
          ),
          1
        )
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return progress;
}