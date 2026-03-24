"use client";

import { motion } from "framer-motion";
import { CreditCard, TrendingUp, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import FloatingNodes from "@/components/animations/FloatingNodes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { staggerContainer } from "@/lib/animations";

const icons = [CreditCard, TrendingUp, MessageSquare];
const gradients = [
  "from-neo-blue to-neo-blue-light",
  "from-neo-cyan to-neo-cyan-light",
  "from-neo-blue to-neo-cyan",
];

export default function Models() {
  const { t } = useLanguage();

  const models = [
    { titleKey: "models.neocredit.title", descKey: "models.neocredit.desc" },
    { titleKey: "models.neofin.title", descKey: "models.neofin.desc" },
    { titleKey: "models.neolang.title", descKey: "models.neolang.desc" },
  ];

  return (
    <section id="models" className="relative py-24 md:py-32 bg-neo-dark/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <FloatingNodes />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("models.label")}
          title={t("models.title")}
          subtitle={t("models.subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {models.map((model, i) => {
            const Icon = icons[i];
            return (
              <GlowCard key={i} glowColor={i === 1 ? "cyan" : "blue"} custom={i} className="h-full">
                <div className={`mb-6 w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-neo-text mb-3">
                  {t(model.titleKey)}
                </h3>
                <p className="text-sm text-neo-muted leading-relaxed">
                  {t(model.descKey)}
                </p>
                <div className="mt-6 pt-4 border-t border-neo-border">
                  <span className="text-xs text-neo-dim uppercase tracking-wider">Foundation Model</span>
                </div>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
