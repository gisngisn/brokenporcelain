"use client";

import { motion } from "framer-motion";

type ArtworkInfoProps = {
  title: string;
  description: string;
};

export default function ArtworkInfo({
  title,
  description,
}: ArtworkInfoProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
      className="
        relative
        z-20
        mt-12
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* 系列编号 */}
      <div
        className="
          mb-5
          text-[10px]
          uppercase
          tracking-[0.6em]
          text-white/30
        "
      >
     
      </div>

      {/* 标题 */}
      <h1
        className="
          font-serif
          text-4xl
          font-light
          uppercase
          tracking-[0.45em]
          text-white
          md:text-5xl
        "
      >
        {title}
      </h1>

      {/* 分割线 */}
      <div
        className="
          my-7
          h-px
          w-24
          bg-white/20
        "
      />

      {/* 描述 */}
      <p
        className="
          max-w-md
          text-xs
          leading-8
          tracking-[0.25em]
          text-white/45
        "
      >
        {description}
      </p>

      {/* 元数据 */}
      <div
        className="
          mt-10
          flex
          gap-12
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-white/30
        "
      >
        <div>
          <span className="block text-white/20">
            Series
          </span>
          Broken DOLL
        </div>

        <div>
          <span className="block text-white/20">
            Year
          </span>
          2026
        </div>

        <div>
          <span className="block text-white/20">
            Status
          </span>
          Archived
        </div>
      </div>
    </motion.section>
  );
}