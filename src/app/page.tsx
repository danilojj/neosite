"use client";

import { LanguageProvider } from "@/components/providers/LanguageProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import LDM from "@/components/sections/LDM";
import Platform from "@/components/sections/Platform";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Models from "@/components/sections/Models";
import Security from "@/components/sections/Security";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LDM />
        <Platform />
        <HowItWorks />
        <UseCases />
        <Models />
        <Security />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
