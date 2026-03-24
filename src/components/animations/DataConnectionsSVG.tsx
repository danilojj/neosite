"use client";

import { motion } from "framer-motion";

export default function DataConnectionsSVG() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
      <defs>
        <linearGradient id="dcBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="dcCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
        </linearGradient>
        <filter id="dcGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dcGlowSoft">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Data source nodes (left side) */}
      {/* Database icon */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <rect x="30" y="50" width="60" height="50" rx="8" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        <ellipse cx="60" cy="56" rx="22" ry="6" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
        <line x1="38" y1="66" x2="82" y2="66" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="38" y1="76" x2="82" y2="76" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="38" y1="86" x2="82" y2="86" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <text x="60" y="110" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="system-ui">Warehouse</text>
      </motion.g>

      {/* Data Lake icon */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <rect x="30" y="130" width="60" height="50" rx="8" fill="#111827" stroke="#06b6d4" strokeWidth="1.5" />
        <motion.path
          d="M45 155 Q55 145 60 155 Q65 165 75 155"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          animate={{ d: ["M45 155 Q55 145 60 155 Q65 165 75 155", "M45 155 Q55 165 60 155 Q65 145 75 155", "M45 155 Q55 145 60 155 Q65 165 75 155"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="60" y="192" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="system-ui">Data Lake</text>
      </motion.g>

      {/* API icon */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <rect x="30" y="210" width="60" height="50" rx="8" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="60" y="240" textAnchor="middle" fill="#60a5fa" fontSize="11" fontFamily="monospace" fontWeight="bold">API</text>
        <text x="60" y="272" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="system-ui">External</text>
      </motion.g>

      {/* Central NeoData hub */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Outer glow ring */}
        <motion.circle
          cx="260" cy="150" r="55"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          opacity="0.2"
          animate={{ r: [55, 60, 55], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Main circle */}
        <circle cx="260" cy="150" r="45" fill="#0a0f1e" stroke="#3b82f6" strokeWidth="2" />
        {/* Inner ring */}
        <motion.circle
          cx="260" cy="150" r="30"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeDasharray="6 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "260px 150px" }}
        />
        {/* Center dot */}
        <motion.circle
          cx="260" cy="150" r="8"
          fill="#3b82f6"
          filter="url(#dcGlow)"
          animate={{ r: [8, 10, 8], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="260" y="154" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="system-ui">NEO</text>
        <text x="260" y="210" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="600" fontFamily="system-ui">NeoData</text>
      </motion.g>

      {/* Connection paths with flowing particles */}
      {/* Path 1: DB → Hub */}
      <motion.path
        d="M90 75 C140 75, 180 120, 215 140"
        stroke="url(#dcBlueGrad)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <motion.circle cx="0" cy="0" r="3" fill="#3b82f6" filter="url(#dcGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M90 75 C140 75, 180 120, 215 140" />
      </motion.circle>

      {/* Path 2: Lake → Hub */}
      <motion.path
        d="M90 155 C140 155, 170 150, 215 150"
        stroke="url(#dcCyanGrad)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.75 }}
      />
      <motion.circle cx="0" cy="0" r="3" fill="#06b6d4" filter="url(#dcGlow)">
        <animateMotion dur="2s" repeatCount="indefinite" path="M90 155 C140 155, 170 150, 215 150" begin="0.5s" />
      </motion.circle>

      {/* Path 3: API → Hub */}
      <motion.path
        d="M90 235 C140 235, 180 190, 215 165"
        stroke="url(#dcBlueGrad)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.9 }}
      />
      <motion.circle cx="0" cy="0" r="3" fill="#60a5fa" filter="url(#dcGlow)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M90 235 C140 235, 180 190, 215 165" begin="1s" />
      </motion.circle>

      {/* Output arrow from hub */}
      <motion.path
        d="M305 150 L370 150"
        stroke="#3b82f6"
        strokeWidth="2"
        markerEnd="url(#dcArrow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.circle cx="0" cy="0" r="2.5" fill="#3b82f6" filter="url(#dcGlow)">
        <animateMotion dur="1.5s" repeatCount="indefinite" path="M305 150 L370 150" />
      </motion.circle>

      <defs>
        <marker id="dcArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0 L8 3 L0 6 Z" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
}
