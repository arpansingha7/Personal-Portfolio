import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { StatsCounter } from "@/components/organisms/StatsCounter";
import { ProjectList } from "@/components/organisms/ProjectList";
import { LiveActivity } from "@/components/organisms/LiveActivity";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ExperienceTimeline } from "@/components/organisms/ExperienceTimeline";
import { HireSection } from "@/components/organisms/HireSection";
import { ContactForm } from "@/components/organisms/ContactForm";
import { Chatbot } from "@/components/organisms/Chatbot";
import { BackToTop } from "@/components/organisms/BackToTop";
import { Footer } from "@/components/organisms/Footer";
import { ScrollProgress } from "@/components/organisms/ScrollProgress";

const Divider = () => (
  <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
    <div style={{
      height: "1px",
      background: "linear-gradient(90deg, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%)",
    }} />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global scroll progress bar */}
      <ScrollProgress />

      <Navbar />

      <main>
        <HeroSection />
        <StatsCounter />

        <Divider />
        <AboutSection />

        <Divider />
        <ExperienceTimeline />

        <Divider />
        <ProjectList />

        <Divider />
        <HireSection />

        <Divider />
        <LiveActivity />

        <Divider />
        <ContactForm />
      </main>

      {/* Floating utilities */}
      <Chatbot />
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
}
