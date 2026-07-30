"use client";

import { useEffect, useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function useImagePreloader(
  images: string[],
  enabled = true
) {
  const list = useMemo(
    () => [...new Set(images.filter(Boolean))],
    [images]
  );

  const [status, setStatus] = useState<Status>("idle");
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    if (list.length === 0) {
      setStatus("success");
      return;
    }

    let cancelled = false;

    setStatus("loading");
    setLoaded(0);

    let completed = 0;

    const finish = () => {
      completed++;

      if (cancelled) return;

      setLoaded(completed);

      if (completed >= list.length) {
        setStatus("success");
      }
    };

    const preloaders = list.map((src) => {
      return new Promise<void>((resolve) => {
        const image = new Image();

        image.onload = () => {
          finish();
          resolve();
        };

        image.onerror = () => {
          finish();
          resolve();
        };

        image.decoding = "async";
        image.loading = "eager";
        image.src = src;
      });
    });

    Promise.all(preloaders).catch(() => {
      if (!cancelled) {
        setStatus("error");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [enabled, list]);

  return {
    status,
    loaded,
    total: list.length,
    progress:
      list.length === 0
        ? 100
        : Math.round((loaded / list.length) * 100),
    finished: status === "success",
  };
}