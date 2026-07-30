"use client";

import { useEffect, useState } from "react";

export type DeviceType =
  | "mobile"
  | "tablet"
  | "desktop";

type DeviceState = {
  type: DeviceType;
  width: number;
  height: number;
  touch: boolean;
};

function detectDevice(): DeviceState {
  if (typeof window === "undefined") {
    return {
      type: "desktop",
      width: 0,
      height: 0,
      touch: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  const touch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  let type: DeviceType = "desktop";

  if (width < 640) {
    type = "mobile";
  } else if (width < 1024) {
    type = "tablet";
  }

  return {
    type,
    width,
    height,
    touch,
  };
}

/**
 * Returns device information for responsive behavior.
 */
export default function useDevice() {
  const [device, setDevice] =
    useState<DeviceState>(detectDevice);

  useEffect(() => {
    const update = () => {
      setDevice(detectDevice());
    };

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  return device;
}