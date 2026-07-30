export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border border-white/20" />

          <div
            className="absolute inset-0 rounded-full border-t border-white animate-spin"
            style={{
              animationDuration: "1.4s",
            }}
          />
        </div>

        <h2 className="mt-10 font-[var(--font-heading)] text-3xl tracking-[0.35em] text-white">
          BROKEN
        </h2>

        <p className="mt-5 text-xs uppercase tracking-[0.45em] text-neutral-500">
          Loading Museum...
        </p>
      </div>
    </main>
  );
}