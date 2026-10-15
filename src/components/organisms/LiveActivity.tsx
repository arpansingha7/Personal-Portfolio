import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, GitBranch, ExternalLink, GitFork, Clock, FolderGit2 } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  language: string | null;
  default_branch: string;
  fork: boolean;
  pushed_at: string;
  topics?: string[];
};

type EnrichedRepo = {
  id: number;
  name: string;
  displayName: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
  default_branch: string;
  fork: boolean;
  pushed_at: string;
  topics: string[];
  priority: number;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
};

interface RepoMetadata {
  title: string;
  description: string;
  language: string;
  topics: string[];
  priority: number;
  hide?: boolean;
}

const REPO_REGISTRY: Record<string, RepoMetadata> = {
  "Personal-Portfolio": {
    title: "Personal Portfolio v2",
    description: "Modern developer portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, and AI assistant.",
    language: "TypeScript",
    topics: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    priority: 100,
  },
  "Production-AI-Research-Agent": {
    title: "Production AI Research Agent",
    description: "Autonomous multi-agent research workflow synthesizing web data and scientific publications with structured citation validation via LangChain.",
    language: "Python",
    topics: ["LangChain", "AI Agents", "LLMs", "Research Agent"],
    priority: 95,
  },
  "google-adk-workshop-iitm": {
    title: "Google ADK Multi-Agent System",
    description: "Google Agent Development Kit (ADK) — Personal AI Assistant & SmartStudy Multi-Agent Planner built for IIT Madras workshop.",
    language: "Python",
    topics: ["Google ADK", "Agentic AI", "IIT Madras", "Multi-Agent"],
    priority: 90,
  },
  "VitaCare-Health-Portal": {
    title: "VitaCare Health Portal",
    description: "Full-stack hospital management system with patient records, doctor scheduling, Chart.js analytics, and role-based access control.",
    language: "Python",
    topics: ["Python", "Flask", "SQLite", "Chart.js", "RBAC"],
    priority: 85,
  },
  "NextGen-Campus-Placement-Portal": {
    title: "NextGen Placement Portal",
    description: "Centralized campus recruitment platform connecting students and recruiters with live dashboards, job listings, and verified workflows.",
    language: "Python",
    topics: ["Python", "Flask", "Job Portal", "Recruitment"],
    priority: 80,
  },
  "SkillBridge": {
    title: "SkillBridge Marketplace",
    description: "AI-Powered Micro-Skill Marketplace connecting talented individuals with community opportunities, project discovery, and peer collaboration.",
    language: "TypeScript",
    topics: ["React", "Skill Sharing", "Community", "AI Matching"],
    priority: 75,
  },
  "Hyperlocal-Hiring-Network": {
    title: "Hyperlocal Hiring Network",
    description: "Localized job discovery and application platform built on the MERN stack with JWT authentication, Cloudinary media, and real-time feeds.",
    language: "JavaScript",
    topics: ["MERN Stack", "Node.js", "MongoDB", "JWT Auth"],
    priority: 70,
  },
  "AgriMandi": {
    title: "AgriMandi Platform",
    description: "Agri-tech marketplace facilitating fair price discovery, direct farm-to-buyer transactions, and real-time crop market listings.",
    language: "JavaScript",
    topics: ["Agri-Tech", "Marketplace", "Full-Stack", "REST API"],
    priority: 65,
  },
  "Advanced-ML-Classification-Pipeline": {
    title: "Advanced ML Pipeline",
    description: "End-to-end machine learning classification pipeline with feature engineering, hyperparameter optimization, and model evaluation suites.",
    language: "Python",
    topics: ["Machine Learning", "Scikit-Learn", "Pipeline", "Analytics"],
    priority: 60,
  },
  "Indic-Swipe-v2": {
    title: "Indic Swipe v2 Keyboard",
    description: "Multilingual swipe keyboard and input method supporting Indian Indic scripts for intuitive mobile text entry.",
    language: "Java",
    topics: ["Android", "Indic Scripts", "NLP", "Mobile Input"],
    priority: 55,
  },
  "voiz_intern_assignment": {
    title: "Voiz NLP & Voice Pipeline",
    description: "Voice processing, audio transcription, and NLP content generation pipeline built during internship at Voiz.",
    language: "Python",
    topics: ["NLP", "Voice AI", "Audio Processing", "Python"],
    priority: 50,
  },
  "RTMS": {
    title: "Real-Time Monitoring System",
    description: "Telemetry and metrics collection system for streaming event monitoring and analytics processing.",
    language: "Python",
    topics: ["Telemetry", "Real-Time", "Data Pipeline", "Python"],
    priority: 45,
  },
  // Excluded from showcase:
  "arpansingha7": {
    title: "Profile Config",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "ankan-site": {
    title: "Site Preview",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "ars-demo": {
    title: "Demo",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "EPJ_PRACTICALS": {
    title: "College Practicals",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "skills": {
    title: "Agent Skills Fork",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "30-days-30-apps": {
    title: "30 Days 30 Apps",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "strands-agents-workshop": {
    title: "Strands Agents",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "Questionnaire": {
    title: "Questionnaire",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "Spec-Driven-Unit-Converter": {
    title: "Unit Converter",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
  "advanced-rag": {
    title: "Advanced RAG Notebooks",
    description: "",
    language: "",
    topics: [],
    priority: 0,
    hide: true,
  },
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python:     "#3b82f6",
  React:      "#61dafb",
  Rust:       "#dea584",
  Go:         "#00ADD8",
  Java:       "#e76f51",
  "C++":      "#f34b7d",
  C:          "#555555",
  Shell:      "#89e051",
  HTML:       "#e34c26",
  CSS:        "#563d7c",
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

const FALLBACK_REPOS: EnrichedRepo[] = [
  {
    id: 100,
    name: "Personal-Portfolio",
    displayName: "Personal Portfolio v2",
    description: "Modern developer portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, and AI assistant.",
    stargazers_count: 3,
    html_url: "https://github.com/arpansingha7/Personal-Portfolio",
    language: "TypeScript",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 0).toISOString(),
    topics: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
    priority: 100,
  },
  {
    id: 101,
    name: "Production-AI-Research-Agent",
    displayName: "Production AI Research Agent",
    description: "Autonomous multi-agent research workflow synthesizing web data and scientific publications with structured citation validation via LangChain.",
    stargazers_count: 5,
    html_url: "https://github.com/arpansingha7/Production-AI-Research-Agent",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    topics: ["LangChain", "AI Agents", "LLMs", "Research Agent"],
    priority: 95,
  },
  {
    id: 102,
    name: "google-adk-workshop-iitm",
    displayName: "Google ADK Multi-Agent System",
    description: "Google Agent Development Kit (ADK) — Personal AI Assistant & SmartStudy Multi-Agent Planner built for IIT Madras workshop.",
    stargazers_count: 4,
    html_url: "https://github.com/arpansingha7/google-adk-workshop-iitm",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    topics: ["Google ADK", "Agentic AI", "IIT Madras", "Multi-Agent"],
    priority: 90,
  },
  {
    id: 103,
    name: "VitaCare-Health-Portal",
    displayName: "VitaCare Health Portal",
    description: "Full-stack hospital management system with patient records, doctor scheduling, Chart.js analytics, and role-based access control.",
    stargazers_count: 3,
    html_url: "https://github.com/arpansingha7/VitaCare-Health-Portal",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 6).toISOString(),
    topics: ["Python", "Flask", "SQLite", "Chart.js"],
    priority: 85,
  },
  {
    id: 104,
    name: "NextGen-Campus-Placement-Portal",
    displayName: "NextGen Placement Portal",
    description: "Centralized campus recruitment platform connecting students and recruiters with live dashboards, job listings, and verified workflows.",
    stargazers_count: 2,
    html_url: "https://github.com/arpansingha7/NextGen-Campus-Placement-Portal",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 8).toISOString(),
    topics: ["Python", "Flask", "Job Portal", "Recruitment"],
    priority: 80,
  },
  {
    id: 105,
    name: "Hyperlocal-Hiring-Network",
    displayName: "Hyperlocal Hiring Network",
    description: "Localized job discovery and application platform built on the MERN stack with JWT authentication, Cloudinary media, and real-time feeds.",
    stargazers_count: 4,
    html_url: "https://github.com/arpansingha7/Hyperlocal-Hiring-Network",
    language: "JavaScript",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 12).toISOString(),
    topics: ["MERN Stack", "Node.js", "MongoDB", "JWT Auth"],
    priority: 70,
  },
];

const FALLBACK_USER: GitHubUser = {
  public_repos: 14,
  followers: 8,
  following: 12,
  login: "arpansingha7",
  avatar_url: "https://avatars.githubusercontent.com/u/arpansingha7",
};

function processRepos(rawRepos: Repo[]): EnrichedRepo[] {
  if (!rawRepos || rawRepos.length === 0) return FALLBACK_REPOS;

  const valid = rawRepos.filter((r) => {
    const meta = REPO_REGISTRY[r.name];
    if (meta?.hide) return false;
    const lower = r.name.toLowerCase();
    if (lower === "arpansingha7" || lower === "ankan-site" || lower === "ars-demo" || lower === "epj_practicals") return false;
    // Hide generic forks not in our registry
    if (r.fork && !meta) return false;
    return true;
  });

  if (valid.length === 0) return FALLBACK_REPOS;

  const enriched: EnrichedRepo[] = valid.map((r) => {
    const meta = REPO_REGISTRY[r.name];
    const displayName = meta?.title || r.name.replace(/[-_]/g, " ");
    const language = meta?.language || r.language || "TypeScript";

    // Use curated description if raw description is missing or trivial
    const rawDesc = r.description?.trim();
    const hasGoodDesc = rawDesc && rawDesc.length > 15 && !rawDesc.toLowerCase().includes("first git repository");
    const description = hasGoodDesc ? rawDesc : (meta?.description || "Modern full-stack software and data engineering application.");

    const topics = (meta?.topics && meta.topics.length > 0)
      ? meta.topics
      : (r.topics && r.topics.length > 0)
      ? r.topics.slice(0, 4)
      : [language, "Open Source"];

    const priority = meta?.priority ?? 10;

    return {
      id: r.id,
      name: r.name,
      displayName,
      description,
      stargazers_count: r.stargazers_count,
      html_url: r.html_url,
      language,
      default_branch: r.default_branch || "main",
      fork: r.fork,
      pushed_at: r.pushed_at || new Date().toISOString(),
      topics,
      priority,
    };
  });

  // Sort by priority (higher first), then by pushed_at
  enriched.sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });

  return enriched.slice(0, 6);
}

async function getGitHubData() {
  try {
    const [reposRes, userRes] = await Promise.all([
      fetch("https://api.github.com/users/arpansingha7/repos?sort=updated&per_page=30", {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/users/arpansingha7", {
        next: { revalidate: 3600 },
      }),
    ]);
    const rawRepos = reposRes.ok ? ((await reposRes.json()) as Repo[]) : [];
    const user = userRes.ok ? ((await userRes.json()) as GitHubUser) : null;
    return { repos: processRepos(rawRepos), user };
  } catch {
    return { repos: FALLBACK_REPOS, user: null };
  }
}

export async function LiveActivity() {
  const data = await getGitHubData();
  const repos = data.repos && data.repos.length > 0 ? data.repos : FALLBACK_REPOS;
  const user = data.user || FALLBACK_USER;

  return (
    <section id="live" className="py-28 w-full" style={{ background: "var(--background)" }}>
      <div className="section-container">

        {/* Section header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live GitHub Sync
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap mb-3">
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              letterSpacing: "0.01em", lineHeight: 0.95,
              background: "linear-gradient(to right, var(--foreground), var(--muted-foreground))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Open Source & Code
            </h2>
            <a
              href="https://github.com/arpansingha7"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.68rem", fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--muted-foreground)", textDecoration: "none",
                borderBottom: "1px solid var(--border)", paddingBottom: "2px",
                transition: "all 0.2s",
              }}
              className="hover:text-foreground hover:border-muted-foreground"
            >
              View GitHub Profile <ExternalLink size={11} />
            </a>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7,
            color: "var(--muted-foreground)", maxWidth: "560px",
          }}>
            Real-time synchronization with GitHub — featured production repositories, agentic workflows, and active codebases.
          </p>
        </div>

        {/* GitHub User Stats Bar */}
        {user && (
          <div style={{
            display: "flex", gap: "2rem", flexWrap: "wrap",
            marginBottom: "2rem",
            padding: "1.2rem 1.8rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            alignItems: "center",
          }}>
            {[
              { label: "Public Repos", value: user.public_repos },
              { label: "Followers",    value: user.followers },
              { label: "Following",    value: user.following },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem", lineHeight: 1,
                  color: "var(--foreground)",
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.62rem", letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "var(--muted-foreground)",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem", fontWeight: 500,
                  color: "var(--foreground)", textDecoration: "none",
                  padding: "0.45rem 1.1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)", borderRadius: "999px",
                  transition: "all 0.2s",
                }}
                className="hover:border-muted-foreground/60 hover:bg-white/[0.08]"
              >
                @{user.login} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}

        {/* GitHub Contribution Activity */}
        <div style={{
          marginBottom: "2.5rem",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.015)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          <div className="flex items-center justify-between mb-3">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.64rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--muted-foreground)",
            }}>
              Contribution Activity
            </p>
            <span className="text-[10px] font-mono text-muted-foreground/50">
              Synced via GitHub API
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/22c55e/arpansingha7"
            alt="Arpan Singha GitHub contribution chart"
            style={{ width: "100%", borderRadius: "8px", opacity: 0.9 }}
          />
        </div>

        {/* Repo Cards — 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => {
            const langColor = LANG_COLORS[repo.language] || "#60a5fa";
            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full no-underline"
              >
                <Card className="
                  relative overflow-hidden h-full flex flex-col justify-between
                  bg-stat-card-bg border border-border/80
                  backdrop-blur-sm rounded-2xl p-5
                  transition-all duration-300
                  hover:border-muted-foreground/40 hover:bg-accent/40
                  hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/20
                  dark:hover:shadow-black/60
                ">
                  {/* Top accent line with language glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${langColor}, transparent)`,
                      boxShadow: `0 0 10px ${langColor}80`,
                    }}
                  />

                  {/* Top content */}
                  <div>
                    {/* Header row: Title + External Link */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <FolderGit2 className="w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors flex-shrink-0" />
                          <CardTitle className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors truncate">
                            {repo.displayName}
                          </CardTitle>
                        </div>
                        <p className="text-[11px] font-mono text-muted-foreground/50 truncate">
                          arpansingha7/{repo.name}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
                        {repo.fork && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider text-muted-foreground/70 bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.05]">
                            <GitFork size={9} /> fork
                          </span>
                        )}
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>

                    {/* Description */}
                    <CardDescription className="text-muted-foreground/75 text-xs leading-relaxed line-clamp-3 my-3 min-h-[3.3rem]">
                      {repo.description}
                    </CardDescription>

                    {/* Topics / Tech Chips */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="text-[10px] font-medium tracking-wide text-muted-foreground/70 bg-white/[0.03] border border-white/[0.06] rounded-md px-2 py-0.5"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer stats bar */}
                  <div className="pt-3 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground/60 w-full">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            background: langColor,
                            boxShadow: `0 0 6px ${langColor}80`,
                          }}
                        />
                        <span className="text-muted-foreground/80 font-medium text-[11px]">
                          {repo.language}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px]">
                        <Star className="h-3 w-3 text-muted-foreground/50" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px]">
                        <GitBranch className="h-3 w-3 text-muted-foreground/50" />
                        <span>{repo.default_branch || "main"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground/50">
                      <Clock className="h-3 w-3" />
                      <span>{timeAgo(repo.pushed_at)}</span>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
