"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ArtworkViewerProps = {
  image: string;
  title: string;
};

export default function ArtworkViewer({
  image,
  title,
}: ArtworkViewerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        items-center
        justify-center
        pt-12
      "
    >
      {/* 后方光晕 */}
      <div
        className="
          absolute
          -inset-24
          rounded-full
          bg-white/[0.04]
          blur-3xl
        "
      />

      {/* 展柜外框 */}
      <div
        className="
          relative
          z-10
          overflow-hidden
          border
          border-white/10
          bg-black/60
          p-3
          shadow-[0_50px_150px_rgba(0,0,0,.9)]
        "
      >
        {/* 玻璃层 */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            bg-gradient-to-br
            from-white/[0.12]
            via-transparent
            to-transparent
          "
        />

        {/* 作品 */}
    <div
  className="
    relative
    h-[65vh]
    max-h-[760px]
    w-[43vh]
    max-w-[520px]
    overflow-hidden
    bg-black
  "
>
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width:768px) 90vw, 52vh"
            className="
              object-contain
              select-none
            "
            draggable={false}
          />
        </div>
      </div>

      {/* 底部展台光 */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-80px]
          h-40
          w-[80%]
          rounded-full
          bg-white/[0.06]
          blur-3xl
        "
      />
    </motion.div>
  );
}