"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type ArtworkFrameProps = {
  children: ReactNode;
  className?: string;
};

export default function ArtworkFrame({
  children,
  className,
}: ArtworkFrameProps) {
  return (
    <div
      className={clsx(
        "relative",
        "inline-flex",
        "items-center",
        "justify-center",
        className
      )}
    >
      {/* Outer Shadow */}
      <div
        className="absolute inset-0 rounded-sm"
        style={{
          boxShadow:
            "0 50px 120px rgba(0,0,0,.65), 0 0 60px rgba(255,255,255,.03)",
        }}
      />

      {/* Frame */}
      <div
        className="
          relative
          overflow-hidden
          rounded-sm
          border
          border-white/10
          bg-[#090909]
          p-5
        "
      >
        {/* Inner Border */}
        <div
          className="
            absolute
            inset-2
            rounded-sm
            border
            border-white/5
            pointer-events-none
          "
        />

        {/* Top Highlight */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.25), transparent)",
          }}
        />

        {/* Left Highlight */}
        <div
          className="absolute bottom-0 left-0 top-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,.18), transparent)",
          }}
        />

        {/* Artwork */}
        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Floor Reflection */}
      <div
        className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2"
        style={{
          width: "72%",
          height: 60,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,.07), transparent 75%)",
          filter: "blur(18px)",
        }}
      />
    </div>
  );
}