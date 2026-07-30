"use client";

import { motion } from "framer-motion";

type OpeningSceneProps = {
  onEnter: () => void;
};

export default function OpeningScene({
  onEnter,
}: OpeningSceneProps) {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#050505]">
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-[var(--font-heading)] text-7xl tracking-[0.45em] text-white select-none"
        >
          BR
          <button
            onClick={onEnter}
            aria-label="Enter Museum"
            className="mx-2 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:scale-110 hover:border-white/60"
          >
            ◯
          </button>
          KEN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 font-[var(--font-body)] text-xs uppercase tracking-[0.6em] text-neutral-400"
        >
          A Digital Museum of Fragile Memories
        </motion.p>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-14 border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.35em] text-white transition hover:border-white/60"
        >
          Enter
        </motion.button>
      </div>
    </main>
  );
}
