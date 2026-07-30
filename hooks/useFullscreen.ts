"use client";

import { useCallback, useEffect, useState } from "react";

export default function useFullscreen() {
  const [fullscreen, setFullscreen] =
    useState(false);

  const enter = useCallback(async () => {
    if (!document.documentElement.requestFullscreen) {
      return;
    }

    await document.documentElement.requestFullscreen();
  }, []);

  const exit = useCallback(async () => {
    if (!document.exitFullscreen) {
      return;
    }

    await document.exitFullscreen();
  }, []);

  const toggle = useCallback(async () => {
    if (document.fullscreenElement) {
      await exit();
    } else {
      await enter();
    }
  }, [enter, exit]);

  useEffect(() => {
    const update = () => {
      setFullscreen(
        Boolean(document.fullscreenElement)
      );
    };

    document.addEventListener(
      "fullscreenchange",
      update
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        update
      );
    };
  }, []);

  return {
    fullscreen,
    enter,
    exit,
    toggle,
  };
}