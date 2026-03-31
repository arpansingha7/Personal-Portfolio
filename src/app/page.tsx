import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { StatsCounter } from "@/components/organisms/StatsCounter";
import { ProjectList } from "@/components/organisms/ProjectList";
import { LiveActivity } from "@/components/organisms/LiveActivity";
import { AboutSection } from "@/components/organisms/AboutSection";
import { HireSection } from "@/components/organisms/HireSection";
import { ContactForm } from "@/components/organisms/ContactForm";
import { Chatbot } from "@/components/organisms/Chatbot";
import { BackToTop } from "@/components/organisms/BackToTop";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      <main>
        {/* Hero — full viewport */}
        <HeroSection />

        {/* Animated stats counter */}
        <StatsCounter />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        <AboutSection />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        <ProjectList />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        <HireSection />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        <LiveActivity />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        <ContactForm />
      </main>

      {/* Floating utilities */}
      <Chatbot />
      <BackToTop />

      {/* Enhanced footer */}
      <Footer />
    </div>
  );
}

