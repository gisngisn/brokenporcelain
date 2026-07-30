"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getGallery, type Artwork } from "@/lib/gallery";

export default function useGallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  const wheelLocked = useRef(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await getGallery();

        if (!mounted) return;

        setArtworks(data);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const next = useCallback(() => {
    setCurrent((value) =>
      Math.min(value + 1, artworks.length - 1)
    );
  }, [artworks.length]);

  const previous = useCallback(() => {
    setCurrent((value) =>
      Math.max(value - 1, 0)
    );
  }, []);

  useEffect(() => {
    if (!artworks.length) return;

    const onWheel = (event: WheelEvent) => {
      if (wheelLocked.current) return;

      if (Math.abs(event.deltaY) < 30) return;

      wheelLocked.current = true;

      if (event.deltaY > 0) {
        next();
      } else {
        previous();
      }

      window.setTimeout(() => {
        wheelLocked.current = false;
      }, 700);
    };

    window.addEventListener("wheel", onWheel, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [next, previous, artworks.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
          next();
          break;

        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          previous();
          break;

        case "Home":
          setCurrent(0);
          break;

        case "End":
          setCurrent(Math.max(artworks.length - 1, 0));
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [artworks.length, next, previous]);

  return {
    loading,
    artworks,
    current,
    artwork: artworks[current],
    total: artworks.length,
    hasNext: current < artworks.length - 1,
    hasPrevious: current > 0,
    next,
    previous,
    setCurrent,
  };
}