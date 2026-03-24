"use client";

import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "blue" | "cyan" | "mixed";
  size?: "sm" | "md" | "lg";
}

export default function GradientOrb({ className, color = "blue", size = "md" }: GradientOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none animate-pulse-glow",
        size === "sm" && "w-32 h-32",
        size === "md" && "w-64 h-64",
        size === "lg" && "w-96 h-96",
        color === "blue" && "bg-neo-blue/10",
        color === "cyan" && "bg-neo-cyan/10",
        color === "mixed" && "bg-gradient-to-br from-neo-blue/10 to-neo-cyan/10",
        className
      )}
    />
  );
}
