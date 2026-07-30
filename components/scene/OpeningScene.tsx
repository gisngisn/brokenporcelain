"use client";

import Logo from "@/components/brand/Logo";

interface OpeningSceneProps {
  onEnter: () => void;
}

export default function OpeningScene({
  onEnter,
}: OpeningSceneProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">

      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[160px]
        "
      />

      <div className="relative z-10 flex flex-col items-center">

        {/* ================= BROKEN ================= */}

        <div className="flex items-center">

          <span
            className="
              text-[88px]
              md:text-[150px]
              font-extralight
              leading-none
              tracking-[0.02em]
            "
          >
            B
          </span>

          <span
            className="
              ml-2
              text-[88px]
              md:text-[150px]
              font-extralight
              leading-none
            "
          >
            R
          </span>

          {/* O */}

          <div className="mx-3 md:mx-4">
            <Logo onClick={onEnter} />
          </div>

          <span
            className="
              text-[88px]
              md:text-[150px]
              font-extralight
              leading-none
            "
          >
            K
          </span>

          <span
            className="
              ml-2
              text-[88px]
              md:text-[150px]
              font-extralight
              leading-none
            "
          >
            E
          </span>

          <span
            className="
              ml-2
              text-[88px]
              md:text-[150px]
              font-extralight
              leading-none
            "
          >
            N
          </span>

        </div>

        {/* ================= PORCELAIN ================= */}

        <h2
          className="
            mt-14
            font-[family-name:var(--font-display)]
            text-[36px]
            tracking-[0.45em]
            text-white/90
          "
        >
          PORCELAIN
        </h2>

        {/* ================= DOLL ================= */}

        <h3
          className="
            mt-5
            font-[family-name:var(--font-display)]
            text-[20px]
            tracking-[0.65em]
            text-white/55
          "
        >
          DOLL
        </h3>

        {/* Divider */}

        <div className="my-10 h-16 w-px bg-white/10" />

        {/* Tagline */}

        <p
          className="
            text-center
            text-[12px]
            uppercase
            tracking-[0.45em]
            text-white/35
          "
        >
          Archive of Forgotten Memories
        </p>

        {/* Hint */}

        <button
          onClick={onEnter}
          className="
            mt-12

            text-[11px]
            uppercase
            tracking-[0.55em]

            text-white/25

            transition-colors
            duration-300

            hover:text-white/70
          "
        >
          CLICK THE DOLL TO ENTER
        </button>

      </div>

    </main>
  );
}