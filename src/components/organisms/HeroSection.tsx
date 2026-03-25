"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Magnetic from "@/components/Magnetic";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [displayText, setDisplayText] = useState("");
  const fullText = "Aspiring Software Engineer & Data Scientist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        .hero-bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 60% 40%, rgba(30, 80, 200, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 55% at 15% 75%, rgba(0, 180, 120, 0.06) 0%, transparent 65%),
            var(--background);
        }

        .hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--foreground) 0.05px, transparent 0.05px),
            linear-gradient(90deg, var(--foreground) 0.05px, transparent 0.05px);
          background-size: 60px 60px;
          opacity: 0.1;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 5;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          pointer-events: none;
        }

        /* Right badge strip */
        .hero-v-badge {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 3.5rem;
          z-index: 40;
          background: var(--nav-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-left: 1px solid var(--nav-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .hero-v-badge span {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          font-weight: 400;
        }
        .hero-v-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: oklch(0.65 0.2 240);
          box-shadow: 0 0 10px rgba(59,130,246,0.4);
          flex-shrink: 0;
        }

        /* Central role tag */
        .hero-role-tag {
          position: absolute;
          left: 0;
          right: 3.5rem;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.65rem, 1.5vw, 0.82rem);
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          z-index: 20;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
        .hero-role-tag span {
          background: var(--nav-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--nav-border);
          padding: 0.75rem 2rem;
          border-radius: 999px;
        }

        /* Abstract SVG shape */
        .hero-shape-wrap {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translate(-50%, -55%);
          z-index: 10;
          width: clamp(200px, 30vw, 440px);
          aspect-ratio: 1;
          pointer-events: none;
        }

        /* Big name — anchored to bottom */
        .hero-name-block {
          position: absolute;
          bottom: 5.5rem;
          left: 0;
          right: 3.5rem;
          padding: 0 2.5rem;
          line-height: 0.88;
          pointer-events: none;
          z-index: 20;
        }
        .hero-name-line {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 14vw, 170px);
          background: linear-gradient(135deg, var(--foreground) 0%, oklch(0.65 0.2 240) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          letter-spacing: -0.01em;
          filter: drop-shadow(0 0 25px rgba(59,130,246,0.15));
        }

        /* Bottom meta strip */
        .hero-meta-strip {
          position: absolute;
          bottom: 1.8rem;
          left: 2.5rem;
          right: 4.5rem;
          z-index: 30;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hero-meta-item {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.52rem, 0.85vw, 0.68rem);
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }

        /* CTA button */
        .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--background);
          background: var(--foreground);
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          white-space: nowrap;
          box-shadow: var(--card-shadow);
        }
        .hero-cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* Scroll indicator line */
        .hero-scroll-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 52px;
          background: linear-gradient(to bottom, transparent, var(--border));
          z-index: 30;
        }

        @media (max-width: 768px) {
          .hero-v-badge { display: none; }
          .hero-name-block {
            right: 0;
            padding: 0 1.5rem;
            bottom: 6rem;
          }
          .hero-meta-strip {
            left: 1.5rem;
            right: 1.5rem;
            bottom: 2rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.8rem;
          }
          .hero-role-tag { right: 0; }
        }
      `}</style>

      {/* Backgrounds */}
      <div className="hero-bg-mesh" />
      <div className="hero-bg-grid" />
      <div className="hero-grain" />

      {/* Right badge strip */}
      <div className="hero-v-badge">
        <div className="hero-v-badge-dot" />
        <span>Open to Work</span>
        <div className="hero-v-badge-dot" />
      </div>

      {/* Role tag */}
      <motion.div
        className="hero-role-tag"
        style={{ top: "33%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span>
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-px h-[1em] bg-current ml-1 align-middle"
          />
        </span>
      </motion.div>

      {/* Abstract SVG shape */}
      <motion.div
        className="hero-shape-wrap"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: nameY }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
            <filter id="blur1"><feGaussianBlur stdDeviation="18" /></filter>
            <filter id="blur2"><feGaussianBlur stdDeviation="10" /></filter>
          </defs>

          <ellipse cx="250" cy="220" rx="160" ry="170" fill="url(#g1)" filter="url(#blur1)" />
          <ellipse cx="290" cy="310" rx="100" ry="100" fill="url(#g2)" filter="url(#blur1)" />

          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={i}
              cx="250" cy="230"
              rx={70 + i * 30} ry={50 + i * 20}
              stroke="rgba(255,255,255,0.055)"
              strokeWidth="1"
              fill="none"
              transform={`rotate(${i * 18} 250 230)`}
            />
          ))}

          {[
            "M250,80 L250,170", "M250,290 L250,390",
            "M100,230 L180,230", "M320,230 L420,230",
            "M160,130 L210,180", "M290,280 L340,330",
            "M340,130 L290,180", "M210,280 L160,330",
          ].map((d, i) => (
            <motion.path
              key={i} d={d}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: "easeOut" }}
            />
          ))}

          {[
            [250, 80], [250, 390], [100, 230], [420, 230],
            [160, 130], [340, 130], [160, 330], [340, 330], [250, 230],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i} cx={cx} cy={cy}
              r={i === 8 ? 12 : 5}
              fill={i === 8 ? "rgba(59,130,246,0.9)" : "rgba(255,255,255,0.5)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.4 }}
            />
          ))}

          <motion.circle
            cx="250" cy="230" r="190"
            stroke="rgba(255,255,255,0.04)" strokeWidth="1"
            strokeDasharray="4 8" fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 230px" }}
          />
          <motion.circle
            cx="250" cy="230" r="155"
            stroke="rgba(59,130,246,0.10)" strokeWidth="1" fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 230px" }}
          />

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const r = 155;
            const x = 250 + Math.cos(angle) * r;
            const y = 230 + Math.sin(angle) * r;
            return (
              <motion.circle
                key={`dot-${i}`} cx={x} cy={y} r="2.5"
                fill="rgba(52,211,153,0.65)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }}
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Big name — absolutely positioned, bottom-anchored */}
      <motion.div
        className="hero-name-block"
        style={{ y: nameY, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.8 }}
      >
        <motion.span
          className="hero-name-line"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          ARPAN
        </motion.span>
        <motion.span
          className="hero-name-line"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          SINGHA
        </motion.span>
      </motion.div>

      {/* Bottom meta strip */}
      <motion.div
        className="hero-meta-strip"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <span className="hero-meta-item">Parul University &amp; IIT Madras</span>
        <span className="hero-meta-item">Specializing in AI / ML &amp; Cloud</span>
        <Magnetic>
          <Link href="/#contact" className="hero-cta-btn">
            Let&apos;s Work Together
            <ArrowUpRight size={13} />
          </Link>
        </Magnetic>
      </motion.div>

      {/* Scroll indicator line */}
      <motion.div
        className="hero-scroll-line"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />
    </section>
  );
}