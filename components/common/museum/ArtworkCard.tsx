"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArtworkFrame from "@/components/common/ArtworkFrame";

export type Artwork = {
  id: number;
  image: string;
  title: string;
  description: string;
  year?: string;
  medium?: string;
  series?: string;
  edition?: string;
  size?: string;
};

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({
  artwork,
}: ArtworkCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
        scale: 1.02,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex justify-center"
    >
      <ArtworkFrame>
        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={900}
            height={1350}
            priority
            draggable={false}
            className="
              h-[72vh]
              w-auto
              select-none
              object-contain
            "
          />
        </motion.div>
      </ArtworkFrame>
    </motion.div>
  );
}