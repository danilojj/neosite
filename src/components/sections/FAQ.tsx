"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp, slideInLeft } from "@/lib/animations";

export default function FAQ() {
  const { t } = useLanguage();

  const questions = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: title */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neo-text leading-tight">
              {t("faq.title1")}
              <br />
              <span className="text-neo-blue">{t("faq.title2")}</span>
            </h2>
          </motion.div>

          {/* Right: Q&A */}
          <div className="lg:col-span-2 space-y-10">
            {questions.map((qa, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-neo-text mb-3">
                  {t(qa.qKey)}
                </h3>
                <p className="text-neo-muted leading-relaxed text-lg">
                  {t(qa.aKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
