"use client";

import { LanguageProvider } from "@/components/providers/LanguageProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MeetNeoData from "@/components/sections/MeetNeoData";
import HowItWorks from "@/components/sections/HowItWorks";
import EnterpriseScale from "@/components/sections/EnterpriseScale";
import UseCases from "@/components/sections/UseCases";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import UnlockCTA from "@/components/sections/UnlockCTA";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <MeetNeoData />
        <HowItWorks />
        <EnterpriseScale />
        <UseCases />
        <Results />
        <FAQ />
        <UnlockCTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
