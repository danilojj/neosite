"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "cyan";
  custom?: number;
}

export default function GlowCard({ children, className, glowColor = "blue", custom = 0 }: GlowCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: custom * 0.1, ease: "easeOut" },
        },
      }}
      className={cn(
        "relative group rounded-xl border border-neo-border bg-neo-card/50 backdrop-blur-sm p-6",
        "transition-all duration-500",
        "hover:border-opacity-50",
        glowColor === "blue" && "hover:border-neo-blue/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
        glowColor === "cyan" && "hover:border-neo-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          glowColor === "blue" && "bg-gradient-to-br from-neo-blue/5 to-transparent",
          glowColor === "cyan" && "bg-gradient-to-br from-neo-cyan/5 to-transparent"
        )}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
