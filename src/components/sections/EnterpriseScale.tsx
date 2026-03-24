"use client";

import { motion } from "framer-motion";
import { Database, Layers, Brain, Shield, Plug } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp, slideInLeft } from "@/lib/animations";
import GradientOrb from "@/components/animations/GradientOrb";

const icons = [Database, Layers, Brain, Shield, Plug];

export default function EnterpriseScale() {
  const { t } = useLanguage();

  const features = [
    { titleKey: "enterprise.f1.title", descKey: "enterprise.f1.desc" },
    { titleKey: "enterprise.f2.title", descKey: "enterprise.f2.desc" },
    { titleKey: "enterprise.f3.title", descKey: "enterprise.f3.desc" },
    { titleKey: "enterprise.f4.title", descKey: "enterprise.f4.desc" },
    { titleKey: "enterprise.f5.title", descKey: "enterprise.f5.desc" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-neo-dark/30 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <GradientOrb color="blue" size="lg" className="-left-32 top-1/3 opacity-15" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-neo-blue/10 rounded-lg pointer-events-none"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -10, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute bottom-32 left-40 w-10 h-10 border border-neo-cyan/10 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: title */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neo-text leading-tight">
              {t("enterprise.title1")}{" "}
              <span className="text-neo-blue">{t("enterprise.title2")}</span>
            </h2>
          </motion.div>

          {/* Right: features list */}
          <div className="space-y-8">
            {features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex items-start gap-5"
                >
                  <motion.div
                    className="shrink-0 w-12 h-12 rounded-xl bg-neo-card border border-neo-border flex items-center justify-center group-hover:border-neo-blue/40 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="text-neo-blue" size={22} />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-semibold text-neo-blue mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-neo-muted leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                  </div>
                  {/* Animated line connector */}
                  <motion.div
                    className="hidden lg:block absolute right-0 w-1 h-8 bg-gradient-to-b from-neo-blue/20 to-transparent rounded-full"
                    style={{ top: `${i * 72 + 16}px` }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
