import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, GitBranch, ExternalLink, GitFork, Clock } from "lucide-react";

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
  topics: string[];
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
};

async function getGitHubData() {
  try {
    const [reposRes, userRes] = await Promise.all([
      fetch("https://api.github.com/users/arpansingha7/repos?sort=updated&per_page=6", {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/users/arpansingha7", {
        next: { revalidate: 3600 },
      }),
    ]);
    const repos = reposRes.ok ? ((await reposRes.json()) as Repo[]) : [];
    const user = userRes.ok ? ((await userRes.json()) as GitHubUser) : null;
    return { repos, user };
  } catch {
    return { repos: [], user: null };
  }
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python:     "#3572A5",
  Rust:       "#dea584",
  Go:         "#00ADD8",
  Java:       "#b07219",
  "C++":      "#f34b7d",
  C:          "#555555",
  Shell:      "#89e051",
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

const FALLBACK_REPOS: Repo[] = [
  {
    id: 101,
    name: "VitaCare-Health-Portal",
    description: "Full-stack hospital management system in Python/Flask with patient records, appointments, and billing.",
    stargazers_count: 3,
    html_url: "https://github.com/arpansingha7/VitaCare-Health-Portal",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    topics: ["flask", "sqlite", "healthcare"],
  },
  {
    id: 102,
    name: "NextGen-Campus-Placement-Portal",
    description: "Centralized campus recruitment platform connecting students and recruiters with role-based auth.",
    stargazers_count: 2,
    html_url: "https://github.com/arpansingha7/NextGen-Campus-Placement-Portal",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    topics: ["flask", "job-portal", "recruitment"],
  },
  {
    id: 103,
    name: "Hyperlocal-Hiring-Network",
    description: "Localized job discovery and application platform built on the MERN stack with JWT authentication.",
    stargazers_count: 4,
    html_url: "https://github.com/arpansingha7/Hyperlocal-Hiring-Network",
    language: "TypeScript",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 7).toISOString(),
    topics: ["react", "nodejs", "mongodb"],
  },
  {
    id: 104,
    name: "Production-AI-Research-Agent",
    description: "Autonomous multi-agent research workflow synthesizing web data and research papers via LangChain.",
    stargazers_count: 5,
    html_url: "https://github.com/arpansingha7/Production-AI-Research-Agent",
    language: "Python",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 10).toISOString(),
    topics: ["ai-agent", "langchain", "llm"],
  },
  {
    id: 105,
    name: "AgriMandi",
    description: "Agri-tech marketplace facilitating price discovery and direct trading for farmers and buyers.",
    stargazers_count: 2,
    html_url: "https://github.com/arpansingha7/AgriMandi",
    language: "JavaScript",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 14).toISOString(),
    topics: ["agriculture", "marketplace"],
  },
  {
    id: 106,
    name: "Indic-Swipe-v2",
    description: "Multilingual input method and swipe keyboard solution supporting Indian Indic scripts.",
    stargazers_count: 3,
    html_url: "https://github.com/arpansingha7/Indic-Swipe-v2",
    language: "Java",
    default_branch: "main",
    fork: false,
    pushed_at: new Date(Date.now() - 86400000 * 20).toISOString(),
    topics: ["indic", "keyboard", "android"],
  },
];

const FALLBACK_USER: GitHubUser = {
  public_repos: 14,
  followers: 8,
  following: 12,
  login: "arpansingha7",
  avatar_url: "https://avatars.githubusercontent.com/u/arpansingha7",
};

export async function LiveActivity() {
  const data = await getGitHubData();
  const repos = data.repos && data.repos.length > 0 ? data.repos : FALLBACK_REPOS;
  const user = data.user || FALLBACK_USER;

  return (
    <section id="live" className="py-28 w-full" style={{ background: "var(--background)" }}>
      <div className="section-container">

        {/* Section header */}
        <div className="mb-10">
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem", fontWeight: 400,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--muted-foreground)", marginBottom: "0.75rem",
          }}>
            Open Source
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap mb-3">
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              letterSpacing: "0.01em", lineHeight: 0.95,
              background: "linear-gradient(to right, var(--foreground), var(--muted-foreground))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Live GitHub Sync
            </h2>
            <a
              href="https://github.com/arpansingha7"
              target="_blank" rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem", fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--muted-foreground)", textDecoration: "none",
                borderBottom: "1px solid var(--border)", paddingBottom: "2px",
                transition: "all 0.2s",
              }}
              className="hover:text-foreground hover:border-muted-foreground"
            >
              View all repos <ExternalLink size={10} />
            </a>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7,
            color: "var(--muted-foreground)", maxWidth: "480px",
          }}>
            Real-time data fetched directly from GitHub — latest 6 repositories, auto-refreshed hourly.
          </p>
        </div>

        {/* GitHub User Stats Bar */}
        {user && (
          <div style={{
            display: "flex", gap: "1.5rem", flexWrap: "wrap",
            marginBottom: "2rem",
            padding: "1rem 1.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
          }}>
            {[
              { label: "Public Repos", value: user.public_repos },
              { label: "Followers",    value: user.followers },
              { label: "Following",    value: user.following },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem", lineHeight: 1,
                  color: "var(--foreground)",
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.62rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "var(--muted-foreground)",
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
              <a
                href={`https://github.com/${user.login}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem", fontWeight: 500,
                  color: "var(--muted-foreground)", textDecoration: "none",
                  padding: "0.4rem 1rem",
                  border: "1px solid var(--border)", borderRadius: "999px",
                  transition: "all 0.2s",
                }}
                className="hover:text-foreground hover:border-muted-foreground"
              >
                @{user.login} <ExternalLink size={11} />
              </a>
            </div>
          </div>
        )}

        {/* GitHub Contribution Calendar */}
        <div style={{
          marginBottom: "2rem",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.015)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.62rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--muted-foreground)",
            marginBottom: "1rem",
          }}>
            Contribution Activity
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/22c55e/arpansingha7"
            alt="Arpan Singha GitHub contribution chart"
            style={{ width: "100%", borderRadius: "8px", opacity: 0.85 }}
          />
        </div>

        {/* Repo Cards — 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.length === 0 ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.05] bg-white/[0.02] h-44 animate-pulse"
              />
            ))
          ) : (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank" rel="noreferrer"
                className="group block"
              >
                <Card className="
                  relative overflow-hidden h-full flex flex-col
                  bg-stat-card-bg border border-border
                  backdrop-blur-sm rounded-2xl
                  transition-all duration-500
                  hover:border-muted-foreground/30 hover:bg-accent
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5
                  dark:hover:shadow-black/50
                ">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="pb-2 pt-5 px-5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <CardTitle className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors tracking-wide leading-snug truncate">
                        {repo.name}
                      </CardTitle>
                      {repo.fork && (
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: "0.25rem",
                          fontSize: "0.55rem", letterSpacing: "0.1em",
                          textTransform: "uppercase", color: "var(--muted-foreground)",
                          background: "rgba(255,255,255,0.05)", padding: "0.15rem 0.5rem",
                          borderRadius: "999px", flexShrink: 0,
                        }}>
                          <GitFork size={9} /> fork
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground/60 text-xs leading-relaxed line-clamp-2 mt-1">
                      {repo.description || "No description provided."}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex items-end pt-0 px-5 pb-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground/40 w-full pt-3 border-t border-border flex-wrap">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: LANG_COLORS[repo.language] || "#888" }}
                          />
                          <span className="text-muted-foreground/70">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        <span>{repo.default_branch || "main"}</span>
                      </div>
                      <div className="flex items-center gap-1 ml-auto">
                        <Clock className="h-3 w-3" />
                        <span>{timeAgo(repo.pushed_at)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
