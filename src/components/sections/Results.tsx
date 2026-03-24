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

      {/* Animated background particles */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)" }}
        animate={{ scale: [1, 1.2, 1], x: [-50, 50, -50] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

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
              className="group rounded-xl bg-neo-blue/5 border border-neo-blue/15 p-6 hover:border-neo-blue/30 transition-all duration-500"
            >
              <p className="text-sm font-semibold text-neo-blue mb-1">{t(stats[0].labelKey)}</p>
              <motion.p
                className="text-4xl font-bold text-neo-text mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              >
                {t(stats[0].valueKey)}
              </motion.p>
              <p className="text-sm text-neo-muted">{t(stats[0].descKey)}</p>
              {/* Animated accent bar */}
              <motion.div
                className="mt-3 h-0.5 bg-gradient-to-r from-neo-blue to-neo-cyan rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
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
                  className="group rounded-xl bg-neo-blue/5 border border-neo-blue/15 p-6 hover:border-neo-blue/30 transition-all duration-500"
                >
                  <p className="text-sm font-semibold text-neo-blue mb-1">{t(stat.labelKey)}</p>
                  <motion.p
                    className="text-3xl font-bold text-neo-text mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.3 + i * 0.15 }}
                  >
                    {t(stat.valueKey)}
                  </motion.p>
                  <p className="text-sm text-neo-muted">{t(stat.descKey)}</p>
                  <motion.div
                    className="mt-3 h-0.5 bg-gradient-to-r from-neo-blue to-neo-cyan rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                  />
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
              className="group rounded-xl bg-neo-blue/5 border border-neo-blue/15 p-6 hover:border-neo-blue/30 transition-all duration-500"
            >
              <p className="text-sm font-semibold text-neo-blue mb-1">{t(stats[3].labelKey)}</p>
              <motion.p
                className="text-4xl font-bold text-neo-text mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              >
                {t(stats[3].valueKey)}
              </motion.p>
              <p className="text-sm text-neo-muted">{t(stats[3].descKey)}</p>
              <motion.div
                className="mt-3 h-0.5 bg-gradient-to-r from-neo-cyan to-neo-blue rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "70%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
