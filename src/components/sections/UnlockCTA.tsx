"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ParticleField from "@/components/animations/ParticleField";
import GradientOrb from "@/components/animations/GradientOrb";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { fadeUp } from "@/lib/animations";

export default function UnlockCTA() {
  const { t } = useLanguage();

  return (
    <section id="unlock-cta" className="relative py-24 md:py-32 bg-neo-dark overflow-hidden">
      <ParticleField className="opacity-20" />
      <GradientOrb color="blue" size="lg" className="-left-32 top-0 opacity-20" />
      <GradientOrb color="cyan" size="lg" className="-right-32 bottom-0 opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-neo-blue">{t("unlock.title1")}</span>{" "}
              <span className="text-neo-text">{t("unlock.title2")}</span>
            </h2>
            <div className="mt-8">
              <Button size="lg">{t("unlock.cta")}</Button>
            </div>
          </motion.div>

          {/* Right: Platform screenshot mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-neo-border bg-neo-black/80 shadow-2xl shadow-neo-blue/10">
              {/* Simulated platform UI */}
              <div className="p-4">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-4 h-5 w-48 rounded bg-neo-elevated/50" />
                </div>
                {/* Sidebar + content */}
                <div className="flex gap-4">
                  <div className="w-40 space-y-2">
                    {["Models", "Training", "Benchmarks", "Leaderboard"].map((item) => (
                      <div key={item} className="h-7 rounded bg-neo-elevated/30 px-3 flex items-center">
                        <span className="text-xs text-neo-dim">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2">
                      <div className="h-7 px-3 rounded bg-neo-blue/20 text-xs flex items-center text-neo-blue">Pre-Training</div>
                      <div className="h-7 px-3 rounded bg-neo-elevated/30 text-xs flex items-center text-neo-dim">Post-Training</div>
                    </div>
                    <div className="space-y-2">
                      {["Investment Strategies Course", "Market Trend Forecast...", "Portfolio Optimization", "Risk Assessment"].map((model, i) => (
                        <div key={model} className="h-8 rounded bg-neo-elevated/20 px-3 flex items-center justify-between">
                          <span className="text-xs text-neo-muted">{model}</span>
                          <motion.div
                            className={`h-4 w-14 rounded text-[10px] flex items-center justify-center ${i < 2 ? "bg-neo-blue/20 text-neo-blue" : "bg-neo-dim/20 text-neo-dim"}`}
                            animate={i < 2 ? { opacity: [0.7, 1, 0.7] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {i < 2 ? "Active" : "Pending"}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    {/* Chart mockup */}
                    <div className="h-24 rounded bg-neo-elevated/10 p-3 flex items-end gap-1">
                      {[40, 55, 45, 60, 70, 65, 80, 75, 85, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-neo-blue/40 to-neo-cyan/40"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 + 0.5, duration: 0.4 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
