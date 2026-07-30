"use client";

import { motion } from "framer-motion";

export default function MuseumBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Main Ambient Light */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: [0.08, 0.12, 0.08],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at 50% 22%, rgba(255,255,255,.12), transparent 62%)",
        }}
      />

      {/* Left Light */}
      <motion.div
        className="pointer-events-none absolute left-[-18%] top-[10%] h-[80vh] w-[40vw]"
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.12), transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      {/* Right Light */}
      <motion.div
        className="pointer-events-none absolute right-[-18%] top-[12%] h-[80vh] w-[40vw]"
        animate={{
          opacity: [0.03, 0.055, 0.03],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.1), transparent 72%)",
          filter: "blur(100px)",
        }}
      />

      {/* Floor Reflection */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[220px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,.06), transparent 72%)",
          filter: "blur(50px)",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 48%, rgba(0,0,0,.82) 100%)",
        }}
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 0.5px, transparent 0.5px)",
          backgroundSize: "8px 8px",
          mixBlendMode: "soft-light",
        }}
      />
    </>
  );
}