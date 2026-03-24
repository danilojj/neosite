"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, Brain, Rocket, BarChart3, Plug } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import GradientOrb from "@/components/animations/GradientOrb";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { staggerContainer } from "@/lib/animations";

const icons = [Download, ShieldCheck, Brain, Rocket, BarChart3, Plug];

export default function Platform() {
  const { t } = useLanguage();

  const features = [
    { titleKey: "platform.feature1.title", descKey: "platform.feature1.desc" },
    { titleKey: "platform.feature2.title", descKey: "platform.feature2.desc" },
    { titleKey: "platform.feature3.title", descKey: "platform.feature3.desc" },
    { titleKey: "platform.feature4.title", descKey: "platform.feature4.desc" },
    { titleKey: "platform.feature5.title", descKey: "platform.feature5.desc" },
    { titleKey: "platform.feature6.title", descKey: "platform.feature6.desc" },
  ];

  return (
    <section id="platform" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <GradientOrb color="blue" size="lg" className="-left-32 bottom-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("platform.label")}
          title={t("platform.title")}
          subtitle={t("platform.subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <GlowCard key={i} glowColor={i % 2 === 0 ? "blue" : "cyan"} custom={i}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-neo-cyan/10 flex items-center justify-center">
                    <Icon className="text-neo-cyan" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neo-text mb-2">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-sm text-neo-muted leading-relaxed">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
