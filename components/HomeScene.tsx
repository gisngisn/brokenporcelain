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

      {/* 背景 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.05), transparent 55%)",
        }}
      />


      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
      >


        {/* 顶部品牌 */}
        <div
          className="
            mb-8
            text-[10px]
            uppercase
            tracking-[0.9em]
            text-white/35
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
            text-[clamp(60px,7vw,120px)]
            font-light
            uppercase
            tracking-[0.08em]
          "
        >

          <span>B</span>

          <span>R</span>


          {/* O 娃娃字母 */}
          <Link
            href="/gallery"
            className="cursor-pointer"
          >

            <motion.span
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                group
                relative
                mx-[0.04em]
                inline-flex
                h-[1.17em]
                w-[1.17em]
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border-[3px]
                border-[#b08a45]
                align-middle
                shadow-[inset_0_0_20px_rgba(0,0,0,.9)]
                transition-all
                duration-500
                hover:border-[#e4c477]
                hover:shadow-[0_0_35px_rgba(220,180,90,75)]
              "
            >

              {/* 娃娃 */}
              <Image
                src="/doll.webp"
                alt="Broken Porcelain Doll"
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
                style={{
                  objectPosition:
                    "center 25%",
                  transform:
                    "scale(0.98)",
                }}
              />


              {/* 暗黑玻璃 */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/15
                  via-transparent
                  to-black/75
                "
              />


              {/* 内金边 */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-[5px]
                  rounded-full
                  border
                  border-[#e0bd70]/70
                "
              />


              {/* 外复古边框 */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-[-6px]
                  rounded-full
                  border
                  border-[#6e4b18]
                  transition-all
                  duration-500
                  group-hover:border-[#d8b45e]
                "
              />


              {/* 悬停反光 */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  bg-gradient-to-tr
                  from-[#ffe6a3]/30
                  via-transparent
                  to-transparent
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

            </motion.span>

          </Link>


          <span>K</span>
          <span>E</span>
          <span>N</span>

        </div>




        {/* PORCELAIN DOLL */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-5
          "
        >

          <div
            className="
              font-serif
              text-[clamp(32px,3.5vw,56px)]
              font-light
              tracking-[0.35em]
            "
          >
            PORCELAIN
          </div>


          <div
            className="
              font-serif
              text-[clamp(32px,3.5vw,56px)]
              font-light
              tracking-[0.35em]
              text-white
            "
          >
            DOLL
          </div>

        </div>




        {/* 分割线 */}
        <div
          className="
            my-8
            h-px
            w-16
            bg-[#b08a45]/60
          "
        />



        {/* 标语 */}
        <div
          className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#b08a45]
          "
        >
          ARCHIVE OF FORGOTTEN MEMORIES
        </div>




        {/* 进入图库 */}
        <Link
          href="/gallery"
          className="
            group
            mt-12
            flex
            items-center
            gap-8
            text-xs
            uppercase
            tracking-[0.5em]
            text-white/80
          "
        >

          <span
            className="
              h-px
              w-20
              bg-[#b08a45]/60
              transition-all
              duration-500
              group-hover:w-32
            "
          />

          ENTER GALLERY

          <span
            className="
              h-px
              w-20
              bg-[#b08a45]/60
              transition-all
              duration-500
              group-hover:w-32
            "
          />

        </Link>


      </motion.section>



      {/* 底部 */}
      <div
        className="
          absolute
          bottom-8
          text-[10px]
          uppercase
          tracking-[0.6em]
          text-white/20
        "
      >
        DIGITAL MUSEUM · 2026
      </div>


    </main>
  );
}