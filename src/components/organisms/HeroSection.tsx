"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Magnetic from "@/components/Magnetic";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  // 3D Tilt for Photo Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section ref={containerRef} id="hero" className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex items-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

        .hero-bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 60% 40%, rgba(30, 80, 200, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 55% at 15% 75%, rgba(0, 180, 120, 0.04) 0%, transparent 65%),
            var(--background);
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

        .hero-layout {
          position: relative;
          z-index: 20;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 2.5rem;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 4rem;
          margin-top: 2rem;
        }

        /* Left Side: Text Content */
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .hero-role-pill {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }

        .glowing-green-capsule {
          display: inline-block;
          width: 6px;
          height: 12px;
          border-radius: 999px;
          background-color: #22c55e;
          box-shadow: 0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.4);
          margin-left: 0.8rem;
        }

        .hero-name-block {
          display: flex;
          flex-direction: column;
          line-height: 0.85;
        }

        .hero-name-line {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 8vw, 130px);
          background: linear-gradient(135deg, var(--foreground) 0%, oklch(0.65 0.2 240) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          letter-spacing: -0.01em;
          filter: drop-shadow(0 0 25px rgba(59,130,246,0.15));
        }

        .hero-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.6;
          color: var(--muted-foreground);
          max-width: 440px;
          margin-top: 0.5rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--background);
          background: var(--foreground);
          padding: 0.8rem 1.8rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(255,255,255,0.15);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.25);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--foreground);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.8rem 1.8rem;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        /* Right Side: Visuals */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }

        .hero-shape-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 120%;
          aspect-ratio: 1;
          pointer-events: none;
          opacity: 0.8;
        }

        .hero-photo-card {
          position: relative;
          width: clamp(220px, 24vw, 320px);
          aspect-ratio: 0.75;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          padding: 0.8rem;
          z-index: 15;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .hero-photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2));
          transform: translateZ(30px);
        }

        .hero-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-photo-card:hover .hero-photo-img {
          transform: scale(1.05);
        }

        /* Scroll indicator line */
        .hero-scroll-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 52px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.2));
          z-index: 30;
        }

        @media (max-width: 992px) {
          .hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
            margin-top: 6rem;
          }
          .hero-left {
            align-items: center;
            order: 2;
          }
          .hero-bio {
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-right {
            order: 1;
            min-height: 380px;
          }
          .hero-photo-card {
            width: clamp(200px, 45vw, 280px);
          }
          .hero-shape-wrap {
            width: 140%;
          }
        }
      `}</style>

      {/* Backgrounds */}
      <div className="hero-bg-mesh" />
      <div className="hero-grain" />

      <div className="hero-layout">
        {/* Left Side */}
        <div className="hero-left">
          <motion.div
            className="hero-role-pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span>{displayText}</span>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="glowing-green-capsule"
            />
          </motion.div>

          <div className="hero-name-block">
            <motion.span
              className="hero-name-line"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              ARPAN
            </motion.span>
            <motion.span
              className="hero-name-line"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              SINGHA
            </motion.span>
          </div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A passionate engineer specializing in AI, Machine Learning, and Cloud architecture. Bringing ideas to life through elegant code and scalable design.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Magnetic>
              <Link href="/#projects" className="btn-primary">
                View Projects
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
            </Magnetic>
            <Magnetic>
              <a href="/uploads/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FileText size={16} strokeWidth={2} />
                View Resume
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <motion.div
            className="hero-shape-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="g2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </radialGradient>
                <filter id="blur1"><feGaussianBlur stdDeviation="25" /></filter>
              </defs>

              <ellipse cx="250" cy="250" rx="180" ry="190" fill="url(#g1)" filter="url(#blur1)" />
              <ellipse cx="300" cy="300" rx="120" ry="120" fill="url(#g2)" filter="url(#blur1)" />

              <motion.circle
                cx="250" cy="250" r="220"
                stroke="rgba(255,255,255,0.05)" strokeWidth="1"
                strokeDasharray="4 12" fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              />
              <motion.circle
                cx="250" cy="250" r="180"
                stroke="rgba(59,130,246,0.15)" strokeWidth="1" fill="none"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              />
            </svg>
          </motion.div>

          <motion.div
            className="hero-photo-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-photo-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/uploads/profile.jpeg" 
                alt="Arpan Singha" 
                className="hero-photo-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"; 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

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