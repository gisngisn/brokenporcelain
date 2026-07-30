"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = MotionProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 24,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}