"use client";

import { motion } from "framer-motion";

export default function PostTrainingSVG() {
  const predictions = [
    { label: "Prediction A", confidence: 92, color: "#3b82f6" },
    { label: "Prediction B", confidence: 87, color: "#06b6d4" },
    { label: "Prediction C", confidence: 78, color: "#60a5fa" },
    { label: "Prediction D", confidence: 95, color: "#22d3ee" },
  ];

  return (
    <svg viewBox="0 0 420 300" className="w-full h-auto" fill="none">
      <defs>
        <filter id="poGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="poBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="poCyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="poModelGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Trained model (left center) */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Model glow */}
        <circle cx="110" cy="150" r="60" fill="url(#poModelGlow)" />

        {/* Model hexagon shape */}
        <motion.path
          d="M110 95 L150 120 L150 180 L110 205 L70 180 L70 120 Z"
          fill="#0a0f1e"
          stroke="#3b82f6"
          strokeWidth="2"
          animate={{ stroke: ["#3b82f6", "#06b6d4", "#3b82f6"] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Inner hexagon */}
        <motion.path
          d="M110 115 L135 130 L135 170 L110 185 L85 170 L85 130 Z"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeDasharray="4 3"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "110px 150px" }}
        />

        {/* Center brain icon (simplified) */}
        <motion.circle
          cx="110" cy="150" r="12"
          fill="#3b82f6"
          filter="url(#poGlow)"
          animate={{ r: [12, 14, 12], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.path
          d="M104 150 Q107 142 110 150 Q113 158 116 150"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          animate={{ d: ["M104 150 Q107 142 110 150 Q113 158 116 150", "M104 150 Q107 158 110 150 Q113 142 116 150", "M104 150 Q107 142 110 150 Q113 158 116 150"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <text x="110" y="225" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="600" fontFamily="system-ui">Trained Model</text>
        <text x="110" y="238" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="system-ui">Post-Training</text>
      </motion.g>

      {/* Output streams */}
      {predictions.map((pred, i) => {
        const startY = 150;
        const endY = 70 + i * 55;
        const endX = 340;
        const midX = 200;

        return (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.15 }}
          >
            {/* Connection path */}
            <motion.path
              d={`M155 ${startY} C${midX} ${startY}, ${midX} ${endY}, ${endX - 100} ${endY}`}
              stroke={pred.color}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.4"
              animate={{ strokeDashoffset: [8, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Flowing particle */}
            <motion.circle cx="0" cy="0" r="2.5" fill={pred.color} filter="url(#poGlow)">
              <animateMotion
                dur={`${1.8 + i * 0.3}s`}
                repeatCount="indefinite"
                path={`M155 ${startY} C${midX} ${startY}, ${midX} ${endY}, ${endX - 100} ${endY}`}
                begin={`${i * 0.3}s`}
              />
            </motion.circle>

            {/* Prediction card */}
            <motion.g
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              <rect x="245" y={endY - 18} width="160" height="36" rx="6" fill="#111827" stroke={pred.color} strokeWidth="1" opacity="0.8" />
              <text x="258" y={endY + 1} fill={pred.color} fontSize="8" fontWeight="600" fontFamily="system-ui">{pred.label}</text>

              {/* Confidence bar background */}
              <rect x="330" y={endY - 6} width="60" height="12" rx="3" fill="#1f2937" />
              {/* Confidence bar fill */}
              <motion.rect
                x="330" y={endY - 6}
                width="0" height="12" rx="3"
                fill={pred.color}
                opacity="0.4"
                whileInView={{ width: (pred.confidence / 100) * 60 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.15, duration: 0.8 }}
              />
              <text x="360" y={endY + 3} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="monospace">{pred.confidence}%</text>
            </motion.g>
          </motion.g>
        );
      })}

      {/* Real-time indicator */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        <motion.circle
          cx="390" cy="35" r="4"
          fill="#22d3ee"
          filter="url(#poGlow)"
          animate={{ r: [3, 5, 3], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <text x="378" y="39" textAnchor="end" fill="#22d3ee" fontSize="8" fontWeight="600" fontFamily="monospace">LIVE</text>
      </motion.g>
    </svg>
  );
}
