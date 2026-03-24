"use client";

import { motion } from "framer-motion";
import { Database, Layers, Zap, RefreshCw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import GradientOrb from "@/components/animations/GradientOrb";
import FloatingNodes from "@/components/animations/FloatingNodes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { staggerContainer } from "@/lib/animations";

const icons = [Database, Layers, Zap, RefreshCw];

export default function LDM() {
  const { t } = useLanguage();

  const features = [
    { titleKey: "ldm.feature1.title", descKey: "ldm.feature1.desc" },
    { titleKey: "ldm.feature2.title", descKey: "ldm.feature2.desc" },
    { titleKey: "ldm.feature3.title", descKey: "ldm.feature3.desc" },
    { titleKey: "ldm.feature4.title", descKey: "ldm.feature4.desc" },
  ];

  return (
    <section id="technology" className="relative py-24 md:py-32 bg-neo-dark/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <FloatingNodes />
      <GradientOrb color="cyan" size="lg" className="-right-32 top-1/4 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("ldm.label")}
          title={t("ldm.title")}
          subtitle={t("ldm.subtitle")}
        />

        {/* Central visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 mb-16 flex justify-center"
        >
          <div className="relative w-64 h-64">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-neo-blue/20"
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neo-blue shadow-lg shadow-neo-blue/50" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neo-cyan shadow-lg shadow-neo-cyan/50" />
            </motion.div>

            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-neo-cyan/20"
            >
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-neo-blue-light shadow-lg shadow-neo-blue-light/50" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-neo-cyan-light shadow-lg shadow-neo-cyan-light/50" />
            </motion.div>

            {/* Center core */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-neo-blue/20 to-neo-cyan/20 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-neo-blue to-neo-cyan flex items-center justify-center shadow-xl shadow-neo-blue/30"
              >
                <span className="text-white font-bold text-lg">LDM</span>
              </motion.div>
            </div>

            {/* Data streams */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={angle}
                className="absolute w-1 h-8"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "center -60px",
                  transform: `rotate(${angle}deg)`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              >
                <div className="w-full h-full bg-gradient-to-b from-neo-blue/60 to-transparent rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <GlowCard key={i} glowColor={i % 2 === 0 ? "blue" : "cyan"} custom={i}>
                <div className="mb-4 w-12 h-12 rounded-lg bg-neo-blue/10 flex items-center justify-center">
                  <Icon className="text-neo-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-neo-text mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-neo-muted leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
