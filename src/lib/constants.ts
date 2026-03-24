export const NAV_ITEMS = [
  { id: "neoldms", labelKey: "nav.neoldms", type: "scroll" as const },
  { id: "neodata", labelKey: "nav.neodata", type: "scroll" as const },
  { id: "how-it-works", labelKey: "nav.howItWorks", type: "scroll" as const },
  { id: "transformer-model", labelKey: "nav.transformerModel", type: "scroll" as const },
  { id: "documentation", labelKey: "nav.documentation", type: "link" as const, href: "https://docs.neospace.ai/" },
  { id: "careers", labelKey: "nav.careers", type: "link" as const, href: "/careers" },
] as const;
