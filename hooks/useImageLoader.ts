"use client";

import { useEffect, useState } from "react";

type ImageLoaderState = {
  loaded: boolean;
  error: boolean;
  loading: boolean;
};

export default function useImageLoader(src?: string) {
  const [state, setState] = useState<ImageLoaderState>({
    loaded: false,
    loading: !!src,
    error: false,
  });

  useEffect(() => {
    if (!src) {
      setState({
        loaded: false,
        loading: false,
        error: false,
      });
      return;
    }

    let cancelled = false;

    const image = new Image();

    setState({
      loaded: false,
      loading: true,
      error: false,
    });

    image.decoding = "async";

    image.onload = () => {
      if (cancelled) return;

      setState({
        loaded: true,
        loading: false,
        error: false,
      });
    };

    image.onerror = () => {
      if (cancelled) return;

      setState({
        loaded: false,
        loading: false,
        error: true,
      });
    };

    image.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  return state;
}