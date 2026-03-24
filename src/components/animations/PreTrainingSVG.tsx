"use client";

import { motion } from "framer-motion";

export default function PreTrainingSVG() {
  // Neural network layers
  const layers = [
    { x: 200, nodes: [100, 140, 180, 220], label: "Input" },
    { x: 260, nodes: [90, 130, 170, 210, 250], label: "" },
    { x: 320, nodes: [110, 155, 200, 245], label: "" },
    { x: 380, nodes: [120, 170, 220], label: "Output" },
  ];

  return (
    <svg viewBox="0 0 420 300" className="w-full h-auto" fill="none">
      <defs>
        <filter id="ptGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="ptFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Dataset input (left side) */}
      <motion.g
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <rect x="20" y="100" width="80" height="120" rx="8" fill="#111827" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="60" y="94" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="600" fontFamily="system-ui">Dataset</text>

        {/* Mini data rows */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.rect
            key={i}
            x="30"
            y={112 + i * 16}
            width={35 + (i % 3) * 8}
            height="6"
            rx="2"
            fill={i % 2 === 0 ? "#3b82f6" : "#06b6d4"}
            opacity={0.3}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}

        {/* Loading progress bar */}
        <rect x="30" y="206" width="60" height="4" rx="2" fill="#1f2937" />
        <motion.rect
          x="30" y="206" width="60" height="4" rx="2"
          fill="url(#ptFlow)"
          animate={{ width: [0, 60, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Arrow from dataset to network */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.path
          d="M105 160 L190 160"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [8, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
        {/* Flowing data particles */}
        <motion.circle cx="0" cy="0" r="3" fill="#3b82f6" filter="url(#ptGlow)">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M105 160 L190 160" />
        </motion.circle>
        <motion.circle cx="0" cy="0" r="2" fill="#06b6d4" filter="url(#ptGlow)">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M105 160 L190 160" begin="0.5s" />
        </motion.circle>
      </motion.g>

      {/* Neural network connections */}
      {layers.slice(0, -1).map((layer, li) => {
        const nextLayer = layers[li + 1];
        return layer.nodes.map((fromY, fi) =>
          nextLayer.nodes.map((toY, ti) => (
            <motion.line
              key={`${li}-${fi}-${ti}`}
              x1={layer.x}
              y1={fromY}
              x2={nextLayer.x}
              y2={toY}
              stroke="#3b82f6"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + li * 0.2 }}
            />
          ))
        );
      })}

      {/* Animated signal pulses through network */}
      {[0, 1, 2].map((pulse) => (
        <motion.circle
          key={pulse}
          cx="0" cy="0" r="3" fill="#06b6d4" filter="url(#ptGlow)"
        >
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            begin={`${pulse * 0.8}s`}
            path={`M200 ${layers[0].nodes[pulse % layers[0].nodes.length]} L260 ${layers[1].nodes[(pulse + 1) % layers[1].nodes.length]} L320 ${layers[2].nodes[pulse % layers[2].nodes.length]} L380 ${layers[3].nodes[pulse % layers[3].nodes.length]}`}
          />
        </motion.circle>
      ))}

      {/* Neural network nodes */}
      {layers.map((layer, li) =>
        layer.nodes.map((y, ni) => (
          <motion.g
            key={`${li}-${ni}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + li * 0.15 + ni * 0.05, type: "spring", stiffness: 200 }}
          >
            <circle cx={layer.x} cy={y} r="8" fill="#0a0f1e" stroke={li % 2 === 0 ? "#3b82f6" : "#06b6d4"} strokeWidth="1.5" />
            <motion.circle
              cx={layer.x} cy={y} r="4"
              fill={li % 2 === 0 ? "#3b82f6" : "#06b6d4"}
              animate={{ opacity: [0.4, 0.9, 0.4], r: [3, 4.5, 3] }}
              transition={{ duration: 2 + ni * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        ))
      )}

      {/* Training progress label */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <rect x="240" y="265" width="80" height="20" rx="10" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1" />
        <motion.text
          x="280" y="279"
          textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="600" fontFamily="monospace"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Training...
        </motion.text>
      </motion.g>

      {/* Epoch counter */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <text x="290" y="50" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">Pre-Training</text>
        <motion.text
          x="290" y="64"
          textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold" fontFamily="monospace"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          LDM Model
        </motion.text>
      </motion.g>
    </svg>
  );
}
