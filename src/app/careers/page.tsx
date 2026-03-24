"use client";

import { motion } from "framer-motion";
import { Target, Eye, Star, Brain, Table2, Settings, Wrench } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/components/providers/LanguageProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GlowCard from "@/components/ui/GlowCard";
import GradientOrb from "@/components/animations/GradientOrb";
import FloatingNodes from "@/components/animations/FloatingNodes";
import { fadeUp, staggerContainer, slideInLeft } from "@/lib/animations";

function CareersContent() {
  const { t } = useLanguage();

  const positions = [
    "Analista de Governança de Segurança da Informação",
    "Pesquisador em AI",
    "Cientista de Dados",
    "Especialista em Cloud",
  ];

  const whyCards = [
    { titleKey: "careers.card1.title", descKey: "careers.card1.desc", icon: Brain },
    { titleKey: "careers.card2.title", descKey: "careers.card2.desc", icon: Table2 },
    { titleKey: "careers.card3.title", descKey: "careers.card3.desc", icon: Settings },
    { titleKey: "careers.card4.title", descKey: "careers.card4.desc", icon: Wrench },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <GradientOrb color="blue" size="lg" className="-right-32 top-0 opacity-15" />
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neo-text leading-tight">
                {t("careers.hero.title1")}{" "}
                <span className="text-neo-blue">{t("careers.hero.title2")}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neo-muted max-w-3xl leading-relaxed">
                {t("careers.hero.subtitle")}
              </p>
            </motion.div>
          </div>
          {/* Gradient bar */}
          <div className="mt-16 h-2 bg-gradient-to-r from-neo-cyan via-neo-blue to-neo-dark" />
        </section>

        {/* Who We Are */}
        <section className="relative py-24 bg-neo-dark/80 overflow-hidden">
          <FloatingNodes />
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neo-blue mb-6">
                {t("careers.whoWeAre")}
              </h2>
              <p className="text-lg text-neo-muted max-w-4xl leading-relaxed mb-16">
                {t("careers.whoWeAre.desc")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {[
                { titleKey: "careers.mission.title", descKey: "careers.mission.desc", icon: Target },
                { titleKey: "careers.vision.title", descKey: "careers.vision.desc", icon: Eye },
                { titleKey: "careers.values.title", descKey: "careers.values.desc", icon: Star },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <GlowCard key={i} glowColor={i === 1 ? "cyan" : "blue"} custom={i}>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="text-neo-blue" size={18} />
                      <h3 className="text-sm font-semibold text-neo-blue">{t(card.titleKey)}</h3>
                    </div>
                    <p className="text-sm text-neo-muted leading-relaxed">{t(card.descKey)}</p>
                  </GlowCard>
                );
              })}
            </motion.div>

            {/* Team photo placeholder */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-neo-border bg-neo-card/50 aspect-[2.5/1] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-neo-blue/10 border border-neo-blue/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-neo-blue">N</span>
                </div>
                <p className="text-neo-muted text-sm">NeoSpace Team</p>
              </div>
              <div className="absolute inset-0 border-2 border-neo-cyan/20 rounded-xl m-2" />
            </motion.div>
          </div>
        </section>

        {/* Why Work at NeoSpace */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neo-text">
                {t("careers.whyWork.title1")}
              </h2>
              <p className="text-xl md:text-2xl font-medium text-neo-blue mt-1">
                {t("careers.whyWork.title2")}
              </p>
              <p className="mt-4 text-neo-muted max-w-3xl">
                {t("careers.whyWork.desc")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {whyCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <GlowCard key={i} glowColor={i % 2 === 0 ? "blue" : "cyan"} custom={i}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="text-neo-blue" size={16} />
                      <h3 className="text-sm font-semibold text-neo-blue">{t(card.titleKey)}</h3>
                    </div>
                    <p className="text-neo-muted leading-relaxed">{t(card.descKey)}</p>
                  </GlowCard>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="relative py-24 bg-neo-dark/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-neo-blue mb-6">
                  {t("careers.positions.title")}
                </h2>
                <p className="text-neo-muted leading-relaxed mb-4">
                  {t("careers.positions.desc1")}
                </p>
                <p className="text-neo-muted leading-relaxed">
                  {t("careers.positions.desc2")}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {positions.map((pos, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    variants={fadeUp}
                    custom={i}
                    className="block rounded-xl bg-neo-card/50 border border-neo-border p-5 hover:border-neo-blue/30 transition-all group"
                  >
                    <span className="text-xs font-medium text-neo-blue">{t("careers.positions.type")}</span>
                    <p className="mt-1 text-lg font-semibold text-neo-text group-hover:text-neo-blue transition-colors">
                      {pos}
                    </p>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Talent Pool */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neo-text">
                {t("careers.talent.title1")}{" "}
                <span className="text-neo-blue">{t("careers.talent.title2")}</span>
              </h2>
              <p className="mt-4 text-neo-muted max-w-3xl leading-relaxed mb-10">
                {t("careers.talent.desc")}
              </p>
            </motion.div>

            <motion.form
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.firstName")} *</label>
                  <input type="text" placeholder={t("careers.form.firstName")} className="w-full px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.lastName")} *</label>
                  <input type="text" placeholder={t("careers.form.lastName")} className="w-full px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.email")} *</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.phone")} *</label>
                  <input type="tel" placeholder="+1 555 123 4567" className="w-full px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.area")} *</label>
                  <input type="text" placeholder="e.g., Software Development" className="w-full px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.linkedin")} *</label>
                  <input type="url" placeholder="https://linkedin.com/in/username" className="w-full px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-text placeholder:text-neo-dim focus:outline-none focus:border-neo-blue/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neo-text mb-2">{t("careers.form.position")} *</label>
                <select className="w-full sm:w-1/2 px-4 py-3 rounded-lg bg-neo-card border border-neo-border text-neo-muted focus:outline-none focus:border-neo-blue/50 transition-all">
                  <option>{t("careers.form.selectPosition")}</option>
                  <option>Analista de Governança de Segurança da Informação</option>
                  <option>Pesquisador em AI</option>
                  <option>Cientista de Dados</option>
                  <option>Especialista em Cloud</option>
                </select>
              </div>
              <div className="pt-2">
                <Button size="lg">{t("careers.form.submit")}</Button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function CareersPage() {
  return (
    <LanguageProvider>
      <CareersContent />
    </LanguageProvider>
  );
}
