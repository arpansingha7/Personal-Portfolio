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
        {/* Hero — full viewport */}
        <HeroSection />

        {/* Sections below hero */}
        <ProjectList />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
        </div>

        <LiveActivity />

        {/* Divider */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} />
        </div>

        <ContactForm />
      </main>

      <Chatbot />

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "2.5rem 0",
          background: "#0a0a0a",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            © 2026 Arpan Singha. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {[
              { label: "GitHub", href: "https://github.com/arpansingha7" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/-arpansingha-" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 300,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="hover:text-white/60"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
