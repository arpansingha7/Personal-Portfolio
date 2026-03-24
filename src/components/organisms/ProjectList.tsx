"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Computer } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    index: "01",
    title: "Hospital Management System",
    description: "A comprehensive healthcare administration platform built with Python and Flask, handling patient records, scheduling, and billing workflows.",
    tags: ["Python", "Flask", "SQLite"],
    link: "#",
    github: "https://github.com/arpansingha7",
    accent: "#3b82f6",
  },
  {
    index: "02",
    title: "Placement Portal App",
    description: "A centralized portal streamlining university placement and recruitment processes, connecting students with recruiters in real time.",
    tags: ["Python", "Flask", "Web"],
    link: "#",
    github: "https://github.com/arpansingha7",
    accent: "#34d399",
  },
  {
    index: "03",
    title: "Network Monitor",
    description: "IP Networking tool to monitor packets, analyze traffic patterns, and enforce cybersecurity baselines across local networks.",
    tags: ["Networking", "Python", "Cybersecurity"],
    link: "#",
    github: "https://github.com/arpansingha7",
    accent: "#a78bfa",
  },
];

function ProjectRow({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="project-row group"
    >
      <style>{`
        .project-row {
          position: relative;
          display: grid;
          grid-template-columns: 3.5rem 1fr auto;
          align-items: start;
          gap: 2rem;
          padding: 2.2rem 0;
          border-top: 1px solid rgba(255,255,255,0.07);
          cursor: pointer;
          transition: background 0.3s;
        }
        .project-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }

        .project-row::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-row:hover::before { opacity: 1; }

        .proj-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 300;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.22);
          padding-top: 0.25rem;
        }

        .proj-body { display: flex; flex-direction: column; gap: 0.75rem; }

        .proj-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          letter-spacing: 0.02em;
          background: linear-gradient(to right, rgba(255,255,255,0.85), rgba(255,255,255,0.4));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          transition: all 0.3s ease;
        }
        .project-row:hover .proj-title { 
          background: linear-gradient(to right, #fff, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateX(10px);
        }

        .proj-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.38);
          max-width: 520px;
          transition: color 0.25s;
        }
        .project-row:hover .proj-desc { color: rgba(255,255,255,0.55); }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .proj-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          transition: border-color 0.25s, color 0.25s;
        }
        .project-row:hover .proj-tag {
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.5);
        }

        .proj-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          padding-top: 0.15rem;
          flex-shrink: 0;
        }

        .proj-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          transition: all 0.22s;
          white-space: nowrap;
        }
        .proj-action-btn.primary {
          background: #fff;
          color: #0a0a0a;
        }
        .proj-action-btn.primary:hover { opacity: 0.85; transform: translateY(-1px); }

        .proj-action-btn.ghost {
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.45);
        }
        .proj-action-btn.ghost:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.8);
          transform: translateY(-1px);
        }

        /* Accent line that slides in on hover */
        .proj-accent-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          border-radius: 999px;
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: opacity 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .project-row:hover .proj-accent-line {
          opacity: 1;
          transform: scaleY(1);
        }

        @media (max-width: 640px) {
          .project-row {
            grid-template-columns: 2.5rem 1fr;
            grid-template-rows: auto auto;
          }
          .proj-actions {
            grid-column: 2;
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>

      {/* Accent line */}
      <div
        className="proj-accent-line"
        style={{ background: project.accent }}
      />

      {/* Number */}
      <span className="proj-num">{project.index}</span>

      {/* Body */}
      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="proj-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="proj-actions">
        <a href={project.link} className="proj-action-btn primary">
          Live <ArrowUpRight size={11} strokeWidth={2} />
        </a>
        <a href={project.github} className="proj-action-btn ghost" target="_blank" rel="noopener noreferrer">
          <Computer size={11} /> Code
        </a>
      </div>
    </motion.div>
  );
}

export function ProjectList() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="projects" style={{ padding: "8rem 0", background: "#0a0a0a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');
        .projects-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .projects-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.8rem;
        }
        .projects-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          letter-spacing: 0.01em;
          color: #fff;
          line-height: 0.92;
        }
        .projects-heading span {
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.25);
          color: transparent;
        }
        .projects-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.35);
          max-width: 300px;
          text-align: right;
        }
        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
          margin-top: 0.75rem;
        }
        .view-all-btn:hover { color: #fff; border-color: #fff; }

        @media (max-width: 640px) {
          .projects-sub, .view-all-btn { text-align: left; }
          .projects-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="projects-wrap">
        {/* Header */}
        <motion.div
          ref={headRef}
          className="projects-header"
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="projects-eyebrow">Selected Work</p>
            <h2 className="projects-heading">
              Featured<br /><span>Projects</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <p className="projects-sub">
              Scalable architecture and clean engineering — from data pipelines to full-stack web apps.
            </p>
            <a href="https://github.com/arpansingha7" className="view-all-btn" target="_blank" rel="noopener noreferrer">
              View all on GitHub <ArrowUpRight size={11} />
            </a>
          </div>
        </motion.div>

        {/* Project rows */}
        <div>
          {projects.map((project, idx) => (
            <ProjectRow key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}