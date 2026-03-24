"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-neo-dark border-t border-neo-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neo-blue to-neo-cyan flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold tracking-wider text-neo-text uppercase">
                NeoSpace
              </span>
            </div>
          </div>

          {/* NeoData */}
          <div>
            <h4 className="text-sm font-semibold text-neo-text mb-4">{t("footer.neodata")}</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo("neoldms")} className="text-sm text-neo-muted hover:text-neo-text transition-colors cursor-pointer">
                  {t("footer.neoldms")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("how-it-works")} className="text-sm text-neo-muted hover:text-neo-text transition-colors cursor-pointer">
                  {t("footer.howItWorks")}
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-neo-text mb-4">{t("footer.support")}</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo("unlock-cta")} className="text-sm text-neo-muted hover:text-neo-text transition-colors cursor-pointer">
                  {t("footer.requestDemo")}
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-neo-muted hover:text-neo-text transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <Link href="https://docs.neospace.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-neo-muted hover:text-neo-text transition-colors">
                  {t("footer.docs")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neo-border">
          <p className="text-xs text-neo-dim">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
