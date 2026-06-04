/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { FeaturesBento } from "./components/FeaturesBento"
import { ScenariosMarquee } from "./components/ScenariosMarquee"
import { GrowWithYouSection } from "./components/GrowWithYouSection"
import { MarqueeSection } from "./components/MarqueeSection"
import { Pricing } from "./components/Pricing"
import { FAQSection } from "./components/FAQSection"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col pt-16">
        <Hero />
        <GrowWithYouSection />
        <FeaturesBento />
        <ScenariosMarquee />
        <MarqueeSection />
        <Pricing />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

