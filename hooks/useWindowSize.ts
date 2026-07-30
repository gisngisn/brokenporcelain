"use client";

import { useEffect, useState } from "react";

export type WindowSize = {
  width: number;
  height: number;
};

function getSize(): WindowSize {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowSize() {
  const [size, setSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("orientationchange", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener(
        "orientationchange",
        handleResize
      );
    };
  }, []);

  return size;
}