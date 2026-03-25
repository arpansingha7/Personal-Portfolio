"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/organisms/Navbar";
import { Chatbot } from "@/components/organisms/Chatbot";
import Link from "next/link";
import {
  GraduationCap,
  Code2,
  Award,
  Briefcase,
  ArrowUpRight,
  Languages,
} from "lucide-react";

const SKILLS = [
  { category: "Languages", items: ["Python", "SQL", "C", "Java", "TypeScript"] },
  { category: "AI / ML", items: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Jupyter"] },
  { category: "Cloud", items: ["Microsoft Azure", "AWS", "Azure AI"] },
  { category: "Web", items: ["Next.js", "Flask", "REST APIs", "HTML/CSS"] },
  { category: "Tools", items: ["GitHub", "VS Code", "SQLite", "Postman"] },
];

const EDUCATION = [
  {
    school: "Parul University, Vadodara",
    degree: "B.Tech — Computer Science Engineering",
    period: "2022 – Present",
    note: "Core CS: algorithms, distributed systems, AI, networking, software engineering",
    accent: "#3b82f6",
  },
  {
    school: "IIT Madras",
    degree: "BS — Data Science & Applications",
    period: "2023 – Present",
    note: "Statistics, ML, data engineering, programming-first curriculum",
    accent: "#34d399",
  },
  {
    school: "Satish Chandra Memorial School",
    degree: "Class 12, CBSE — PCM + CS",
    period: "Graduated 2022",
    note: "91.6%",
    accent: "#a78bfa",
  },
  {
    school: "Chakdaha Model School",
    degree: "Class 10, CBSE",
    period: "Graduated 2020",
    note: "91.6%",
    accent: "#a78bfa",
  },
];

const CERTS = [
  { name: "Azure AI Fundamentals", issuer: "Microsoft", color: "#3b82f6" },
  { name: "Software Development Fundamentals", issuer: "LinkedIn", color: "#0a66c2" },
  { name: "Internet Protocols", issuer: "NPTEL", color: "#f59e0b" },
  { name: "Cybersecurity Essentials", issuer: "Cisco", color: "#34d399" },
  { name: "Blockchain Technology", issuer: "HCL GUVI", color: "#a78bfa" },
];

const LANGUAGES_SPOKEN = [
  { lang: "Bengali", level: "Native", pct: 100, color: "#3b82f6" },
  { lang: "English", level: "Full Professional", pct: 92, color: "#34d399" },
  { lang: "Hindi", level: "Full Professional", pct: 90, color: "#a78bfa" },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700&display=swap');

        .about-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .about-bg-glow {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 55% 45% at 75% 25%, rgba(59,130,246,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 25% 75%, rgba(52,211,153,0.04) 0%, transparent 70%);
        }

        .section-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin-bottom: 0.6rem;
        }
        .section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          letter-spacing: 0.01em;
          line-height: 0.95;
          background: linear-gradient(to right, var(--foreground), var(--muted-foreground));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2rem;
        }

        .glass-card {
          border-radius: 18px;
          border: 1px solid var(--border);
          background: var(--stat-card-bg);
          backdrop-filter: blur(16px);
          transition: all 0.3s ease;
          overflow: hidden;
          box-shadow: var(--card-shadow);
        }
        .glass-card:hover {
          border-color: var(--muted-foreground);
          background: var(--accent);
        }

        .edu-card {
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--stat-card-bg);
          padding: 1.4rem 1.6rem;
          transition: all 0.25s ease;
        }
        .edu-card:hover {
          border-color: var(--muted-foreground);
          background: var(--accent);
        }

        .skill-group {
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--stat-card-bg);
          padding: 1.25rem;
          transition: all 0.25s ease;
        }
        .skill-group:hover {
          border-color: var(--muted-foreground);
          background: var(--accent);
        }

        .skill-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--muted-foreground);
          background: var(--accent);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.25rem 0.7rem;
          transition: all 0.2s;
        }
        .skill-tag:hover {
          background: var(--border);
          color: var(--foreground);
          border-color: var(--muted-foreground);
        }

        @media (max-width: 768px) {
          .about-wrap { padding: 0 1.5rem; }
          .about-grid-2 { grid-template-columns: 1fr !important; }
          .about-skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div className="about-bg-glow" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
          <div className="about-wrap">

            {/* ── HERO ────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: "5rem" }}
            >
              <p className="section-eyebrow">Who I am</p>
              <h1
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  letterSpacing: "0.01em",
                  lineHeight: 0.9,
                  marginBottom: "1.5rem",
                  filter: "drop-shadow(0 0 20px rgba(59,130,246,0.15))",
                }}
              >
                <span style={{
                  background: "linear-gradient(135deg, var(--foreground) 0%, var(--muted-foreground) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  ARPAN<br />SINGHA
                </span>
              </h1>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--muted-foreground)",
                maxWidth: "560px",
                marginBottom: "2rem",
              }}>
                Dual-degree CS + Data Science student (Parul University × IIT Madras) passionate
                about building scalable systems and data-driven solutions. I combine software
                engineering fundamentals with machine learning to tackle real-world problems.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/hire"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
                    fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--background)", background: "var(--foreground)",
                    padding: "0.7rem 1.4rem", borderRadius: "999px",
                    textDecoration: "none", transition: "opacity 0.2s",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  <Briefcase size={12} />
                  Hire Me
                </Link>
                <Link
                  href="/#contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
                    fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--muted-foreground)",
                    border: "1px solid var(--border)",
                    padding: "0.7rem 1.4rem", borderRadius: "999px",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                >
                  <ArrowUpRight size={12} />
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            {/* ── EDUCATION ───────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ marginBottom: "5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <GraduationCap size={14} style={{ color: "rgba(255,255,255,0.25)" }} />
                <p className="section-eyebrow" style={{ margin: 0 }}>Academic background</p>
              </div>
              <h2 className="section-heading">Education</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.school}
                    className="edu-card"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.55 }}
                    style={{ borderLeft: `3px solid ${edu.accent}40` }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
                      <div>
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.88rem",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.82)",
                          marginBottom: "0.2rem",
                        }}>
                          {edu.school}
                        </p>
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 300,
                          color: edu.accent,
                          marginBottom: "0.3rem",
                          opacity: 0.85,
                        }}>
                          {edu.degree}
                        </p>
                        <p style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: 300,
                          color: "rgba(255,255,255,0.3)",
                        }}>
                          {edu.note}
                        </p>
                      </div>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 300,
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.22)",
                        whiteSpace: "nowrap",
                        paddingTop: "2px",
                      }}>
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── SKILLS ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ marginBottom: "5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <Code2 size={14} style={{ color: "rgba(255,255,255,0.25)" }} />
                <p className="section-eyebrow" style={{ margin: 0 }}>Technical toolkit</p>
              </div>
              <h2 className="section-heading">Skills</h2>
              <div
                className="about-skills-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem" }}
              >
                {SKILLS.map((group, i) => (
                  <motion.div
                    key={group.category}
                    className="skill-group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                  >
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.58rem",
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.25)",
                      marginBottom: "0.75rem",
                    }}>
                      {group.category}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {group.items.map((item) => (
                        <span key={item} className="skill-tag">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── EXPERIENCE + CERTIFICATIONS ─────────────── */}
            <div
              className="about-grid-2"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "5rem" }}
            >
              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <Briefcase size={14} style={{ color: "rgba(255,255,255,0.25)" }} />
                  <p className="section-eyebrow" style={{ margin: 0 }}>Work history</p>
                </div>
                <h2 className="section-heading">Experience</h2>
                <div className="glass-card" style={{ padding: "1.75rem" }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.82)",
                    marginBottom: "0.25rem",
                  }}>
                    Member, Gir House
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    color: "#3b82f6",
                    opacity: 0.85,
                    fontWeight: 300,
                    marginBottom: "0.75rem",
                  }}>
                    IIT Madras BS Program · Oct 2023 – Present
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.35)",
                  }}>
                    Represented Gir House in technical competitions (Paradox & Margazhi fests).
                    Participated in academic showcases, peer learning, and cross-team collaboration
                    resulting in multiple house-level wins.
                  </p>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <Award size={14} style={{ color: "rgba(255,255,255,0.25)" }} />
                  <p className="section-eyebrow" style={{ margin: 0 }}>Verified credentials</p>
                </div>
                <h2 className="section-heading">Certifications</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {CERTS.map((cert, i) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.45 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.85rem 1.1rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        background: "rgba(255,255,255,0.02)",
                        gap: "1rem",
                        transition: "all 0.25s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
                        <div style={{
                          width: 7, height: 7, borderRadius: "50%",
                          background: cert.color,
                          boxShadow: `0 0 6px ${cert.color}`,
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: 300,
                          color: "rgba(255,255,255,0.65)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>
                          {cert.name}
                        </span>
                      </div>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.58rem",
                        fontWeight: 300,
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.22)",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}>
                        {cert.issuer}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── LANGUAGES ───────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <Languages size={14} style={{ color: "rgba(255,255,255,0.25)" }} />
                <p className="section-eyebrow" style={{ margin: 0 }}>Communication</p>
              </div>
              <h2 className="section-heading">Languages</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: "480px" }}>
                {LANGUAGES_SPOKEN.map((lang) => (
                  <div key={lang.lang}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.7)",
                      }}>
                        {lang.lang}
                      </span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.28)",
                        letterSpacing: "0.08em",
                      }}>
                        {lang.level}
                      </span>
                    </div>
                    <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: "100%", background: lang.color, borderRadius: "999px" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </main>
      </div>

      <Chatbot />
    </div>
  );
}
