"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-neo-card/80 border border-neo-border p-0.5">
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer",
          locale === "en"
            ? "bg-neo-blue text-white"
            : "text-neo-muted hover:text-neo-text"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("pt")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer",
          locale === "pt"
            ? "bg-neo-blue text-white"
            : "text-neo-muted hover:text-neo-text"
        )}
      >
        PT
      </button>
    </div>
  );
}
