"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeScene() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#030303]
        text-white
      "
    >

      {/* 背景光 */}
      <div
        className="
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.08), transparent 48%)",
        }}
      />


      {/* 主内容 */}
      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
      >

        {/* 顶部小标题 */}
        <div
          className="
            mb-12
            text-[11px]
            uppercase
            tracking-[0.8em]
            text-white/40
          "
        >
          BROKEN PORCELAIN DOLL
        </div>


        {/* BROKEN */}
        <div
          className="
            flex
            items-center
            justify-center
            font-serif
            text-[clamp(70px,9vw,150px)]
            font-light
            uppercase
            tracking-[0.18em]
          "
        >

          <span>B</span>
          <span>R</span>


          {/* O 内娃娃 */}
          <motion.span
            whileHover={{
              scale: 1.04,
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(181,155,98,.25)",
                "0 0 45px rgba(181,155,98,.5)",
                "0 0 20px rgba(181,155,98,.25)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              mx-[0.08em]
              inline-flex
              h-[1.15em]
              w-[0.9em]
              items-center
              justify-center
              overflow-hidden
              rounded-[50%]
              border-[3px]
              border-[#b08a45]
              shadow-[0_0_35px_rgba(181,155,98,.35)]
              align-middle
            "
          >

            {/* 娃娃图片 */}
            <Image
              src="/doll.webp"
              alt="Broken Porcelain Doll"
              fill
              priority
              className="
                object-cover
              "
              style={{
                objectPosition:
                  "center 25%",
                transform:
                  "scale(1.25)",
              }}
            />


            {/* 黑金玻璃层 */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-[#fff1c4]/25
                via-transparent
                to-black/70
              "
            />


            {/* 内圈金属边 */}
            <span
              className="
                pointer-events-none
                absolute
                inset-[5px]
                rounded-[50%]
                border
                border-[#e4c47b]/70
              "
            />


            {/* 外层古董边框 */}
            <span
              className="
                pointer-events-none
                absolute
                inset-[-6px]
                rounded-[50%]
                border
                border-[#76531c]/60
              "
            />


            {/* 金色流光 */}
            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                inset-[-40%]
                rounded-full
                bg-[conic-gradient(from_0deg,transparent,rgba(255,220,140,.25),transparent)]
              "
            />

          </motion.span>


          <span>K</span>
          <span>E</span>
          <span>N</span>

        </div>



        {/* PORCELAIN DOLL */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-10
          "
        >

          <div
            className="
              font-serif
              text-[clamp(35px,4vw,65px)]
              font-light
              tracking-[0.45em]
            "
          >
            PORCELAIN
          </div>


          <div
            className="
              font-serif
              text-[clamp(28px,3vw,48px