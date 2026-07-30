export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="text-center">
        <h1 className="font-[var(--font-heading)] text-7xl tracking-[0.35em]">
          404
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.45em] text-neutral-400">
          This Memory Does Not Exist
        </p>

        <a
          href="/"
          className="mt-12 inline-flex border border-white/20 px-8 py-3 text-xs uppercase tracking-[0.35em] transition-all duration-300 hover:border-white/60 hover:bg-white/5"
        >
          Return To Museum
        </a>
      </div>
    </main>
  );
}