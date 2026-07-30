"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <>
      {/* 顶部博物馆聚光灯 */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-25%]
          z-0
          -translate-x-1/2
        "
        animate={{
          opacity: [
            0.65,
            1,
            0.65,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "1100px",
          height: "1100px",
          background:
            "radial-gradient(circle, rgba(255,245,220,.16) 0%, rgba(255,255,255,.06) 28%, transparent 68%)",
          filter: "blur(70px)",
        }}
      />

      {/* 作品底部展台光 */}
      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          left-1/2
          z-0
          -translate-x-1/2
        "
        animate={{
          scaleX: [
            0.9,
            1.05,
            0.9,
          ],
          opacity: [
            0.5,
            0.8,
            0.5,
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "900px",
          height: "260px",
          background:
            "radial-gradient(ellipse, rgba(255,220,160,.12), transparent 70%)",
          filter:
            "blur(60px)",
        }}
      />

      {/* 四周暗角 */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,.85) 100%)",
        }}
      />

      {/* 细微空气颗粒 */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-20
        "
        animate={{
          opacity: [
            0.12,
            0.25,
            0.12,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize:
            "80px 80px",
        }}
      />
    </>
  );
}