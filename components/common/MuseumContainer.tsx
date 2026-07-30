"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type MuseumContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function MuseumContainer({
  children,
  className,
}: MuseumContainerProps) {
  return (
    <main
      className={clsx(
        "relative",
        "min-h-screen",
        "w-full",
        "overflow-hidden",
        "bg-[#050505]",
        "text-white",
        className
      )}
    >
      {/* Ambient Light */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 18%,
              rgba(255,255,255,.07),
              rgba(255,255,255,.02) 28%,
              transparent 70%)
          `,
        }}
      />

      {/* Top Shadow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.65), transparent)",
        }}
      />

      {/* Bottom Shadow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.75), transparent)",
        }}
      />

      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage: `
            radial-gradient(#ffffff 0.45px, transparent 0.45px)
          `,
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </main>
  );
}