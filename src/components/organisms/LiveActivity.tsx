import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, GitBranch, ExternalLink } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
  default_branch: string;
};

async function getRepos() {
  try {
    const res = await fetch("https://api.github.com/users/arpansingha7/repos?sort=updated&per_page=3", {
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return (await res.json()) as Repo[];
  } catch (_error) {
    return [];
  }
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
};

export async function LiveActivity() {
  const repos = await getRepos();

  return (
    <section className="py-28 w-full" style={{ background: "#0a0a0a" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Section header */}
        <div className="mb-12">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 300,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "0.75rem",
            }}
          >
            Open Source
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                letterSpacing: "0.01em",
                lineHeight: 0.95,
                background: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.35))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Live GitHub Sync
            </h2>
            <a
              href="https://github.com/arpansingha7"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              className="hover:text-white/70 hover:[border-color:rgba(255,255,255,0.4)]"
            >
              View all repos <ExternalLink size={10} />
            </a>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.32)",
              marginTop: "0.75rem",
              maxWidth: "480px",
            }}
          >
            Real-time data fetched directly from GitHub via Next.js Server Components.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {repos.length === 0 ? (
            Array.from({ length: 3 }).map((_, i) => (
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
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card
                  className="
                    relative overflow-hidden h-full flex flex-col
                    bg-gradient-to-br from-white/[0.04] to-transparent
                    border border-white/[0.07]
                    backdrop-blur-sm rounded-2xl
                    transition-all duration-500
                    hover:border-white/[0.16] hover:bg-white/[0.06]
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50
                  "
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="pb-2 pt-5 px-5">
                    <CardTitle className="text-sm font-medium text-white/75 group-hover:text-white transition-colors tracking-wide leading-snug">
                      {repo.name}
                    </CardTitle>
                    <CardDescription className="text-white/30 text-xs leading-relaxed line-clamp-2 mt-1.5">
                      {repo.description || "No description provided."}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex items-end pt-0 px-5 pb-4">
                    <div className="flex items-center gap-4 text-xs text-white/25 w-full pt-3 border-t border-white/[0.06]">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: LANG_COLORS[repo.language] || "#888" }}
                          />
                          <span className="text-white/45">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 ml-auto">
                        <Star className="h-3 w-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        <span>{repo.default_branch || "main"}</span>
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
