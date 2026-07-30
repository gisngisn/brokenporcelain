"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TransitionOverlayProps {
  active: boolean;
  onHalfway: () => void;
  onFinished: () => void;
}

export default function TransitionOverlay({
  active,
  onHalfway,
  onFinished,
}: TransitionOverlayProps) {
  const halfwayCalled = useRef(false);

  useEffect(() => {
    if (!active) {
      halfwayCalled.current = false;
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.45,
            },
          }}
        >
          {/* Black */}
          <motion.div
            className="absolute inset-0 bg-[#050505]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Eye Flash */}
          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[120px]
              w-[120px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
              blur-[40px]
            "
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 8, 18],
            }}
            transition={{
              duration: 1.15,
              ease: "easeOut",
            }}
            onUpdate={(latest) => {
              if (
                !halfwayCalled.current &&
                typeof latest.scale === "number" &&
                latest.scale > 8
              ) {
                halfwayCalled.current = true;
                onHalfway();
              }
            }}
          />

          {/* White Flash */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: 0.22,
              duration: 0.65,
              ease: "easeOut",
            }}
          />

          {/* Vignette */}
          <motion.div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle,transparent_25%,black_100%)]
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.45, 0],
            }}
            transition={{
              duration: 1.2,
            }}
          />

          {/* Fade Out */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.35,
            }}
            onAnimationComplete={() => {
              onFinished();
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}