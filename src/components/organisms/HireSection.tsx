"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  MapPin,
  Clock,
  Zap,
  Brain,
  Cloud,
  Database,
  Code2,
  Globe,
  CheckCircle2,
  Sparkles,
  CalendarCheck,
  Briefcase,
  GraduationCap,
  Coffee,
  Send,
} from "lucide-react";

const AVAILABILITY = {
  status: "open",
  label: "Available for Opportunities",
  detail: "Full-time · Internships · Freelance",
};

const ROLE_FIT = [
  {
    icon: Brain,
    title: "ML / AI Engineer",
    match: 94,
    color: "#3b82f6",
    skills: ["Python", "TensorFlow", "Data Pipelines", "Model Deployment"],
  },
  {
    icon: Cloud,
    title: "Cloud / Backend Engineer",
    match: 88,
    color: "#34d399",
    skills: ["Azure", "AWS", "REST APIs", "Flask", "SQL"],
  },
  {
    icon: Code2,
    title: "Full-Stack Engineer",
    match: 82,
    color: "#a78bfa",
    skills: ["Next.js", "TypeScript", "Python", "Databases"],
  },
  {
    icon: Database,
    title: "Data Engineer / Analyst",
    match: 90,
    color: "#f59e0b",
    skills: ["SQL", "Python", "Pandas", "Visualization", "ETL"],
  },
];

const WHAT_I_BRING = [
  {
    icon: Zap,
    heading: "Ship fast, think deep",
    body: "I move quickly without cutting corners — prototype in days, refactor for scale when it matters.",
  },
  {
    icon: Globe,
    heading: "Cross-domain thinking",
    body: "CS + Data Science dual degree gives me a rare lens — I connect systems thinking with statistical rigor.",
  },
  {
    icon: GraduationCap,
    heading: "IIT Madras + Parul Uni",
    body: "Dual-degree academic breadth, proven through competitive fests, NPTEL, Azure, and Cisco certifications.",
  },
  {
    icon: Coffee,
    heading: "Collaborative & async-ready",
    body: "Open-source contributor, strong written communicator, comfortable in distributed team environments.",
  },
];

const CERTS = [
  "Azure AI Fundamentals · Microsoft",
  "Cybersecurity Essentials · Cisco",
  "Internet Protocols · NPTEL",
  "Software Development · LinkedIn",
  "Blockchain · HCL GUVI",
];

const TIMELINE = [
  { year: "2023", label: "Started B.Tech CSE — Parul University" },
  { year: "2023", label: "Joined IIT Madras BS Data Science program" },
  { year: "2023", label: "Azure AI Fundamentals certified" },
  { year: "2024", label: "Built Hospital Management System (Flask + SQLite)" },
  { year: "2024", label: "Built Placement Portal for university use" },
  { year: "2025", label: "Network Monitor & Cybersecurity tools" },
  { year: "2026", label: "Open to full-time roles · SWE / DS / ML" },
];

function MatchBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: "100%", background: color, borderRadius: "999px" }}
      />
    </div>
  );
}

export function HireSection() {
  return (
    <section id="hire" style={{ position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        .hire-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* Glass card base */
        .glass-card {
          border-radius: 20px;
          border: 1px solid var(--border);
          background: var(--stat-card-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: var(--card-shadow);
        }
        .glass-card:hover {
          border-color: var(--muted-foreground);
          background: var(--accent);
        }

        /* Availability pill */
        .avail-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.25);
          border-radius: 999px;
          padding: 0.45rem 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #10b981;
        }
        .avail-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          position: relative;
          flex-shrink: 0;
        }
        .avail-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(52,211,153,0.35);
          animation: avail-ping 1.5s cubic-bezier(0,0,0.2,1) infinite;
        }
        @keyframes avail-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Section eyebrow */
        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin-bottom: 0.6rem;
        }

        /* Section heading */
        .section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          letter-spacing: 0.01em;
          line-height: 0.95;
          background: linear-gradient(to right, var(--foreground), var(--muted-foreground));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Role card */
        .role-card {
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--stat-card-bg);
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: default;
        }
        .role-card:hover {
          border-color: var(--muted-foreground);
          background: var(--accent);
          transform: translateY(-3px);
        }

        /* What I bring card */
        .bring-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.015);
          padding: 1.5rem;
          transition: all 0.25s ease;
        }
        .bring-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.035);
        }

        /* Timeline */
        .timeline-item {
          display: flex;
          gap: 1.5rem;
          position: relative;
        }
        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 2.2rem;
          top: 2rem;
          bottom: -1.5rem;
          width: 1px;
          background: rgba(255,255,255,0.06);
        }

        /* Download resume button */
        .dl-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--background);
          background: var(--foreground);
          border: none;
          padding: 0.75rem 1.6rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
          box-shadow: var(--card-shadow);
        }
        .dl-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* Connect button */
        .connect-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          background: transparent;
          border: 1px solid var(--border);
          padding: 0.75rem 1.6rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .connect-btn:hover {
          border-color: var(--muted-foreground);
          color: var(--foreground);
          transform: translateY(-1px);
        }

        /* Background glow */
        .hire-bg-glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 60% 50% at 70% 20%, rgba(59,130,246,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(52,211,153,0.04) 0%, transparent 70%);
        }

        @media (max-width: 768px) {
          .hire-wrap { padding: 0 1.5rem; }
          .hire-grid-2 { grid-template-columns: 1fr !important; }
          .hire-grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .hire-grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Background */}
      <div className="hire-bg-glow" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <main style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
          <div className="hire-wrap">

            {/* ── HERO ─────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: "5rem" }}
            >
              {/* Availability pill */}
              <div style={{ marginBottom: "2rem" }}>
                <span className="avail-pill">
                  <span className="avail-dot" />
                  {AVAILABILITY.label}
                </span>
              </div>

              <h2
                className="section-heading"
                style={{ marginBottom: "1.5rem" }}
              >
                <span style={{
                  background: "linear-gradient(135deg, var(--foreground) 0%, var(--muted-foreground) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  LET&apos;S BUILD<br />
                </span>
                <span style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  GREAT THINGS.
                </span>
              </h2>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
                maxWidth: "520px",
                marginBottom: "2rem",
              }}>
                I&apos;m Arpan Singha — a dual-degree CS + Data Science student looking to contribute
                to teams building impactful, scalable technology at organizations like Google, Microsoft,
                or ambitious startups.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://drive.google.com/uc?export=download&id=YOUR_RESUME_FILE_ID"
                  className="dl-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={13} />
                  Download Resume
                </a>
                <Link href="/#contact" className="connect-btn">
                  <Send size={12} />
                  Quick Connect
                </Link>
              </div>

              {/* Meta row */}
              <div style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2.5rem",
                flexWrap: "wrap",
              }}>
                {[
                  { icon: MapPin, text: "India · Remote OK" },
                  { icon: Clock, text: AVAILABILITY.detail },
                  { icon: CalendarCheck, text: "Available from April 2026" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 300,
                    color: "var(--muted-foreground)",
                    letterSpacing: "0.05em",
                  }}>
                    <Icon size={12} style={{ color: "var(--muted-foreground)", opacity: 0.5, flexShrink: 0 }} />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── ROLE FIT ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: "5rem" }}
            >
              <p className="eyebrow">Where I fit best</p>
              <h2 className="section-heading" style={{ marginBottom: "2rem" }}>Role Match</h2>

              <div className="hire-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                {ROLE_FIT.map((role, i) => (
                  <motion.div
                    key={role.title}
                    className="role-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${role.color}18`,
                      border: `1px solid ${role.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1rem",
                    }}>
                      <role.icon size={16} style={{ color: role.color }} />
                    </div>

                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--foreground)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}>
                      {role.title}
                    </p>

                    <div style={{ marginBottom: "0.5rem" }}>
                      <MatchBar value={role.match} color={role.color} />
                    </div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.6rem",
                      color: role.color,
                      letterSpacing: "0.1em",
                      marginBottom: "1rem",
                    }}>
                      {role.match}% match
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {role.skills.map((s) => (
                        <span key={s} style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.55rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--muted-foreground)",
                          border: "1px solid var(--border)",
                          borderRadius: "999px",
                          padding: "0.15rem 0.5rem",
                        }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── WHAT I BRING + TIMELINE ──────────────────────── */}
            <div className="hire-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "5rem" }}>

              {/* What I bring */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="eyebrow">What you get</p>
                <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>What I Bring</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {WHAT_I_BRING.map((item, i) => (
                    <motion.div
                      key={item.heading}
                      className="bring-card"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                        <div style={{
                          width: 32, height: 32,
                          borderRadius: 9,
                          background: "rgba(59,130,246,0.1)",
                          border: "1px solid rgba(59,130,246,0.2)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}>
                          <item.icon size={14} style={{ color: "#3b82f6" }} />
                        </div>
                        <div>
                          <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: "var(--foreground)",
                            marginBottom: "0.25rem",
                          }}>
                            {item.heading}
                          </p>
                          <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 300,
                            lineHeight: 1.65,
                            color: "var(--muted-foreground)",
                          }}>
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="eyebrow">My journey</p>
                <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>Timeline</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={i}
                      className="timeline-item"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                      <div style={{
                        width: "4rem",
                        flexShrink: 0,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        color: "var(--muted-foreground)",
                        paddingTop: "0.1rem",
                        textAlign: "right",
                      }}>
                        {item.year}
                      </div>
                      <div style={{
                        position: "relative",
                        paddingTop: "0.05rem",
                      }}>
                        <div style={{
                          width: 7, height: 7,
                          borderRadius: "50%",
                          background: i === TIMELINE.length - 1 ? "#10b981" : "var(--border)",
                          boxShadow: i === TIMELINE.length - 1 ? "0 0 8px #10b981" : "none",
                          position: "relative",
                          zIndex: 1,
                          marginRight: "1rem",
                          marginLeft: "0.5rem",
                          marginTop: "4px",
                          flexShrink: 0,
                          display: "inline-block",
                        }} />
                      </div>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 300,
                        color: i === TIMELINE.length - 1 ? "var(--foreground)" : "var(--muted-foreground)",
                        lineHeight: 1.5,
                        paddingTop: "0.05rem",
                      }}>
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── CERTIFICATIONS ───────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "5rem" }}
            >
              <p className="eyebrow">Credentials</p>
              <h2 className="section-heading" style={{ marginBottom: "1.5rem" }}>Certifications</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {CERTS.map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 400,
                      color: "var(--muted-foreground)",
                      background: "var(--accent)",
                      border: "1px solid var(--border)",
                      borderRadius: "999px",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    <CheckCircle2 size={11} style={{ color: "#34d399", flexShrink: 0 }} />
                    {cert}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── FINAL CTA ────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card"
              style={{ textAlign: "center", padding: "3.5rem 2rem", position: "relative", overflow: "hidden" }}
            >
              {/* Decorative glow */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60%",
                height: "60%",
                background: "radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                  <Sparkles size={22} style={{ color: "#3b82f6" }} />
                </div>
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "0.02em",
                  background: "linear-gradient(to right, var(--foreground), var(--muted-foreground))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.75rem",
                }}>
                  Ready to contribute from day one.
                </h2>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "var(--muted-foreground)",
                  maxWidth: "400px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.75,
                }}>
                  Whether it&apos;s a summer internship at a FAANG company or a founding engineer
                  role — I bring energy, precision, and genuine curiosity.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <a
                    href="mailto:arpansingha16703@gmail.com"
                    className="dl-btn"
                  >
                    <Briefcase size={13} />
                    Email Me Directly
                  </a>
                  <Link href="/#contact" className="connect-btn">
                    <ArrowUpRight size={13} />
                    Use Contact Form
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </main>
      </div>
    </section>
  );
}
