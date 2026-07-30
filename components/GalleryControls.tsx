"use client";

import { motion } from "framer-motion";

type GalleryControlsProps = {
  current: number;
  total: number;
  onPrevious?: () => void;
  onNext?: () => void;
};

export default function GalleryControls({
  current,
  total,
  onPrevious,
  onNext,
}: GalleryControlsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        z-40
        flex
        -translate-x-1/2
        items-center
        gap-10
      "
    >
      <button
        onClick={onPrevious}
        className="
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-white/40
          hover:text-white
        "
      >
        ← Previous
      </button>

      <div
        className="
          text-[10px]
          tracking-[0.4em]
          text-white/40
        "
      >
        {String(current).padStart(3, "0")}
        {" / "}
        {String(total).padStart(3, "0")}
      </div>

      <button
        onClick={onNext}
        className="
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-white/40
          hover:text-white
        "
      >
        Next →
      </button>
    </motion.div>
  );
}