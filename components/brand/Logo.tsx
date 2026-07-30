"use client";

import Image from "next/image";

interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Enter Gallery"
      className="
        group
        relative

        h-[118px]
        w-[118px]

        md:h-[132px]
        md:w-[132px]

        shrink-0

        overflow-hidden
        rounded-full

        cursor-pointer

        bg-black

        outline-none

        transition-all
        duration-500
        ease-out

        hover:scale-[1.04]
        active:scale-[0.97]
      "
    >
      {/* Portrait */}

      <Image
        src="/doll-face.png"
        alt="Broken Porcelain Doll"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-[1.03]
        "
      />

      {/* Thin porcelain ring */}

      <div
        className="
          absolute
          inset-0

          rounded-full

          border

          border-white/20

          transition-all
          duration-500

          group-hover:border-white/40
        "
      />

      {/* Soft light */}

      <div
        className="
          absolute
          inset-0

          rounded-full

          opacity-0

          shadow-[0_0_80px_rgba(255,255,255,.18)]

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Highlight */}

      <div
        className="
          pointer-events-none

          absolute

          left-[18%]
          top-[18%]

          h-6
          w-6

          rounded-full

          bg-white/25

          blur-lg

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />
    </button>
  );
}