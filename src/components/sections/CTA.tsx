"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import GradientOrb from "@/components/animations/GradientOrb";
import ParticleField from "@/components/animations/ParticleField";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <GradientOrb color="blue" size="lg" className="-left-32 top-0 opacity-30" />
      <GradientOrb color="cyan" size="lg" className="-right-32 bottom-0 opacity-20" />
      <ParticleField className="opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neo-text mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-neo-muted max-w-2xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder={t("cta.placeholder")}
              className="w-full sm:flex-1 px-5 py-3.5 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 focus:ring-1 focus:ring-neo-blue/30 transition-all"
            />
            <Button size="lg" className="w-full sm:w-auto whitespace-nowrap gap-2">
              {t("cta.button")}
              <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-sm text-neo-dim"
          >
            {t("cta.contact")}:{" "}
            <a
              href="mailto:contact@neospace.ai"
              className="text-neo-blue hover:text-neo-blue-light transition-colors underline underline-offset-2"
            >
              contact@neospace.ai
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
