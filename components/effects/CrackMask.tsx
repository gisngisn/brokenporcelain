"use client";

import { motion } from "framer-motion";

interface Artwork {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Broken Doll",
    subtitle: "Archive No.001",
    year: "2026",
    image: "/gallery/001.webp",
  },
  {
    id: 2,
    title: "Silent Dream",
    subtitle: "Archive No.002",
    year: "2026",
    image: "/gallery/002.webp",
  },
  {
    id: 3,
    title: "Porcelain Memory",
    subtitle: "Archive No.003",
    year: "2026",
    image: "/gallery/003.webp",
  },
];

export default function GalleryScene() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="container-max py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <p className="tracking-[0.45em] text-xs text-white/35 uppercase">
            Archive of Forgotten Memories
          </p>

          <h1
            className="
              display
              mt-6
              text-6xl
              md:text-8xl
              font-light
            "
          >
            COLLECTIONS
          </h1>
        </motion.div>

        <div className="mt-24 grid gap-32">

          {artworks.map((artwork) => (
            <motion.article
              key={artwork.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                grid
                gap-12
                lg:grid-cols-[1.1fr_0.9fr]
                items-center
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0a0a0a]
                "
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="
                    aspect-[3/4]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />
              </div>

              {/* Info */}

              <div>

                <p className="tracking-[0.4em] uppercase text-white/30 text-xs">
                  {artwork.subtitle}
                </p>

                <h2
                  className="
                    display
                    mt-4
                    text-5xl
                    font-light
                  "
                >
                  {artwork.title}
                </h2>

                <div
                  className="
                    mt-10
                    h-px
                    w-24
                    bg-white/15
                  "
                />

                <p className="mt-10 max-w-md leading-8 text-white/60">
                  Every fracture remembers a forgotten dream.
                  Every porcelain surface preserves a silent
                  history waiting to be rediscovered.
                </p>

                <button
                  className="
                    mt-12
                    border
                    border-white/20
                    px-7
                    py-3
                    tracking-[0.3em]
                    text-xs
                    uppercase
                    transition
                    hover:border-white/60
                    hover:bg-white
                    hover:text-black
                  "
                >
                  View Artwork
                </button>

                <p className="mt-12 text-white/25 text-sm">
                  {artwork.year}
                </p>

              </div>

            </motion.article>
          ))}

        </div>
      </section>
    </main>
  );
}