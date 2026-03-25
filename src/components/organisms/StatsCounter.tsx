"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Briefcase, Award, BookOpen, Code2 } from "lucide-react";

const STATS = [
  { icon: Code2,    value: 4,  suffix: "+", label: "Projects Shipped",       color: "#3b82f6" },
  { icon: Award,    value: 5,  suffix: "+", label: "Certifications Earned",  color: "#34d399" },
  { icon: BookOpen, value: 2,  suffix: "",  label: "Degrees in Progress",    color: "#a78bfa" },
  { icon: Briefcase,value: 3,  suffix: "+", label: "Years of Coding",        color: "#f59e0b" },
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
        cursor: "default",
        boxShadow: "var(--card-shadow)",
      }}
      whileHover={{
        borderColor: `${stat.color}40`,
        background: "var(--accent)",
        y: -4,
      }}
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

      {/* Number */}
      <p style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(2.8rem, 5vw, 4rem)",
        letterSpacing: "0.02em",
        lineHeight: 1,
        color: "var(--foreground)",
        marginBottom: "0.35rem",
      }}>
        {count}{stat.suffix}
      </p>

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

      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2.5rem" }}>
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
        </motion.div>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
