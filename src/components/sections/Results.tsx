"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp, slideInLeft } from "@/lib/animations";
import GradientOrb from "@/components/animations/GradientOrb";

export default function Results() {
  const { t } = useLanguage();

  const stats = [
    { labelKey: "results.s1.label", valueKey: "results.s1.value", descKey: "results.s1.desc" },
    { labelKey: "results.s2.label", valueKey: "results.s2.value", descKey: "results.s2.desc" },
    { labelKey: "results.s3.label", valueKey: "results.s3.value", descKey: "results.s3.desc" },
    { labelKey: "results.s4.label", valueKey: "results.s4.value", descKey: "results.s4.desc" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-neo-dark/30 overflow-hidden">
      <GradientOrb color="cyan" size="lg" className="-right-32 top-0 opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: title */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neo-text leading-tight">
              {t("results.title1")}{" "}
              <span className="text-neo-blue">{t("results.title2")}</span>
            </h2>
          </motion.div>

          {/* Right: stats bento grid */}
          <div className="space-y-4">
            {/* Full width card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl bg-neo-blue/5 border border-neo-blue/15 p-6"
            >
              <p className="text-sm font-semibold text-neo-blue mb-1">{t(stats[0].labelKey)}</p>
              <p className="text-4xl font-bold text-neo-text mb-2">{t(stats[0].valueKey)}</p>
              <p className="text-sm text-neo-muted">{t(stats[0].descKey)}</p>
            </motion.div>

            {/* Two side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.slice(1, 3).map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-xl bg-neo-blue/5 border border-neo-blue/15 p-6"
                >
                  <p className="text-sm font-semibold text-neo-blue mb-1">{t(stat.labelKey)}</p>
                  <p className="text-3xl font-bold text-neo-text mb-2">{t(stat.valueKey)}</p>
                  <p className="text-sm text-neo-muted">{t(stat.descKey)}</p>
                </motion.div>
              ))}
            </div>

            {/* Full width card */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl bg-neo-blue/5 border border-neo-blue/15 p-6"
            >
              <p className="text-sm font-semibold text-neo-blue mb-1">{t(stats[3].labelKey)}</p>
              <p className="text-4xl font-bold text-neo-text mb-2">{t(stats[3].valueKey)}</p>
              <p className="text-sm text-neo-muted">{t(stats[3].descKey)}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
