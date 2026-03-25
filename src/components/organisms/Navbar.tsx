"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/organisms/ThemeToggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: padding 0.35s ease, background 0.35s ease;
        }
        .nav-root.scrolled {
          /* tighter when scrolled */
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 2.5rem;
          transition: padding 0.35s ease;
        }
        .nav-inner.scrolled {
          padding: 1rem 2.5rem;
          background: var(--nav-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--nav-border);
        }

        /* Logo */
        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          color: var(--foreground);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.15em;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 0.75; }
        .nav-logo-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: oklch(0.65 0.2 240);
          margin-left: 2px;
          margin-bottom: 6px;
          box-shadow: 0 0 8px rgba(59,130,246,0.3);
        }

        /* Center links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }
        .nav-link-item a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          text-decoration: none;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          display: block;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link-item a:hover {
          color: var(--foreground);
          background: var(--accent);
        }

        /* Right cluster */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Hire Me pill */
        .hire-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--primary-foreground);
          background: var(--primary);
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          white-space: nowrap;
          box-shadow: var(--card-shadow);
        }
        .hire-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .hire-btn:active { transform: scale(0.97); }

        .ping-dot {
          position: relative;
          display: inline-flex;
          width: 7px;
          height: 7px;
          flex-shrink: 0;
        }
        .ping-dot-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #22c55e;
          opacity: 0;
          animation: ping 1.4s cubic-bezier(0,0,0.2,1) infinite;
        }
        .ping-dot-core {
          position: relative;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        /* Theme toggle override */
        .theme-wrap button {
          color: var(--muted-foreground) !important;
          background: transparent !important;
          border: 1px solid var(--border) !important;
          transition: all 0.2s !important;
        }
        .theme-wrap button:hover {
          color: var(--foreground) !important;
          border-color: var(--muted-foreground) !important;
          background: var(--accent) !important;
        }

        /* Mobile menu button */
        .mob-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.2s;
        }
        .mob-toggle:hover { color: var(--foreground); }

        @media (max-width: 767px) {
          .nav-links { display: none; }
          .nav-inner .hire-btn { display: none; }
          .mob-toggle { display: flex; }
          .nav-inner { padding: 1.2rem 1.5rem; }
          .nav-inner.scrolled { padding: 0.8rem 1.5rem; }
        }

        /* Mobile drawer */
        .mob-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: var(--background);
          padding: 6rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 1000;
          box-shadow: -20px 0 60px rgba(0,0,0,0.15);
          border-left: 1px solid var(--border);
        }
        .mob-nav-link {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          color: var(--muted-foreground);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mob-nav-link:hover, .mob-nav-link.active { color: var(--foreground); }

        .mob-hire-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--foreground);
          color: var(--background);
          padding: 1rem;
          border-radius: 12px;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }

        .mob-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          z-index: 999;
        }

        [data-theme='light'] .mob-overlay {
          background: rgba(0,0,0,0.15);
        }
        .mob-close {
          position: absolute;
          top: 1.8rem;
          right: 2.2rem;
          background: none;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          transition: color 0.2s;
        }
        .mob-close:hover { color: var(--foreground); }

        /* Number labels on mobile links */
        .mob-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--muted-foreground);
          display: block;
          text-align: center;
          margin-bottom: -1rem;
        }
      `}</style>

      {/* Main nav */}
      <motion.header
        className={`nav-root${scrolled ? " scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`nav-inner${scrolled ? " scrolled" : ""}`}>

          {/* Logo */}
          <Link href="/" className="nav-logo">
            AS<span className="nav-logo-dot" />
          </Link>

          {/* Center links */}
          <nav>
            <ul className="nav-links">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  className="nav-link-item"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <div className="nav-right">
            <div className="theme-wrap">
              <ThemeToggle />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <Link href="/hire" className="hire-btn">
                <span className="ping-dot">
                  <span className="ping-dot-ring" />
                  <span className="ping-dot-core" />
                </span>
                Hire Me
                <ArrowUpRight size={11} strokeWidth={2} />
              </Link>
            </motion.div>

            {/* Mobile toggle */}
            <button
              className="mob-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mob-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mob-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                className="mob-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
    
              {NAV_LINKS.map((link, i) => (
                <div key={link.href} style={{ textAlign: "left" }}>
                  <span className="mob-num" style={{ textAlign: "left", marginBottom: "0.25rem" }}>0{i + 1}</span>
                  <Link 
                    href={link.href} 
                    className="mob-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
    
              <Link
                href="/hire"
                className="hire-btn"
                onClick={() => setMobileOpen(false)}
                style={{ marginTop: "1rem" }}
              >
                <span className="ping-dot">
                  <span className="ping-dot-ring" />
                  <span className="ping-dot-core" />
                </span>
                Hire Me
                <ArrowUpRight size={11} strokeWidth={2} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}