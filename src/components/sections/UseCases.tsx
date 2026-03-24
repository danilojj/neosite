"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Radio } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { staggerContainer } from "@/lib/animations";

const icons = [Building2, ShoppingBag, Radio];
const colors = ["blue", "cyan", "blue"] as const;

export default function UseCases() {
  const { t, tArray } = useLanguage();

  const cases = [
    { titleKey: "useCases.banking.title", itemsKey: "useCases.banking.items" },
    { titleKey: "useCases.retail.title", itemsKey: "useCases.retail.items" },
    { titleKey: "useCases.telecom.title", itemsKey: "useCases.telecom.items" },
  ];

  return (
    <section id="use-cases" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("useCases.label")}
          title={t("useCases.title")}
          subtitle={t("useCases.subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cases.map((useCase, i) => {
            const Icon = icons[i];
            const items = tArray(useCase.itemsKey);

            return (
              <GlowCard key={i} glowColor={colors[i]} custom={i} className="h-full">
                <div className="mb-6 w-14 h-14 rounded-xl bg-neo-blue/10 flex items-center justify-center">
                  <Icon className={colors[i] === "blue" ? "text-neo-blue" : "text-neo-cyan"} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-neo-text mb-4">
                  {t(useCase.titleKey)}
                </h3>
                <ul className="space-y-3">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-neo-muted">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors[i] === "blue" ? "bg-neo-blue" : "bg-neo-cyan"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
