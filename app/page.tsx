import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { QuickProof } from "@/components/sections/QuickProof";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";

/**
 * Phase 14 — Complete Homepage Assembly:
 * Header → Hero → Quick Proof → Currently Building → Selected Work →
 * Experience → About → Skills → Achievements → Contact → Footer
 */
export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main id="main-content">
        <Hero />
        <QuickProof />
        <CurrentlyBuilding />
        <SelectedWork />
        <Experience />
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
