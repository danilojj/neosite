"use client";

import { motion } from "framer-motion";
import { Database, Layers, Zap, RefreshCw, Users, Plug } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import FloatingNodes from "@/components/animations/FloatingNodes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { staggerContainer } from "@/lib/animations";

const icons = [Database, Layers, Zap, RefreshCw, Users, Plug];
const colors = ["blue", "cyan", "blue", "cyan", "blue", "cyan"] as const;

export default function MeetNeoData() {
  const { t } = useLanguage();

  const features = [
    { titleKey: "neodata.f1.title", descKey: "neodata.f1.desc" },
    { titleKey: "neodata.f2.title", descKey: "neodata.f2.desc" },
    { titleKey: "neodata.f3.title", descKey: "neodata.f3.desc" },
    { titleKey: "neodata.f4.title", descKey: "neodata.f4.desc" },
    { titleKey: "neodata.f5.title", descKey: "neodata.f5.desc" },
    { titleKey: "neodata.f6.title", descKey: "neodata.f6.desc" },
  ];

  return (
    <section id="neodata" className="relative py-24 md:py-32 bg-neo-dark/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <FloatingNodes />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          label="NeoData"
          title={t("neodata.title")}
          subtitle={t("neodata.subtitle")}
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
              <GlowCard key={i} glowColor={colors[i]} custom={i}>
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-full border ${colors[i] === "blue" ? "border-neo-blue/20" : "border-neo-cyan/20"} flex items-center justify-center`}>
                    <Icon className={colors[i] === "blue" ? "text-neo-blue" : "text-neo-cyan"} size={22} />
                  </div>
                  <div>
                    <h3 className={`text-base font-semibold mb-2 ${colors[i] === "blue" ? "text-neo-blue" : "text-neo-cyan"}`}>
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
