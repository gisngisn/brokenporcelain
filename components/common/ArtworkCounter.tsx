"use client";

import { motion } from "framer-motion";

type ArtworkCounterProps = {
  current: number;
  total: number;
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function ArtworkCounter({
  current,
  total,
}: ArtworkCounterProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        z-40
        flex
        items-center
        gap-5
        select-none
      "
    >
      <span
        className="
          text-3xl
          font-light
          tracking-[0.18em]
          text-white
        "
      >
        {pad(current)}
      </span>

      <div
        className="
          h-px
          w-20
          bg-white/20
        "
      />

      <span
        className="
          text-sm
          tracking-[0.3em]
          text-neutral-500
        "
      >
        {pad(total)}
      </span>
    </motion.div>
  );
}