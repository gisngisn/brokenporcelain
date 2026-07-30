"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6">
      <div className="max-w-xl text-center">
        <h1 className="font-[var(--font-heading)] text-6xl tracking-[0.35em] text-white">
          ERROR
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-neutral-400">
          A Fragment Of Memory Has Been Lost
        </p>

        <button
          onClick={reset}
          className="mt-12 border border-white/20 px-8 py-3 text-xs uppercase tracking-[0.35em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}