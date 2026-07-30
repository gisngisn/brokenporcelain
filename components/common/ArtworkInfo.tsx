"use client";

import { motion } from "framer-motion";

export type ArtworkInfoProps = {
  title: string;
  description?: string;
  year?: string;
  medium?: string;
  series?: string;
  edition?: string;
  size?: string;
};

export default function ArtworkInfo({
  title,
  description,
  year,
  medium,
  series,
  edition,
  size,
}: ArtworkInfoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mt-10 w-full max-w-3xl text-center"
    >
      <h2
        className="
          font-heading
          text-4xl
          tracking-[0.18em]
          text-white
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            tracking-[0.18em]
            text-neutral-400
          "
        >
          {description}
        </p>
      )}

      <div
        className="
          mt-10
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-10
          gap-y-4
          text-xs
          uppercase
          tracking-[0.28em]
          text-neutral-500
        "
      >
        {year && (
          <div className="space-y-1">
            <div className="text-[10px] text-neutral-600">
              Year
            </div>
            <div>{year}</div>
          </div>
        )}

        {medium && (
          <div className="space-y-1">
            <div className="text-[10px] text-neutral-600">
              Medium
            </div>
            <div>{medium}</div>
          </div>
        )}

        {series && (
          <div className="space-y-1">
            <div className="text-[10px] text-neutral-600">
              Series
            </div>
            <div>{series}</div>
          </div>
        )}

        {edition && (
          <div className="space-y-1">
            <div className="text-[10px] text-neutral-600">
              Edition
            </div>
            <div>{edition}</div>
          </div>
        )}

        {size && (
          <div className="space-y-1">
            <div className="text-[10px] text-neutral-600">
              Size
            </div>
            <div>{size}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}