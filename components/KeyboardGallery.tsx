"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type KeyboardGalleryProps = {
  onPrevious?: () => void;
  onNext?: () => void;
};

/**
 * Gallery keyboard interaction
 *
 * ← / ↑  上一件作品
 * → / ↓  下一件作品
 * ESC    返回首页
 */
export default function KeyboardGallery({
  onPrevious,
  onNext,
}: KeyboardGalleryProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          onPrevious?.();
          break;

        case "ArrowRight":
        case "ArrowDown":
        case " ":
          event.preventDefault();
          onNext?.();
          break;

        case "Escape":
          router.push("/");
          break;

        default:
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    onPrevious,
    onNext,
    router,
  ]);

  return null;
}