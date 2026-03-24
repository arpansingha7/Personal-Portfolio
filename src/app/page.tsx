import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ProjectList } from "@/components/organisms/ProjectList";
import { LiveActivity } from "@/components/organisms/LiveActivity";
import { ContactForm } from "@/components/organisms/ContactForm";
import { Chatbot } from "@/components/organisms/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <Navbar />

      <main>
        {/* Hero takes full viewport — no gap needed here */}
        <HeroSection />

        {/* Below-hero sections: separated by a consistent 6rem gap on desktop */}
        <div className="flex flex-col gap-0">
          <ProjectList />

          {/* Divider */}
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <LiveActivity />

          {/* Divider */}
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="border-t border-white/[0.05]" />
          </div>

          <ContactForm />
        </div>
      </main>

      <Chatbot />

      <footer className="border-t border-white/[0.06] mt-24 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-widest uppercase font-light">
            © 2026 Arpan Singha. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/arpansingha7" target="_blank" rel="noreferrer"
              className="text-white/20 text-xs tracking-widest uppercase font-light hover:text-white/60 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/-arpansingha-" target="_blank" rel="noreferrer"
              className="text-white/20 text-xs tracking-widest uppercase font-light hover:text-white/60 transition-colors">
              LinkedIn
            </a>
            <a href="/#contact"
              className="text-white/20 text-xs tracking-widest uppercase font-light hover:text-white/60 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
