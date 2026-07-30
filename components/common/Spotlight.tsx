"use client";

import { motion } from "framer-motion";

type SpotlightProps = {
  intensity?: number;
};

export default function Spotlight({
  intensity = 0.12,
}: SpotlightProps) {
  return (
    <>
      {/* 主聚光灯 */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        animate={{
          opacity: [0.9, 1, 0.9],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 900,
          height: 900,
          background: `radial-gradient(circle,
              rgba(255,255,255,${intensity}) 0%,
              rgba(255,255,255,${intensity * 0.45}) 28%,
              rgba(255,255,255,${intensity * 0.15}) 48%,
              transparent 75%)`,
          filter: "blur(40px)",
        }}
      />

      {/* 上方灯光 */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 500,
          height: 380,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,.08), transparent)",
          filter: "blur(40px)",
        }}
      />

      {/* 地面反射 */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 700,
          height: 180,
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,.05), transparent 72%)",
          filter: "blur(32px)",
        }}
      />

      {/* 暗角 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.65) 100%)",
        }}
      />
    </>
  );
}