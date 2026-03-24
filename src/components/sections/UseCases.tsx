"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Radio } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp, staggerContainer } from "@/lib/animations";

const icons = [Building2, ShoppingBag, Radio];
const colors = ["blue", "cyan", "blue"] as const;

export default function UseCases() {
  const { t } = useLanguage();

  const cases = [
    { titleKey: "useCases.banking.title", descKey: "useCases.banking.desc" },
    { titleKey: "useCases.retail.title", descKey: "useCases.retail.desc" },
    { titleKey: "useCases.telecom.title", descKey: "useCases.telecom.desc" },
  ];

  return (
    <section id="use-cases" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neo-text leading-tight">
            {t("useCases.title1")}{" "}
            <span className="text-neo-blue">{t("useCases.title2")}</span>
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-neo-blue to-neo-cyan rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cases.map((useCase, i) => {
            const Icon = icons[i];
            return (
              <GlowCard key={i} glowColor={colors[i]} custom={i} className="h-full">
                {/* Image placeholder */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-6 bg-neo-elevated/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-neo-muted/20" size={48} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neo-card/80 to-transparent" />
                </div>

                <h3 className={`text-base font-semibold mb-3 ${colors[i] === "blue" ? "text-neo-blue" : "text-neo-cyan"}`}>
                  {t(useCase.titleKey)}
                </h3>
                <p className="text-sm text-neo-muted leading-relaxed">
                  {t(useCase.descKey)}
                </p>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
