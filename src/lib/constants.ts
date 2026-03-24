export const NAV_ITEMS = [
  { id: "about", labelKey: "nav.about" },
  { id: "technology", labelKey: "nav.technology" },
  { id: "platform", labelKey: "nav.platform" },
  { id: "how-it-works", labelKey: "nav.howItWorks" },
  { id: "use-cases", labelKey: "nav.useCases" },
  { id: "models", labelKey: "nav.models" },
  { id: "contact", labelKey: "nav.contact" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  technology: "technology",
  platform: "platform",
  howItWorks: "how-it-works",
  useCases: "use-cases",
  models: "models",
  security: "security",
  contact: "contact",
} as const;
