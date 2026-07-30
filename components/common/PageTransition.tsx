"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
  transitionKey: string | number;
};

export default function PageTransition({
  children,
  transitionKey,
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        initial={{
          opacity: 0,
          scale: 0.985,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 1.015,
          filter: "blur(12px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}