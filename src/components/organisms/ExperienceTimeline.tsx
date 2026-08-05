"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Briefcase, GraduationCap, Calendar, ArrowUpRight,
  MapPin, Users, Bot, Mic, Cpu, Building2
} from "lucide-react";
import { useRef, useState } from "react";

type ExperienceItem = {
  type: "work" | "education" | "community";
  title: string;
  organization: string;
  location: string;
  date: string;
  isCurrent: boolean;
  description: string;
  highlights?: { icon: React.ReactNode; text: string }[];
  bullets: string[];
  tags: string[];
  link?: string;
  accent: string;
  icon: React.ReactNode;
};

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "AI Platform Engineering Intern",
    organization: "Predixion AI",
    location: "Mumbai, India",
    date: "May 2026 – Present",
    isCurrent: true,
    description: "Building a multi-tenant SaaS platform for loan collections that fuses an end-to-end Lead Management System (LMS) with AI-powered voice agents — automating borrower engagement at scale across multiple enterprise clients.",
    highlights: [
      { icon: <Bot size={13} />, text: "Agentic AI" },
      { icon: <Mic size={13} />, text: "Voice Agents" },
      { icon: <Building2 size={13} />, text: "CRM Integrations" },
      { icon: <Cpu size={13} />, text: "Multi-tenant SaaS" },
    ],
    bullets: [
      "Architecting an end-to-end Lead Management System (LMS) supporting client-specific collection workflows, custom business rules, and intelligent conversation flows",
      "Integrating AI-powered voice agents that automate outbound borrower engagement — handling follow-ups, reminders, and dynamic response handling via NLP pipelines",
      "Building agentic AI modules that autonomously adapt collection strategies based on borrower behavior, payment history, and real-time risk signals",
      "Developing CRM & business app connectors to seamlessly plug the platform into clients' existing operational infrastructure",
      "Designing multi-tenant configuration layers enabling organizations to personalize strategies, scripts, and escalation rules without code changes",
    ],
    tags: ["Agentic AI", "Voice Agents", "LMS", "SaaS", "NLP", "Speech Recognition", "CRM Integration", "Python"],
    link: "https://predixion.ai",
    accent: "#3b82f6",
    icon: <Briefcase size={15} />,
  },
  {
    type: "community",
    title: "Member",
    organization: "Gir House — IITM BS Degree",
    location: "IIT Madras (Online)",
    date: "Oct 2023 – Present",
    isCurrent: true,
    description: "Active member of the Gir House community within the IIT Madras BS program, collaborating with a nationwide network of data science and CS students.",
    bullets: [
      "Collaborating with peers on academic projects, study groups, and hackathons",
      "Participating in knowledge-sharing sessions on AI/ML and Data Science",
      "Contributing to community-driven open-source and research initiatives",
    ],
    tags: ["Community", "Data Science", "Research", "Collaboration", "IIT Madras"],
    link: "https://study.iitm.ac.in/ds/",
    accent: "#34d399",
    icon: <Users size={15} />,
  },
  {
    type: "education",
    title: "BS — Data Science & Applications",
    organization: "Indian Institute of Technology, Madras",
    location: "Chennai (Online)",
    date: "May 2023 – 2027",
    isCurrent: true,
    description: "Programming-first curriculum covering statistics, machine learning, data engineering, and applications — taught by IIT Madras faculty.",
    bullets: [
      "Foundations: Python, SQL, probability, linear algebra, statistics",
      "Applied ML: supervised/unsupervised learning, deep learning, data pipelines",
      "Real-world projects in predictive modeling and data visualization",
    ],
    tags: ["Python", "SQL", "Statistics", "Machine Learning", "Data Engineering"],
    link: "https://study.iitm.ac.in/ds/",
    accent: "#f59e0b",
    icon: <GraduationCap size={15} />,
  },
  {
    type: "education",
    title: "B.Tech — Computer Science Engineering",
    organization: "Parul University, Vadodara",
    location: "Vadodara, Gujarat",
    date: "Sep 2023 – Apr 2027",
    isCurrent: true,
    description: "Core CS curriculum focusing on algorithms, distributed systems, AI, cloud computing, software engineering, and networking.",
    bullets: [
      "Specializing in AI/ML and cloud-native software development",
      "Active coding club member — built multiple full-stack and ML projects",
      "Coursework: DSA, DBMS, OS, Computer Networks, AI, Software Engineering",
    ],
    tags: ["DSA", "AI/ML", "Cloud", "Software Engineering", "Networks", "Java"],
    link: "https://paruluniversity.ac.in/",
    accent: "#6366f1",
    icon: <GraduationCap size={15} />,
  },
  {
    type: "education",
    title: "Class 12 CBSE — PCM + Computer Science",
    organization: "Satish Chandra Memorial School",
    location: "India",
    date: "Jun 2020 – Jul 2022",
    isCurrent: false,
    description: "CBSE stream with Physics, Chemistry, Mathematics and Computer Science.",
    bullets: [
      "Scored 91.6% — CBSE Class 12",
      "Computer Science: C++, data structures, fundamentals of programming",
    ],
    tags: ["CBSE", "PCM", "Computer Science", "91.6%"],
    accent: "#a78bfa",
    icon: <GraduationCap size={15} />,
  },
  {
    type: "education",
    title: "Class 10 CBSE",
    organization: "Chakdaha Model School",
    location: "West Bengal, India",
    date: "Apr 2008 – Mar 2020",
    isCurrent: false,
    description: "CBSE foundation schooling with strong performance in mathematics and sciences.",
    bullets: ["Scored 91.6% — CBSE Class 10"],
    tags: ["CBSE", "91.6%"],
    accent: "#a78bfa",
    icon: <GraduationCap size={15} />,
  },
];

const FILTERS = [
  { key: "all",       label: "All",       count: experiences.length },
  { key: "work",      label: "Work",      count: experiences.filter(e => e.type === "work").length },
  { key: "education", label: "Education", count: experiences.filter(e => e.type === "education").length },
  { key: "community", label: "Community", count: experiences.filter(e => e.type === "community").length },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filtered = activeFilter === "all"
    ? experiences
    : experiences.filter((e) => e.type === activeFilter);

  return (
    <section id="experience" ref={containerRef} className="relative bg-background overflow-hidden">
      <style>{`
        .tl-section { padding: 8rem 0; }
        .experience-wrap { position: relative; }
        .tl-header { text-align: center; margin-bottom: 2.5rem; }
        .tl-eyebrow { font-family: 'DM Sans', sans-serif; font-size: 0.62rem; font-weight: 500; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted-foreground); margin-bottom: 0.75rem; display: block; }
        .tl-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 6vw, 5rem); letter-spacing: 0.02em; line-height: 1; background: linear-gradient(135deg, var(--foreground) 0%, var(--muted-foreground) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

        .tl-filters { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 4rem; flex-wrap: wrap; }
        .tl-filter-btn { font-family: 'DM Sans', sans-serif; font-size: 0.65rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.45rem 1.1rem; border-radius: 999px; border: 1px solid var(--border); color: var(--muted-foreground); background: transparent; cursor: pointer; transition: all 0.22s ease; display: inline-flex; align-items: center; gap: 0.4rem; }
        .tl-filter-btn:hover { border-color: rgba(255,255,255,0.2); color: var(--foreground); }
        .tl-filter-btn.active { background: var(--foreground); color: var(--background); border-color: var(--foreground); }
        .tl-filter-count { font-size: 0.55rem; background: rgba(255,255,255,0.15); padding: 0.05rem 0.4rem; border-radius: 999px; }
        .tl-filter-btn.active .tl-filter-count { background: rgba(0,0,0,0.2); }

        .tl-line-bg { position: absolute; left: 50px; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,0.05); }

        .tl-item { position: relative; padding-left: 104px; margin-bottom: 1.75rem; }
        .tl-item:last-child { margin-bottom: 0; }

        .tl-dot { position: absolute; left: 35px; top: 10px; width: 32px; height: 32px; border-radius: 50%; background: rgba(8,8,18,0.95); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 5px rgba(0,0,0,0.5); z-index: 10; transition: border-color 0.3s, box-shadow 0.3s; }
        .tl-item:hover .tl-dot { box-shadow: 0 0 0 5px rgba(0,0,0,0.5), 0 0 22px rgba(59,130,246,0.25); }

        .tl-card { background: rgba(255,255,255,0.018); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 1.75rem 2rem; position: relative; overflow: hidden; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, background 0.3s; }
        .tl-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.13); background: rgba(255,255,255,0.032); }
        .tl-card-glow { position: absolute; top: 0; left: 0; right: 0; height: 1px; opacity: 0; transition: opacity 0.35s; }
        .tl-card:hover .tl-card-glow { opacity: 1; }

        .tl-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 0.65rem; flex-wrap: wrap; }
        .tl-badges { display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; flex-shrink: 0; }
        .tl-date-badge { display: inline-flex; align-items: center; gap: 0.35rem; font-family: 'DM Sans', sans-serif; font-size: 0.62rem; font-weight: 500; letter-spacing: 0.08em; color: var(--muted-foreground); background: rgba(255,255,255,0.05); padding: 0.28rem 0.75rem; border-radius: 999px; }
        .tl-active-badge { display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'DM Sans', sans-serif; font-size: 0.58rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.22); padding: 0.22rem 0.65rem; border-radius: 999px; }
        .tl-active-dot { width: 5px; height: 5px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; animation: tl-blink 1.8s ease-in-out infinite; }
        @keyframes tl-blink { 0%,100%{opacity:1} 50%{opacity:0.35} }

        .tl-role { font-family: 'Bebas Neue', sans-serif; font-size: clamp(1.5rem, 2.5vw, 2rem); color: var(--foreground); line-height: 1.1; margin-bottom: 0.15rem; }
        .tl-org-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.8rem; flex-wrap: wrap; }
        .tl-org { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem; text-decoration: none; transition: opacity 0.2s; }
        .tl-org:hover { opacity: 0.8; }
        .tl-location { display: inline-flex; align-items: center; gap: 0.3rem; font-family: 'DM Sans', sans-serif; font-size: 0.72rem; color: var(--muted-foreground); }

        .tl-desc { font-family: 'DM Sans', sans-serif; font-size: 0.84rem; line-height: 1.65; color: var(--muted-foreground); font-weight: 300; margin-bottom: 1rem; }

        .tl-highlights { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1rem; }
        .tl-highlight-pill { display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'DM Sans', sans-serif; font-size: 0.68rem; font-weight: 500; color: #93c5fd; padding: 0.35rem 0.8rem; background: rgba(59,130,246,0.09); border: 1px solid rgba(59,130,246,0.22); border-radius: 999px; transition: all 0.2s; }
        .tl-card:hover .tl-highlight-pill { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.4); }

        .tl-bullets { list-style: none; padding: 0; margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.42rem; }
        .tl-bullet { display: flex; align-items: flex-start; gap: 0.55rem; font-family: 'DM Sans', sans-serif; font-size: 0.79rem; line-height: 1.6; color: var(--muted-foreground); font-weight: 300; }
        .tl-bullet-arrow { color: var(--muted-foreground); opacity: 0.4; font-size: 0.6rem; flex-shrink: 0; margin-top: 0.3rem; }

        .tl-tags { display: flex; flex-wrap: wrap; gap: 0.38rem; margin-top: 0.9rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.85rem; }
        .tl-tag { font-family: 'DM Sans', sans-serif; font-size: 0.58rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted-foreground); border: 1px solid rgba(255,255,255,0.07); padding: 0.18rem 0.6rem; border-radius: 999px; transition: all 0.2s; }
        .tl-card:hover .tl-tag { border-color: rgba(255,255,255,0.14); color: var(--foreground); }

        @media (max-width: 768px) {
          .tl-section { padding: 5rem 0; }
          .experience-wrap { padding: 0 1.5rem; }
          .tl-line-bg { left: 28px; }
          .tl-dot { left: 14px; width: 28px; height: 28px; }
          .tl-item { padding-left: 56px; }
          .tl-card { padding: 1.25rem; }
          .tl-title { font-size: clamp(2rem, 8vw, 2.5rem); }
        }
      `}</style>

      <div className="experience-bg-mesh" />

      <div className="experience-wrap section-container" ref={containerRef}>
          <motion.div className="tl-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="tl-eyebrow">My Journey</span>
            <h2 className="tl-title">Experience &amp; Education</h2>
          </motion.div>

          <motion.div className="tl-filters" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            {FILTERS.map((f) => (
              <button key={f.key} className={`tl-filter-btn${activeFilter === f.key ? " active" : ""}`} onClick={() => setActiveFilter(f.key)}>
                {f.label}
                <span className="tl-filter-count">{f.count}</span>
              </button>
            ))}
          </motion.div>

          <div className="relative">
            <div className="tl-line-bg" />
            <motion.div
              className="absolute top-0 w-[2px] bg-gradient-to-b from-blue-500 via-violet-400 to-emerald-400 origin-top z-0"
              style={{ height: lineHeight, left: "50px" }}
            />

            <AnimatePresence mode="popLayout">
              {filtered.map((exp, i) => (
                <motion.div
                  key={exp.organization + exp.title}
                  className="tl-item"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.48, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="tl-dot" style={{ borderColor: `${exp.accent}55`, color: exp.accent }}>
                    {exp.icon}
                  </div>

                  <div className="tl-card">
                    <div className="tl-card-glow" style={{ background: `linear-gradient(90deg, transparent, ${exp.accent}80, transparent)` }} />

                    <div className="tl-top">
                      <div>
                        <h3 className="tl-role">{exp.title}</h3>
                        <div className="tl-org-row">
                          {exp.link ? (
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="tl-org" style={{ color: exp.accent }}>
                              {exp.organization} <ArrowUpRight size={13} />
                            </a>
                          ) : (
                            <span className="tl-org" style={{ color: exp.accent }}>{exp.organization}</span>
                          )}
                          <span className="tl-location"><MapPin size={11} /> {exp.location}</span>
                        </div>
                      </div>
                      <div className="tl-badges">
                        <div className="tl-date-badge"><Calendar size={11} /> {exp.date}</div>
                        {exp.isCurrent && <div className="tl-active-badge"><span className="tl-active-dot" /> Active</div>}
                      </div>
                    </div>

                    <p className="tl-desc">{exp.description}</p>

                    {exp.highlights && (
                      <div className="tl-highlights">
                        {exp.highlights.map((h, hi) => (
                          <span key={hi} className="tl-highlight-pill">{h.icon} {h.text}</span>
                        ))}
                      </div>
                    )}

                    <ul className="tl-bullets">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="tl-bullet">
                          <span className="tl-bullet-arrow">▸</span>{b}
                        </li>
                      ))}
                    </ul>

                    <div className="tl-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tl-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
    </section>
  );
}
