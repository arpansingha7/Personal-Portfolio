"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    type: "work",
    title: "Software Engineering Intern",
    organization: "Tech Startup",
    date: "2023 - Present",
    description: "Developing scalable microservices using Node.js and React. Optimized database queries improving performance by 30%.",
    icon: <Briefcase size={16} />,
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "Parul University",
    date: "2021 - 2025",
    description: "Focusing on AI, Machine Learning, and Cloud Computing. Active member of the coding club.",
    icon: <GraduationCap size={16} />,
  },
  {
    type: "education",
    title: "Data Science Certification",
    organization: "IIT Madras",
    date: "2022 - 2023",
    description: "Comprehensive coursework in Data Structures, Machine Learning algorithms, and Python programming.",
    icon: <GraduationCap size={16} />,
  }
];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="timeline-section relative py-32 bg-background overflow-hidden">
      <style>{`
        .timeline-section {
          padding: 8rem 0;
          background: var(--background);
        }

        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2.5rem;
          position: relative;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .timeline-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin-bottom: 0.8rem;
          display: block;
        }

        .timeline-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 5rem);
          letter-spacing: 0.02em;
          line-height: 1;
          background: linear-gradient(135deg, var(--foreground) 0%, var(--muted-foreground) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .timeline-line-bg {
          position: absolute;
          left: 50px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.05);
        }

        .timeline-item {
          position: relative;
          padding-left: 100px;
          margin-bottom: 4rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-icon {
          position: absolute;
          left: 36px;
          top: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--nav-bg);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--foreground);
          box-shadow: 0 0 15px rgba(0,0,0,0.5);
          z-index: 10;
        }

        .timeline-content {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.15);
        }

        .timeline-content:hover::before {
          opacity: 1;
        }

        .timeline-date {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin-bottom: 1rem;
          background: rgba(255,255,255,0.05);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
        }

        .timeline-role {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: var(--foreground);
          line-height: 1.1;
          margin-bottom: 0.2rem;
        }

        .timeline-org {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .timeline-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--muted-foreground);
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .timeline-container { padding: 0 1.5rem; }
          .timeline-line-bg { left: 30px; }
          .timeline-icon { left: 16px; }
          .timeline-item { padding-left: 60px; }
          .timeline-content { padding: 1.5rem; }
        }
      `}</style>

      <div className="timeline-container">
        <div className="timeline-header">
          <span className="timeline-eyebrow">My Journey</span>
          <h2 className="timeline-title">Experience & Education</h2>
        </div>

        <div className="relative">
          <div className="timeline-line-bg" />
          <motion.div 
            className="absolute left-[50px] md:left-[50px] max-md:left-[30px] top-0 w-[2px] bg-gradient-to-b from-blue-500 to-emerald-400 origin-top z-0" 
            style={{ height: lineHeight }} 
          />

          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="timeline-icon">
                {exp.icon}
              </div>
              
              <div 
                className="timeline-content"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="timeline-date">
                  <Calendar size={12} /> {exp.date}
                </div>
                <h3 className="timeline-role">{exp.title}</h3>
                <div className="timeline-org">{exp.organization}</div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
