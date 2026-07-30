"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type ArtworkNavigatorProps = {
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export default function ArtworkNavigator({
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: ArtworkNavigatorProps) {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.08,
          x: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onPrev}
        disabled={!hasPrev}
        className="
          absolute
          left-8
          top-1/2
          z-40
          -translate-y-1/2
          rounded-full
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-md
          transition-all
          hover:border-white/40
          hover:bg-white/10
          disabled:cursor-not-allowed
          disabled:opacity-20
        "
      >
        <ChevronLeft size={22} strokeWidth={1.5} />
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.08,
          x: 4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onNext}
        disabled={!hasNext}
        className="
          absolute
          right-8
          top-1/2
          z-40
          -translate-y-1/2
          rounded-full
          border
          border-white/10
          bg-white/5
          p-4
          backdrop-blur-md
          transition-all
          hover:border-white/40
          hover:bg-white/10
          disabled:cursor-not-allowed
          disabled:opacity-20
        "
      >
        <ChevronRight size={22} strokeWidth={1.5} />
      </motion.button>
    </>
  );
}