"use client";

import ArtworkCounter from "@/components/common/ArtworkCounter";
import ScrollHint from "@/components/common/ScrollHint";

type MuseumHUDProps = {
  current: number;
  total: number;
};

export default function MuseumHUD({
  current,
  total,
}: MuseumHUDProps) {
  return (
    <>
      {/* Logo */}
      <header className="pointer-events-none absolute left-10 top-10 z-40">
        <h1
          className="
            text-sm
            font-light
            uppercase
            tracking-[0.45em]
            text-white
          "
        >
          Broken Porcelain
        </h1>

        <p
          className="
            mt-3
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-neutral-500
          "
        >
          Digital Museum
        </p>
      </header>

      {/* Counter */}
      <ArtworkCounter
        current={current}
        total={total}
      />

      {/* Scroll Hint */}
      <ScrollHint />

      {/* Footer */}
      <footer
        className="
          absolute
          bottom-10
          left-10
          z-40
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-neutral-600
        "
      >
        © 2026 Broken Porcelain
      </footer>
    </>
  );
}