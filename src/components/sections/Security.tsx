"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, KeyRound, FileSearch, Database } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp } from "@/lib/animations";

const securityItems = [
  { key: "security.soc2", icon: Shield },
  { key: "security.gdpr", icon: Lock },
  { key: "security.encryption", icon: KeyRound },
  { key: "security.access", icon: Eye },
  { key: "security.audit", icon: FileSearch },
  { key: "security.governance", icon: Database },
];

export default function Security() {
  const { t } = useLanguage();

  return (
    <section id="security" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("security.label")}
          title={t("security.title")}
          subtitle={t("security.subtitle")}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {securityItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                variants={fadeUp}
                custom={i}
                className="text-center group"
              >
                <div className="mx-auto mb-3 w-16 h-16 rounded-2xl bg-neo-card border border-neo-border flex items-center justify-center transition-all duration-300 group-hover:border-neo-blue/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <Icon className="text-neo-blue transition-colors group-hover:text-neo-cyan" size={24} />
                </div>
                <p className="text-xs font-medium text-neo-muted group-hover:text-neo-text transition-colors">
                  {t(item.key)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 rounded-xl border border-neo-border bg-neo-card/30 p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="text-neo-cyan" size={24} />
            <span className="text-lg font-semibold text-neo-text">
              {t("security.title")}
            </span>
          </div>
          <p className="text-sm text-neo-muted max-w-2xl mx-auto">
            {t("security.subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
