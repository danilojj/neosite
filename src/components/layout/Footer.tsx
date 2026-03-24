"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ExternalLink, Mail } from "lucide-react";

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
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neo-blue to-neo-cyan flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-neo-text">
                Neo<span className="text-neo-blue">Space</span>
              </span>
            </div>
            <p className="text-sm text-neo-muted leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/neospaceai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neo-card border border-neo-border text-neo-muted hover:text-neo-blue hover:border-neo-blue/30 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="mailto:contact@neospace.ai"
                className="p-2 rounded-lg bg-neo-card border border-neo-border text-neo-muted hover:text-neo-cyan hover:border-neo-cyan/30 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-neo-text mb-4">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {[
                { label: "nav.technology", id: "technology" },
                { label: "nav.platform", id: "platform" },
                { label: "nav.models", id: "models" },
                { label: "nav.useCases", id: "use-cases" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-neo-muted hover:text-neo-text transition-colors cursor-pointer"
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-neo-text mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo("about")} className="text-sm text-neo-muted hover:text-neo-text transition-colors cursor-pointer">
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-neo-muted hover:text-neo-text transition-colors">{t("footer.careers")}</a>
              </li>
              <li>
                <a href="#" className="text-sm text-neo-muted hover:text-neo-text transition-colors">{t("footer.blog")}</a>
              </li>
              <li>
                <a href="https://docs.neospace.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-neo-muted hover:text-neo-text transition-colors">{t("footer.docs")}</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-neo-text mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-neo-muted hover:text-neo-text transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neo-muted hover:text-neo-text transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neo-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neo-dim">
            &copy; {new Date().getFullYear()} NeoSpace AI Technologies Ltda. {t("footer.rights")}
          </p>
          <p className="text-xs text-neo-dim">Uberlândia, MG — Brazil</p>
        </div>
      </div>
    </footer>
  );
}
