"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Computer, Globe } from "lucide-react";
import { useRef } from "react";
import Magnetic from "@/components/Magnetic";

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
    title: "Hyperlocal Hiring Network",
    description: "A comprehensive MERN stack application for local job discovery and application management, featuring JWT authentication and Cloudinary image handling.",
    tags: ["MERN Stack", "Node.js", "MongoDB", "Auth"],
    link: "https://hyperlocal-hiring-network.vercel.app/",
    github: "https://github.com/arpansingha7/Hyperlocal-Hiring-Network",
    accent: "#6366f1",
  },
];

function ProjectRow({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on touch devices/small screens
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
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
          border-top: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.3s;
          user-select: none;
        }
        .project-row:last-child { border-bottom: 1px solid var(--border); }

        .project-row::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, var(--accent) 5%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-row:hover::before { opacity: 0.05; }

        .proj-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          color: var(--muted-foreground);
          padding-top: 0.25rem;
          opacity: 0.6;
        }

        .proj-body { display: flex; flex-direction: column; gap: 0.75rem; z-index: 1; }

        .proj-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          letter-spacing: 0.02em;
          background: linear-gradient(to right, var(--foreground), var(--muted-foreground));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          transition: all 0.3s ease;
        }
        .project-row:hover .proj-title { 
          background: linear-gradient(to right, var(--foreground), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transform: translateX(10px);
        }

        .proj-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--muted-foreground);
          max-width: 520px;
          transition: color 0.25s;
        }
        .project-row:hover .proj-desc { color: var(--foreground); }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .proj-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          border: 1px solid var(--border);
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
          transition: all 0.25s;
        }
        .project-row:hover .proj-tag {
          border-color: var(--muted-foreground);
          color: var(--foreground);
        }

        .proj-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          padding-top: 0.15rem;
          flex-shrink: 0;
          z-index: 2;
        }

        .proj-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          transition: all 0.22s;
          white-space: nowrap;
        }
        .proj-action-btn.primary {
          background: var(--foreground);
          color: var(--background);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .proj-action-btn.primary:hover { opacity: 0.9; transform: scale(1.05); }

        .proj-action-btn.ghost {
          border: 1px solid var(--border);
          color: var(--muted-foreground);
        }
        .proj-action-btn.ghost:hover {
          border-color: var(--foreground);
          color: var(--foreground);
          transform: scale(1.05);
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
            grid-template-columns: 2.2rem 1fr;
            gap: 1.25rem;
            padding: 1.75rem 0;
          }
          .proj-actions {
            grid-column: 2;
            flex-direction: row;
            justify-content: flex-start;
            gap: 0.6rem;
            margin-top: 0.5rem;
          }
          .proj-action-btn {
            padding: 0.45rem 0.85rem;
            font-size: 0.6rem;
          }
          .proj-desc {
            font-size: 0.78rem;
            line-height: 1.6;
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
        {project.link !== "#" && (
          <Magnetic>
            <a href={project.link} className="proj-action-btn primary" target="_blank" rel="noopener noreferrer">
              Live <ArrowUpRight size={11} strokeWidth={2} />
            </a>
          </Magnetic>
        )}
        <Magnetic>
          <a href={project.github} className="proj-action-btn ghost" target="_blank" rel="noopener noreferrer">
            <Computer size={11} /> Code
          </a>
        </Magnetic>
      </div>
    </motion.div>
  );
}

export function ProjectList() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="projects" style={{ padding: "8rem 0", background: "var(--background)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');
        .projects-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        @media (max-width: 640px) {
          .projects-wrap { padding: 0 1.5rem; }
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
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          opacity: 0.7;
          margin-bottom: 0.8rem;
        }
        .projects-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          letter-spacing: 0.01em;
          line-height: 0.92;
          background: linear-gradient(135deg, var(--foreground) 0%, var(--muted-foreground) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .projects-heading span {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .projects-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.7;
          color: var(--muted-foreground);
          max-width: 300px;
          text-align: right;
        }
        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          padding-bottom: 2px;
          transition: all 0.2s;
          margin-top: 0.75rem;
        }
        .view-all-btn:hover { color: var(--foreground); border-color: var(--foreground); }

        @media (max-width: 640px) {
          .projects-sub, .view-all-btn { text-align: left; }
          .projects-header { 
            flex-direction: column; 
            align-items: flex-start; 
            margin-bottom: 2.5rem;
            gap: 1.25rem;
          }
          .projects-sub { max-width: 100%; text-align: left; }
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