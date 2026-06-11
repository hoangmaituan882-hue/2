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
import { Screenings } from "./pages/Screenings"
import { Workspace } from "./pages/Workspace"
import { About } from "./features/About"
import { Gaming } from "./pages/Gaming"
import { AIBot } from "./pages/AIBot"

import { ThemeLanguageProvider } from "./contexts/ThemeLanguageContext"

import { Scroll3DCarousel } from "./components/Scroll3DCarousel"

import { Talks } from "./features/Talks"
import { Timeline } from "./features/Timeline"
import { UIComponents } from "./pages/UIComponents"

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === '#talks') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-24 pb-8">
            <Talks />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

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

  if (route === '#screenings') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-16">
            <Screenings />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#workspace') {
    return (
      <ThemeLanguageProvider>
        <div className="relative h-screen bg-[#fbfaf8] dark:bg-zinc-950 text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-hidden transition-colors duration-300">
          <Header isWorkspace={true} />
          <main className="flex-1 flex flex-col h-screen w-full overflow-hidden absolute inset-0 z-0">
            <Workspace />
          </main>
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#games') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header isGames />
          <main className="flex-1 flex flex-col pt-24 pb-8">
            <Gaming />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#about') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-24 pb-8">
            <About />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#timeline') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-32 pb-8">
            <Timeline />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#aibot') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-24 pb-8">
            <AIBot />
          </main>
          <Footer />
        </div>
      </ThemeLanguageProvider>
    );
  }

  if (route === '#uicomponents') {
    return (
      <ThemeLanguageProvider>
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
          <Header />
          <main className="flex-1 flex flex-col pt-24 pb-8">
            <UIComponents />
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
          <Scroll3DCarousel />
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

