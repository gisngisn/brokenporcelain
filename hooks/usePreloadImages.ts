"use client";

import { useEffect, useState } from "react";

type UsePreloadImagesOptions = {
  enabled?: boolean;
};

export default function usePreloadImages(
  images: string[],
  options: UsePreloadImagesOptions = {}
) {
  const { enabled = true } = options;

  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setLoaded(true);
      setProgress(100);
      return;
    }

    if (images.length === 0) {
      setLoaded(true);
      setProgress(100);
      return;
    }

    let cancelled = false;
    let finished = 0;

    const update = () => {
      if (cancelled) return;

      finished++;

      setProgress(
        Math.round((finished / images.length) * 100)
      );

      if (finished >= images.length) {
        setLoaded(true);
      }
    };

    images.forEach((src) => {
      const image = new Image();

      image.onload = update;
      image.onerror = update;

      image.src = src;
    });

    return () => {
      cancelled = true;
    };
  }, [enabled, images]);

  return {
    loaded,
    progress,
  };
}