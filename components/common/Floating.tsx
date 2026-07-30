"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode } from "react";

type FloatingProps = MotionProps & {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
};

export default function Floating({
  children,
  className,
  duration = 8,
  distance = 10,
  ...props
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}