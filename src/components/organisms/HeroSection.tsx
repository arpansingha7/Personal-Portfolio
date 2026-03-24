"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);


  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col"
      style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .side-badge {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          transform-origin: right center;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #fff;
          color: #0a0a0a;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          writing-mode: vertical-rl;
          transform: none;
          writing-mode: horizontal-tb;
          rotate: 0deg;
        }

        /* Vertical badge on the right */
        .v-badge {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 3.5rem;
          z-index: 40;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .v-badge span {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          font-weight: 400;
        }
        .v-badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 10px #3b82f6;
        }

        /* Gradient mesh background */
        .bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 55% 45%, rgba(30, 80, 200, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 70%, rgba(0, 180, 120, 0.10) 0%, transparent 65%),
            #0a0a0a;
        }

        /* Grid overlay */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Big name */
        .name-block {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 3.5rem;
          padding: 0 2.5rem;
          line-height: 0.88;
          pointer-events: none;
          z-index: 20;
        }
        .name-line {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(80px, 15vw, 180px);
          background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          letter-spacing: -0.01em;
          mix-blend-mode: normal;
        }
        .name-line.outlined {
          background: none;
          -webkit-text-fill-color: initial;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.35);
          color: transparent;
        }

        /* Role tag */
        .role-tag {
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.7rem, 2vw, 0.85rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          z-index: 20;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
        .role-tag span {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.8rem 2rem;
          border-radius: 999px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        /* Abstract shape — "data brain" */
        .shape-wrap {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -54%);
          z-index: 10;
          width: clamp(220px, 32vw, 460px);
          aspect-ratio: 1;
          pointer-events: none;
        }

        /* Bottom meta strip */
        .meta-strip {
          position: absolute;
          bottom: 2rem;
          left: 2.5rem;
          right: 4rem;
          z-index: 30;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .meta-item {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.55rem, 0.9vw, 0.72rem);
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* CTA button */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #fff;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 999px;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .cta-btn:hover { opacity: 0.85; }

        /* Noise grain overlay */
        .grain {
          position: absolute;
          inset: 0;
          z-index: 5;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .v-badge { display: none; }
          .name-block {
            right: 0;
            padding: 0 1.5rem;
          }
          .meta-strip {
            left: 1.5rem;
            right: 1.5rem;
            bottom: 1.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>

      {/* Backgrounds */}
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <div className="grain" />

      {/* Right badge strip */}
      <div className="v-badge">
        <div className="v-badge-dot" />
        <span>Open to Work</span>
        <div className="v-badge-dot" />
      </div>

      {/* Central rotating tags */}
      <motion.div
        className="role-tag"
        style={{ top: "35%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <span>Aspiring Software Engineer & Data Scientist</span>
      </motion.div>

      {/* Abstract SVG shape instead of photo */}
      <motion.div
        className="shape-wrap"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: nameY }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glow blobs */}
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
            <filter id="blur1">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="blur2">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* Background glows */}
          <ellipse cx="250" cy="220" rx="160" ry="170" fill="url(#g1)" filter="url(#blur1)" />
          <ellipse cx="290" cy="310" rx="100" ry="100" fill="url(#g2)" filter="url(#blur1)" />

          {/* Brain / network geometry — rings */}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={i}
              cx="250"
              cy="230"
              rx={70 + i * 30}
              ry={50 + i * 20}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              fill="none"
              transform={`rotate(${i * 18} 250 230)`}
            />
          ))}

          {/* Circuit lines */}
          {[
            "M250,80 L250,170", "M250,290 L250,390",
            "M100,230 L180,230", "M320,230 L420,230",
            "M160,130 L210,180", "M290,280 L340,330",
            "M340,130 L290,180", "M210,280 L160,330",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.8, ease: "easeOut" }}
            />
          ))}

          {/* Nodes */}
          {[
            [250, 80], [250, 390], [100, 230], [420, 230],
            [160, 130], [340, 130], [160, 330], [340, 330],
            [250, 230],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx} cy={cy}
              r={i === 8 ? 12 : 5}
              fill={i === 8 ? "rgba(59,130,246,0.9)" : "rgba(255,255,255,0.55)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.4 }}
            />
          ))}

          {/* Outer decorative ring */}
          <motion.circle
            cx="250" cy="230" r="190"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            strokeDasharray="4 8"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 230px" }}
          />
          <motion.circle
            cx="250" cy="230" r="155"
            stroke="rgba(59,130,246,0.12)"
            strokeWidth="1"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 230px" }}
          />

          {/* Data stream dots */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const r = 155;
            const x = 250 + Math.cos(angle) * r;
            const y = 230 + Math.sin(angle) * r;
            return (
              <motion.circle
                key={`dot-${i}`}
                cx={x} cy={y} r="2.5"
                fill="rgba(52,211,153,0.7)"
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
        className="name-block"
        style={{ y: nameY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.8 }}
      >
        <motion.span
          className="name-line"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          ARPAN
        </motion.span>
        <motion.span
          className="name-line outlined"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          SINGHA
        </motion.span>
      </motion.div>

      {/* Meta strip — bottom */}
      <motion.div
        className="meta-strip"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <span className="meta-item">Parul University & IIT Madras</span>
        <span className="meta-item">Specializing in AI / ML & Cloud</span>
        <button className="cta-btn">
          Let&apos;s Work Together
          <ArrowUpRight size={14} />
        </button>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "48px",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))",
          zIndex: 30,
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />
    </section>
  );
}