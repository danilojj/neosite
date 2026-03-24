"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import GradientOrb from "@/components/animations/GradientOrb";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp, staggerContainer } from "@/lib/animations";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const isNumber = !isNaN(Number(target));
    if (!isNumber) {
      setDisplay(target);
      return;
    }

    const num = parseInt(target);
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), num);
      setDisplay(current.toString());
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { valueKey: "about.stat1.value", labelKey: "about.stat1.label" },
    { valueKey: "about.stat2.value", labelKey: "about.stat2.label" },
    { valueKey: "about.stat3.value", labelKey: "about.stat3.label" },
    { valueKey: "about.stat4.value", labelKey: "about.stat4.label" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <GradientOrb color="blue" size="lg" className="top-0 -left-48 opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label={t("about.label")}
          title={t("about.title")}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg text-neo-muted leading-relaxed">
              {t("about.description")}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <GlowCard key={i} glowColor={i % 2 === 0 ? "blue" : "cyan"} custom={i}>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    <CountUp target={t(stat.valueKey)} />
                  </p>
                  <p className="text-sm text-neo-muted mt-1">{t(stat.labelKey)}</p>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
