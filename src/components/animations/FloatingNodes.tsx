"use client";

import { motion } from "framer-motion";

export default function FloatingNodes() {
  const nodes = [
    { x: "10%", y: "20%", delay: 0, size: 4, color: "#3b82f6" },
    { x: "85%", y: "15%", delay: 1, size: 3, color: "#06b6d4" },
    { x: "70%", y: "80%", delay: 2, size: 5, color: "#60a5fa" },
    { x: "20%", y: "70%", delay: 0.5, size: 3, color: "#22d3ee" },
    { x: "50%", y: "10%", delay: 1.5, size: 4, color: "#3b82f6" },
    { x: "90%", y: "50%", delay: 2.5, size: 3, color: "#06b6d4" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            background: node.color,
            boxShadow: `0 0 ${node.size * 4}px ${node.color}40`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
