"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Settings, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DataFlowAnimation from "@/components/animations/DataFlowAnimation";
import GradientOrb from "@/components/animations/GradientOrb";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp } from "@/lib/animations";

const stepIcons = [Database, Cpu, Settings, BarChart3];

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { titleKey: "howItWorks.step1.title", descKey: "howItWorks.step1.desc", color: "blue" as const },
    { titleKey: "howItWorks.step2.title", descKey: "howItWorks.step2.desc", color: "cyan" as const },
    { titleKey: "howItWorks.step3.title", descKey: "howItWorks.step3.desc", color: "blue" as const },
    { titleKey: "howItWorks.step4.title", descKey: "howItWorks.step4.desc", color: "cyan" as const },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-neo-dark/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <GradientOrb color="mixed" size="lg" className="top-1/3 -right-48 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("howItWorks.label")}
          title={t("howItWorks.title")}
          subtitle={t("howItWorks.subtitle")}
        />

        {/* Data Flow Animation */}
        <div className="mt-16 mb-12">
          <DataFlowAnimation />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-neo-card border border-neo-border flex items-center justify-center relative"
                >
                  <Icon
                    className={step.color === "blue" ? "text-neo-blue" : "text-neo-cyan"}
                    size={28}
                  />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neo-blue text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </motion.div>

                <h3 className="text-lg font-semibold text-neo-text mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-neo-muted leading-relaxed">
                  {t(step.descKey)}
                </p>

                {/* Connector line (not on last item) */}
                {i < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
                    className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-neo-blue/50 to-neo-cyan/50 origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pre-Training / Post-Training Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Pre-Training */}
          <div className="relative rounded-xl border border-neo-border bg-neo-card/50 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neo-blue to-neo-blue-light" />
            <h4 className="text-lg font-semibold text-neo-text mb-3">{t("howItWorks.step2.title")}</h4>
            <p className="text-sm text-neo-muted mb-6">{t("howItWorks.step2.desc")}</p>

            {/* Neural network forming animation */}
            <div className="relative h-32 flex items-center justify-center">
              <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
                {/* Scattered dots that animate into formation */}
                {[
                  { cx: 20, cy: 20 }, { cx: 20, cy: 40 }, { cx: 20, cy: 60 },
                  { cx: 70, cy: 15 }, { cx: 70, cy: 40 }, { cx: 70, cy: 65 },
                  { cx: 130, cy: 15 }, { cx: 130, cy: 40 }, { cx: 130, cy: 65 },
                  { cx: 180, cy: 30 }, { cx: 180, cy: 50 },
                ].map((pos, i) => (
                  <motion.circle
                    key={i}
                    cx={pos.cx}
                    cy={pos.cy}
                    r={4}
                    fill="#3b82f6"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  />
                ))}
                {/* Connection lines */}
                {[
                  "M20,20 L70,15", "M20,20 L70,40", "M20,20 L70,65",
                  "M20,40 L70,15", "M20,40 L70,40", "M20,40 L70,65",
                  "M20,60 L70,15", "M20,60 L70,40", "M20,60 L70,65",
                  "M70,15 L130,15", "M70,15 L130,40", "M70,40 L130,40",
                  "M70,65 L130,40", "M70,65 L130,65",
                  "M130,15 L180,30", "M130,40 L180,30", "M130,40 L180,50",
                  "M130,65 L180,50",
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="#3b82f6"
                    strokeWidth={0.8}
                    strokeOpacity={0.3}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Post-Training */}
          <div className="relative rounded-xl border border-neo-border bg-neo-card/50 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neo-cyan to-neo-cyan-light" />
            <h4 className="text-lg font-semibold text-neo-text mb-3">{t("howItWorks.step3.title")}</h4>
            <p className="text-sm text-neo-muted mb-6">{t("howItWorks.step3.desc")}</p>

            {/* Refined network with stronger connections */}
            <div className="relative h-32 flex items-center justify-center">
              <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
                {/* Highlighted paths (stronger connections after training) */}
                {[
                  "M20,20 L70,15", "M20,40 L70,40", "M20,60 L70,65",
                  "M70,15 L130,15", "M70,40 L130,40", "M70,65 L130,65",
                  "M130,15 L180,30", "M130,65 L180,50",
                ].map((d, i) => (
                  <motion.path
                    key={`strong-${i}`}
                    d={d}
                    stroke="#06b6d4"
                    strokeWidth={2}
                    strokeOpacity={0.7}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  />
                ))}
                {/* Weak connections faded */}
                {[
                  "M20,20 L70,40", "M20,40 L70,15", "M70,40 L130,15",
                  "M130,40 L180,30", "M130,40 L180,50",
                ].map((d, i) => (
                  <motion.path
                    key={`weak-${i}`}
                    d={d}
                    stroke="#06b6d4"
                    strokeWidth={0.5}
                    strokeOpacity={0.15}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                  />
                ))}
                {/* Nodes */}
                {[
                  { cx: 20, cy: 20 }, { cx: 20, cy: 40 }, { cx: 20, cy: 60 },
                  { cx: 70, cy: 15 }, { cx: 70, cy: 40 }, { cx: 70, cy: 65 },
                  { cx: 130, cy: 15 }, { cx: 130, cy: 40 }, { cx: 130, cy: 65 },
                  { cx: 180, cy: 30 }, { cx: 180, cy: 50 },
                ].map((pos, i) => (
                  <motion.circle
                    key={i}
                    cx={pos.cx}
                    cy={pos.cy}
                    r={5}
                    fill="#06b6d4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  />
                ))}
                {/* Glow on key nodes */}
                {[
                  { cx: 70, cy: 40 }, { cx: 130, cy: 40 },
                ].map((pos, i) => (
                  <motion.circle
                    key={`glow-${i}`}
                    cx={pos.cx}
                    cy={pos.cy}
                    r={10}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth={1}
                    strokeOpacity={0.4}
                    animate={{ r: [10, 14, 10], opacity: [0.4, 0.1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
