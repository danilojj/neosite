"use client";

import { motion } from "framer-motion";

export default function DataFlowAnimation() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, delay: i * 0.3, ease: "easeInOut" as const },
        opacity: { duration: 0.5, delay: i * 0.3 },
      },
    }),
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.3 + 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 800 200" className="w-full h-auto" fill="none">
        {/* Connection lines */}
        <motion.path
          d="M 100 100 C 200 50, 250 50, 300 100"
          stroke="url(#blueGradient)"
          strokeWidth="2"
          variants={pathVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.path
          d="M 300 100 C 350 150, 450 150, 500 100"
          stroke="url(#cyanGradient)"
          strokeWidth="2"
          variants={pathVariants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.path
          d="M 500 100 C 550 50, 650 50, 700 100"
          stroke="url(#blueGradient)"
          strokeWidth="2"
          variants={pathVariants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* Data flow particles along paths */}
        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill="#3b82f6"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 100 100 C 200 50, 250 50, 300 100 C 350 150, 450 150, 500 100 C 550 50, 650 50, 700 100"
          />
        </motion.circle>
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill="#06b6d4"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 1 }}
        >
          <animateMotion
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
            path="M 100 100 C 200 50, 250 50, 300 100 C 350 150, 450 150, 500 100 C 550 50, 650 50, 700 100"
          />
        </motion.circle>

        {/* Step nodes */}
        {[100, 300, 500, 700].map((cx, i) => (
          <motion.g key={cx} variants={dotVariants} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <circle cx={cx} cy={100} r={20} fill="#111827" stroke="#3b82f6" strokeWidth={2} />
            <circle cx={cx} cy={100} r={8} fill="#3b82f6" opacity={0.6} />
            <circle cx={cx} cy={100} r={4} fill="#60a5fa" />
          </motion.g>
        ))}

        {/* Gradients and filters */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
