"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden z-10">
      {/* Base gradient line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-neo-blue/30 to-transparent" />
      </div>

      {/* Animated sweep light - primary */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-[3px] w-48 md:w-72"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #60a5fa, transparent)",
          filter: "blur(1px)",
        }}
        animate={{ x: ["-20vw", "120vw"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated sweep light - secondary (reverse, delayed) */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-[2px] w-36 md:w-56"
        style={{
          background:
            "linear-gradient(90deg, transparent, #06b6d4, #22d3ee, transparent)",
          filter: "blur(1px)",
        }}
        animate={{ x: ["120vw", "-20vw"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />

      {/* Animated sweep light - tertiary */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-[2px] w-24 md:w-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, #60a5fa, #3b82f6, transparent)",
          filter: "blur(0.5px)",
        }}
        animate={{ x: ["-10vw", "110vw"] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear",
          delay: 2.5,
        }}
      />

      {/* Glow bloom behind the sweeps */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-12 w-48 md:w-72 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.15), transparent 70%)",
        }}
        animate={{ x: ["-20vw", "120vw"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-10 w-36 md:w-56 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.12), transparent 70%)",
        }}
        animate={{ x: ["120vw", "-20vw"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />

      {/* Floating particles along the line */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `calc(50% + ${(i % 3 - 1) * 8}px)`,
            width: i % 3 === 0 ? 4 : 3,
            height: i % 3 === 0 ? 4 : 3,
            background: i % 2 === 0 ? "#3b82f6" : "#06b6d4",
            boxShadow: `0 0 ${6 + (i % 3) * 3}px ${i % 2 === 0 ? "rgba(59,130,246,0.6)" : "rgba(6,182,212,0.6)"}`,
          }}
          animate={{
            x: i % 2 === 0 ? ["-5vw", "105vw"] : ["105vw", "-5vw"],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: 3 + (i % 4) * 0.8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        />
      ))}

      {/* Center pulse node */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-neo-cyan" style={{ boxShadow: "0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)" }} />
      </motion.div>
    </div>
  );
}
