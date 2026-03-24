import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ProjectList } from "@/components/organisms/ProjectList";
import { LiveActivity } from "@/components/organisms/LiveActivity";
import { ContactForm } from "@/components/organisms/ContactForm";
import { Chatbot } from "@/components/organisms/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-color-dodge animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[120px] mix-blend-multiply dark:mix-blend-color-dodge animate-pulse delay-1000" />
      </div>

      <Navbar />
      
      <main className="flex flex-col gap-16 lg:gap-32 pb-32">
        <HeroSection />
        <ProjectList />
        <LiveActivity />
        <ContactForm />
      </main>

      <Chatbot />

      <footer className="border-t border-white/10 py-8 text-center text-muted-foreground text-sm flex flex-col items-center justify-center">
        <p>© 2026 Arpan&apos;s Portfolio. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
