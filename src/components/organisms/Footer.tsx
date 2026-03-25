"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

// Inline SVGs for brand icons not available in this lucide-react version
function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "GitHub",   href: "/#live" },
  { label: "About",    href: "/about" },
  { label: "Hire Me",  href: "/hire" },
  { label: "Contact",  href: "/#contact" },
];

const SOCIALS = [
  { Icon: GithubIcon,   href: "https://github.com/arpansingha7",             label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/-arpansingha-/",  label: "LinkedIn" },
  { Icon: Mail,         href: "mailto:arpansingha16703@gmail.com",            label: "Email", isLucide: true },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        .footer-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        @media (max-width: 768px) {
          .footer-wrap { padding: 0 1.5rem; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>

      <div className="footer-wrap" style={{ padding: "4rem 2.5rem 2rem" }}>
        {/* Three-column grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <p style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.05em",
              background: "linear-gradient(135deg, var(--foreground) 0%, var(--muted-foreground) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}>
              Arpan Singha
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
              maxWidth: 260,
              marginBottom: "1.5rem",
            }}>
              CS + Data Science student building elegant software at the intersection of AI, cloud, and the web.
            </p>

            {/* Status badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(52,211,153,0.07)",
              border: "1px solid rgba(52,211,153,0.22)",
              borderRadius: 999,
              padding: "0.35rem 0.85rem",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 6px #34d399",
                animation: "footer-ping 1.8s ease-in-out infinite",
                display: "inline-block",
              }} />
              <style>{`
                @keyframes footer-ping {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.4; }
                }
              `}</style>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#10b981",
              }}>Open to Work · April 2026</span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {SOCIALS.map(({ Icon, href, label, isLucide }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2, borderColor: "var(--muted-foreground)", color: "var(--foreground)" }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "var(--stat-card-bg)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--muted-foreground)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                >
                  {isLucide
                    ? <Icon size={15} strokeWidth={1.5} />
                    : <Icon size={15} />
                  }
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              marginBottom: "1.25rem",
            }}>Navigation</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "var(--muted-foreground)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                    className="footer-nav-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <style>{`
              .footer-nav-link:hover { color: var(--foreground) !important; }
            `}</style>
          </div>

          {/* Col 3 — Contact CTA */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--muted-foreground)",
              marginBottom: "1.25rem",
            }}>Let&apos;s Talk</p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              marginBottom: "1.5rem",
            }}>
              Available for full-time roles, internships, and freelance engagements starting April 2026.
            </p>
            <motion.a
              href="mailto:arpansingha16703@gmail.com"
              whileHover={{ y: -2, borderColor: "var(--muted-foreground)", color: "var(--foreground)" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted-foreground)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: "0.6rem 1.2rem",
                textDecoration: "none",
                transition: "all 0.2s",
                marginBottom: "0.75rem",
              }}
            >
              <Mail size={13} strokeWidth={1.5} />
              Email Me
              <ArrowUpRight size={11} />
            </motion.a>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 300,
              color: "var(--muted-foreground)",
              letterSpacing: "0.05em",
              opacity: 0.6,
            }}>
              IST · India · Remote OK
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "var(--muted-foreground)",
            opacity: 0.8,
          }}>
            © 2026 Arpan Singha. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 300,
            letterSpacing: "0.1em",
            color: "var(--muted-foreground)",
            opacity: 0.6,
          }}>
            Built with Next.js · TypeScript · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
