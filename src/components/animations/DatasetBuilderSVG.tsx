"use client";

import { motion } from "framer-motion";

export default function DatasetBuilderSVG() {
  const rows = [
    { y: 90, widths: [50, 70, 40, 55], delay: 0 },
    { y: 112, widths: [60, 45, 65, 35], delay: 0.1 },
    { y: 134, widths: [45, 55, 50, 60], delay: 0.2 },
    { y: 156, widths: [55, 40, 60, 45], delay: 0.3 },
    { y: 178, widths: [40, 65, 45, 55], delay: 0.4 },
    { y: 200, widths: [65, 50, 35, 50], delay: 0.5 },
  ];

  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
      <defs>
        <filter id="dsGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="dsBlueBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="dsCyanBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Dataset table frame */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <rect x="40" y="40" width="240" height="200" rx="10" fill="#0a0f1e" stroke="#1f2937" strokeWidth="1.5" />

        {/* Table header */}
        <rect x="40" y="40" width="240" height="30" rx="10" fill="#111827" />
        <rect x="40" y="60" width="240" height="10" fill="#111827" />
        {[60, 120, 180].map((x) => (
          <line key={x} x1={x} y1="45" x2={x + 30} y2="45" stroke="#3b82f6" strokeWidth="0.5" opacity="0" />
        ))}
        <text x="60" y="60" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="600">ID</text>
        <text x="110" y="60" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="600">Feature</text>
        <text x="170" y="60" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="600">Label</text>
        <text x="230" y="60" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="600">Score</text>

        {/* Header underline */}
        <line x1="50" y1="70" x2="270" y2="70" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />

        {/* Animated data rows */}
        {rows.map((row, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + row.delay }}
          >
            {/* Row background on hover simulation */}
            <motion.rect
              x="42" y={row.y - 7} width="236" height="18" rx="2"
              fill={i % 2 === 0 ? "#3b82f6" : "#06b6d4"}
              initial={{ opacity: 0.02 }}
              animate={{ opacity: [0.02, 0.06, 0.02] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
            {/* Data cells */}
            {row.widths.map((w, j) => {
              const x = 55 + j * 55;
              return (
                <rect
                  key={j}
                  x={x}
                  y={row.y - 3}
                  width={Math.min(w * 0.6, 40)}
                  height="6"
                  rx="2"
                  fill={j === 2 ? "url(#dsCyanBar)" : "url(#dsBlueBar)"}
                />
              );
            })}
          </motion.g>
        ))}
      </motion.g>

      {/* Right side: Dataset creation visualization */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Arrow from table to dataset */}
        <motion.path
          d="M285 140 L310 140"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [6, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Dataset package */}
        <rect x="315" y="90" width="70" height="100" rx="8" fill="#111827" stroke="#06b6d4" strokeWidth="1.5" />

        {/* Dataset icon inside */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Stacked layers representing dataset */}
          <ellipse cx="350" cy="120" rx="20" ry="6" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="1" />
          <ellipse cx="350" cy="130" rx="20" ry="6" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="1" />
          <ellipse cx="350" cy="140" rx="20" ry="6" fill="#06b6d4" opacity="0.3" stroke="#06b6d4" strokeWidth="1" />
          <ellipse cx="350" cy="150" rx="20" ry="6" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <ellipse cx="350" cy="160" rx="20" ry="6" fill="#06b6d4" opacity="0.4" stroke="#06b6d4" strokeWidth="1.5" />
        </motion.g>

        {/* Checkmark badge */}
        <motion.g
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, type: "spring" }}
        >
          <circle cx="375" cy="95" r="10" fill="#0a0f1e" stroke="#22d3ee" strokeWidth="1.5" />
          <path d="M370 95 L374 99 L381 91" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>

        <text x="350" y="205" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="600" fontFamily="system-ui">Dataset</text>
        <text x="350" y="216" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="system-ui">Curated</text>
      </motion.g>

      {/* Scanning line animation on the table */}
      <motion.line
        x1="42" y1="80" x2="278" y2="80"
        stroke="#06b6d4"
        strokeWidth="1"
        opacity="0.4"
        filter="url(#dsGlow)"
        animate={{ y1: [80, 230, 80], y2: [80, 230, 80] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
