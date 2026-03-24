"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={center ? "text-center" : ""}
    >
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-neo-blue/10 text-neo-blue border border-neo-blue/20 mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neo-text mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neo-muted max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-neo-blue to-neo-cyan rounded-full" />
    </motion.div>
  );
}
