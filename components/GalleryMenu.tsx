"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type GalleryMenuProps = {
  open?: boolean;
};

export default function GalleryMenu({
  open = true,
}: GalleryMenuProps) {
  if (!open) return null;

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        absolute
        left-0
        top-0
        z-40
        flex
        w-full
        items-center
        justify-between
        px-10
        py-8
      "
    >

      {/* 左侧标题 */}
      <div>
        <h1
          className="
            text-sm
            uppercase
            tracking-[0.5em]
            text-white
          "
        >
          Broken Porcelain Doll
        </h1>

        <p
          className="
            mt-3
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-white/40
          "
        >
          Digital Museum
        </p>
      </div>


      {/* 右侧菜单 */}
      <nav
        className="
          text-[10px]
          uppercase
          tracking-[0.5em]
        "
      >
        <Link
          href="/collection"
          className="
            text-white/50
            transition
            hover:text-white
          "
        >
          Gallery
        </Link>
      </nav>


    </motion.header>
  );
}