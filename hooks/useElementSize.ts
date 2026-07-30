"use client";

import {
  RefObject,
  useEffect,
  useState,
} from "react";

export type ElementSize = {
  width: number;
  height: number;
};

export default function useElementSize<
  T extends HTMLElement = HTMLDivElement
>(ref: RefObject<T | null>) {
  const [size, setSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const updateSize = () => {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return size;
}