/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { FeaturesBento } from "./components/FeaturesBento"
import { ScenariosMarquee } from "./components/ScenariosMarquee"
import { GrowWithYouSection } from "./components/GrowWithYouSection"
import { MarqueeSection } from "./components/MarqueeSection"
import { Pricing } from "./components/Pricing"
import { FAQSection } from "./components/FAQSection"
import { Footer } from "./components/Footer"
import { Changelog } from "./pages/Changelog"
import { Plaza } from "./pages/Plaza"

import { ThemeLanguageProvider } from "./contexts/ThemeLanguageContext"

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#changelog') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-16">
            <Changelog />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#plaza') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-24">
            <Plaza />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  return (
    <ThemeLanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
        <Header />
        <main className="flex-1 flex flex-col pt-16">
          <Hero />
          <GrowWithYouSection />
          <FeaturesBento />
          <ScenariosMarquee />
          <Pricing />
          <MarqueeSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </ThemeLanguageProvider>
  );
}

