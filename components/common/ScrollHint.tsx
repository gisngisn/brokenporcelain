"use client";

import { motion } from "framer-motion";

type ScrollHintProps = {
  text?: string;
};

export default function ScrollHint({
  text = "SCROLL",
}: ScrollHintProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.75,
      }}
      transition={{
        delay: 1.2,
        duration: 1,
      }}
      className="
        absolute
        right-10
        bottom-10
        z-40
        flex
        flex-col
        items-center
        gap-3
        select-none
      "
    >
      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-neutral-500
        "
      >
        {text}
      </span>

      <div className="relative h-20 w-px overflow-hidden bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-8 w-px bg-white"
          animate={{
            y: [-32, 80],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="text-white/70"
      >
        ↓
      </motion.div>
    </motion.div>
  );
}