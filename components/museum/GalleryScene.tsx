\
"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Artwork = {
  id: number;
  image: string;
  title: string;
  description: string;
  year?: string;
  medium?: string;
  series?: string;
};

export default function GalleryScene() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [index, setIndex] = useState(0);
  const wheelLock = useRef(false);

  useEffect(() => {
    fetch("/gallery.json")
      .then((r) => r.json())
      .then(setArtworks)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!artworks.length) return;

    const onWheel = (e: WheelEvent) => {
      if (wheelLock.current || Math.abs(e.deltaY) < 25) return;

      wheelLock.current = true;

      setIndex((current) => {
        if (e.deltaY > 0) {
          return Math.min(current + 1, artworks.length - 1);
        }
        return Math.max(current - 1, 0);
      });

      setTimeout(() => {
        wheelLock.current = false;
      }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => window.removeEventListener("wheel", onWheel);
  }, [artworks]);

  if (!artworks.length) {
    return (
      <main className="flex h-screen items-center justify-center bg-[#050505] text-neutral-300">
        Loading Gallery...
      </main>
    );
  }

  const artwork = artworks[index];

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-[#050505]">
      <motion.div
        animate={{ scale: [1, 1.03, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-1/2 top-[42%] h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[260px]"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={artwork.image}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.97 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            animate={{ scale: [1, 1.005, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="relative"
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              width={720}
              height={1080}
              priority
              className="h-[72vh] w-auto select-none object-contain"
            />

            <div className="absolute left-0 right-0 top-full h-24 scale-y-[-1] overflow-hidden opacity-5 blur-md">
              <Image
                src={artwork.image}
                alt=""
                width={720}
                height={1080}
                className="w-full"
              />
            </div>
          </motion.div>

          <h2 className="mt-10 text-4xl tracking-[0.08em] text-white">
            {artwork.title}
          </h2>

          <p className="mt-3 max-w-xl text-center text-sm uppercase tracking-[0.28em] text-neutral-400">
            {artwork.description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,.72)_100%)]" />
    </main>
  );
}
