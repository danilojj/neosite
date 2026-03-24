import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeoSpace — Shaping the Next Era of Banking with AI",
  description:
    "NeoSpace builds the Large Data Model — a new class of AI purpose-built for massive-scale enterprise data. Turn structured and unstructured data into real-time, actionable intelligence.",
  keywords: ["NeoSpace", "AI", "Large Data Model", "NeoData", "Banking AI", "Foundation Models", "Enterprise AI"],
  openGraph: {
    title: "NeoSpace — Shaping the Next Era of Banking with AI",
    description: "Purpose-built AI for massive-scale enterprise data.",
    type: "website",
    url: "https://www.neospace.ai",
    siteName: "NeoSpace AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
