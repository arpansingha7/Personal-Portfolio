"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, BookOpen, Code2 } from "lucide-react";

const STATS = [
  { icon: Code2,     value: 7,  suffix: "+", label: "Projects Shipped",       color: "#3b82f6", detail: "Full-stack portals, AI agents, ML models, and agri-tech platforms." },
  { icon: Award,     value: 5,  suffix: "+", label: "Certifications Earned",  color: "#34d399", detail: "Microsoft Azure AI, NPTEL Networks, Cisco Cybersecurity, LinkedIn, GUVI." },
  { icon: BookOpen,  value: 2,  suffix: "",  label: "Degrees in Progress",    color: "#a78bfa", detail: "Dual major: B.Tech CSE (Parul Univ) & BS Data Science (IIT Madras)." },
  { icon: Briefcase, value: 4,  suffix: "+", label: "Years of Coding",        color: "#f59e0b", detail: "Building everything from REST APIs to autonomous AI agents since 2022." },
];

function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, index, active }: { stat: typeof STATS[0]; index: number; active: boolean }) {
  const count = useCounter(stat.value, active);
  const Icon = stat.icon;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        borderRadius: 20,
        border: "1px solid var(--stat-card-border)",
        background: "var(--stat-card-bg)",
        backdropFilter: "blur(12px)",
        padding: "2rem 1.75rem",
        overflow: "hidden",
        transition: "border-color 0.3s, background 0.3s",
        cursor: "pointer",
        boxShadow: "var(--card-shadow)",
      }}
      whileHover={{
        borderColor: `${stat.color}40`,
        background: "var(--accent)",
        y: -4,
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Top accent glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)`,
      }} />

      {/* Icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: `${stat.color}15`,
        border: `1px solid ${stat.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1.25rem",
      }}>
        <Icon size={18} style={{ color: stat.color }} />
      </div>

      {/* Number or Detail */}
      <div style={{ minHeight: "4rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", marginBottom: "0.35rem" }}>
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.p
              key="number"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 5vw, 4rem)",
                letterSpacing: "0.02em",
                lineHeight: 1,
                color: "var(--foreground)",
                margin: 0,
              }}
            >
              {count}{stat.suffix}
            </motion.p>
          ) : (
            <motion.p
              key="detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                color: "var(--foreground)",
                lineHeight: 1.55,
                margin: 0,
                opacity: 0.9,
              }}
            >
              {stat.detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 400,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--muted-foreground)",
        lineHeight: 1.5,
      }}>
        {stat.label}
      </p>

      {/* Flip hint */}
      <p style={{
        position: "absolute", bottom: "0.75rem", right: "1rem",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.55rem", letterSpacing: "0.1em",
        color: "var(--muted-foreground)", opacity: 0.35,
        textTransform: "uppercase",
      }}>
        {isFlipped ? "← Back" : "Tap for more"}
      </p>
    </motion.div>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{ padding: "6rem 0", background: "var(--background)", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70%", height: "100%",
        background: "radial-gradient(ellipse at center, rgba(59,130,246,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem", fontWeight: 400,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--muted-foreground)", marginBottom: "0.6rem",
          }}>At a Glance</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            letterSpacing: "0.01em", lineHeight: 0.95,
            background: "linear-gradient(to right, var(--foreground), var(--muted-foreground))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>By the Numbers</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem", fontWeight: 300,
            color: "var(--muted-foreground)", marginTop: "0.5rem",
          }}>Click any card to learn more</p>
        </motion.div>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
        }}>
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
