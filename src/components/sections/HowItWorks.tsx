"use client";

import { motion } from "framer-motion";
import { Database, Table2, Brain, BarChart3, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp } from "@/lib/animations";
import GradientOrb from "@/components/animations/GradientOrb";

const stepIcons = [Database, Table2, Brain, BarChart3];

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { titleKey: "howItWorks.step1.title", highlightKey: "howItWorks.step1.highlight", subKey: "howItWorks.step1.sub", descKey: "howItWorks.step1.desc", dark: true },
    { titleKey: "howItWorks.step2.title", highlightKey: "howItWorks.step2.highlight", subKey: "howItWorks.step2.sub", descKey: "howItWorks.step2.desc", dark: false },
    { titleKey: "howItWorks.step3.title", highlightKey: "howItWorks.step3.highlight", subKey: "howItWorks.step3.sub", descKey: "howItWorks.step3.desc", dark: true },
    { titleKey: "howItWorks.step4.title", highlightKey: "howItWorks.step4.highlight", subKey: "howItWorks.step4.sub", descKey: "howItWorks.step4.desc", dark: false },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      <GradientOrb color="mixed" size="lg" className="top-1/4 -right-48 opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neo-text">
            {t("howItWorks.title")}
          </h2>
          <p className="mt-2 text-xl md:text-2xl text-neo-blue font-medium">
            {t("howItWorks.subtitle")}
          </p>
          <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-neo-blue to-neo-cyan rounded-full" />
        </motion.div>

        {/* Steps */}
        <div className="mt-16 space-y-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            const isReversed = !step.dark;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden ${step.dark
                  ? "bg-neo-dark border border-neo-border"
                  : "bg-neo-card/30 border border-neo-border/50"
                  }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isReversed ? "lg:direction-rtl" : ""}`}>
                  {/* Content side */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? "lg:order-2" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-neo-text">
                      {t(step.titleKey)}{" "}
                      <span className="text-neo-blue">{t(step.highlightKey)}</span>
                    </h3>
                    <p className="mt-3 text-neo-muted leading-relaxed">
                      {t(step.subKey)}
                    </p>
                    <p className="mt-4 text-neo-muted/70 leading-relaxed text-sm">
                      {t(step.descKey)}
                    </p>
                    <div className="mt-6">
                      <button className="inline-flex items-center gap-2 text-neo-blue hover:text-neo-blue-light transition-colors text-sm font-medium cursor-pointer">
                        {t("howItWorks.learnMore")} <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Visual side - animated placeholder representing app screenshot */}
                  <div className={`relative p-8 md:p-12 flex items-center justify-center ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-neo-border bg-neo-black/50">
                      {/* Simulated app UI */}
                      <div className="absolute inset-0 p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-neo-dim/30" />
                          <div className="w-3 h-3 rounded-full bg-neo-dim/30" />
                          <div className="w-3 h-3 rounded-full bg-neo-dim/30" />
                          <div className="ml-4 h-5 w-32 rounded bg-neo-elevated/50" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex gap-3">
                            <div className="h-8 flex-1 rounded bg-neo-elevated/30" />
                            <div className="h-8 flex-1 rounded bg-neo-elevated/30" />
                          </div>
                          <div className="h-24 rounded bg-neo-elevated/20" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 rounded bg-neo-blue/10" />
                            <div className="h-16 rounded bg-neo-cyan/10" />
                            <div className="h-16 rounded bg-neo-blue/10" />
                          </div>
                        </div>
                      </div>
                      {/* Glow accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-neo-blue via-neo-cyan to-transparent"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    {/* Step icon badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neo-blue/10 border border-neo-blue/20 flex items-center justify-center">
                      <Icon className="text-neo-blue" size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
