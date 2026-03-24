"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Locale, t as translate, tArray as translateArray } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("neo-locale") as Locale | null;
    if (saved === "en" || saved === "pt") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("neo-locale", newLocale);
  };

  const tFn = (key: string) => translate(key, locale);
  const tArrayFn = (key: string) => translateArray(key, locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: tFn, tArray: tArrayFn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
