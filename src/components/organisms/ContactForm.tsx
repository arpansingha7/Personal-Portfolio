"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Mail, Phone, ExternalLink, Send, CheckCircle2 } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "arpansingha16703@gmail.com",
    href: "mailto:arpansingha16703@gmail.com",
    accent: "#3b82f6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7001835922",
    href: "tel:+917001835922",
    accent: "#34d399",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "/in/-arpansingha-",
    href: "https://www.linkedin.com/in/-arpansingha-",
    accent: "#a78bfa",
  },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3500);
  };

  return (
    <section
      id="contact"
      style={{ background: "#0a0a0a", padding: "8rem 0" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');

        .contact-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 0.75rem;
        }

        .contact-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          letter-spacing: 0.02em;
          line-height: 0.95;
          background: linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.35));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.25rem;
        }

        .contact-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.32);
          max-width: 340px;
          margin-bottom: 2.5rem;
        }

        /* Contact info cards */
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          text-decoration: none;
          transition: all 0.25s ease;
          margin-bottom: 0.65rem;
        }
        .contact-info-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          transform: translateX(4px);
        }
        .contact-info-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s;
        }
        .contact-info-card:hover .contact-info-icon {
          border-color: rgba(255,255,255,0.18);
        }
        .contact-info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          display: block;
        }
        .contact-info-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          margin-top: 1px;
          display: block;
          transition: color 0.2s;
        }
        .contact-info-card:hover .contact-info-value { color: rgba(255,255,255,0.88); }

        /* Form card */
        .contact-form-card {
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 2.25rem;
        }

        .form-label {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 0.4rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-sub { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .contact-wrap { padding: 0 1.5rem; }
        }
      `}</style>

      <div className="contact-wrap">
        <div className="contact-grid">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="contact-eyebrow">Get in Touch</p>
            <h2 className="contact-heading">Let&apos;s Build<br />Something.</h2>
            <p className="contact-sub">
              Whether you have a project in mind or just want to connect —
              I&apos;m ready to collaborate and build experiences that matter.
            </p>

            <div>
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, accent }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="contact-info-card"
                >
                  <div
                    className="contact-info-icon"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon size={14} style={{ color: accent, opacity: 0.85 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span className="contact-info-label">{label}</span>
                    <span className="contact-info-value" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {value}
                    </span>
                  </div>
                  <ArrowUpRight size={12} style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-form-card">
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Name</label>
                    <Input
                      placeholder="Arpan Singha"
                      onFocus={() => setIsFocused("name")}
                      onBlur={() => setIsFocused(null)}
                      className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/18 focus-visible:ring-0 focus-visible:border-white/28 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      onFocus={() => setIsFocused("email")}
                      onBlur={() => setIsFocused(null)}
                      className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/18 focus-visible:ring-0 focus-visible:border-white/28 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Subject</label>
                  <Input
                    placeholder="Project Collaboration"
                    className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/18 focus-visible:ring-0 focus-visible:border-white/28 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or idea..."
                    className="min-h-[140px] bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/18 focus-visible:ring-0 focus-visible:border-white/28 transition-colors resize-none"
                    required
                  />
                </div>

                <Button
                  className="w-full h-12 rounded-xl font-light tracking-widest text-xs uppercase transition-all active:scale-[0.98]"
                  style={{
                    background: isSubmitted ? "rgba(52,211,153,0.15)" : "#fff",
                    color: isSubmitted ? "#34d399" : "#0a0a0a",
                    border: isSubmitted ? "1px solid rgba(52,211,153,0.3)" : "none",
                    boxShadow: isSubmitted ? "none" : "0 0 28px rgba(255,255,255,0.07)",
                  }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} />
                      Message Sent
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send size={12} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
