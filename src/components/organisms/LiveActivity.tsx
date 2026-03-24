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
    <section className="py-24 px-6 w-full max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-white/25 font-light mb-3">
          Open Source
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.02em",
              lineHeight: 1,
              background: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.4))",
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
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 border-b border-white/10 pb-0.5 hover:text-white/70 hover:border-white/40 transition-all"
          >
            View all repos <ExternalLink size={10} />
          </a>
        </div>
        <p className="text-white/35 text-sm font-light mt-3 max-w-lg leading-relaxed">
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
                  bg-gradient-to-br from-white/[0.03] to-transparent
                  border border-white/[0.06]
                  backdrop-blur-sm rounded-2xl
                  transition-all duration-500
                  hover:border-white/[0.14] hover:bg-white/[0.05]
                  hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40
                "
              >
                {/* Top accent line that slides in on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-white/80 group-hover:text-white transition-colors tracking-wide">
                    {repo.name}
                  </CardTitle>
                  <CardDescription className="text-white/30 text-xs leading-relaxed line-clamp-2 mt-1">
                    {repo.description || "No description provided."}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex items-end pt-0">
                  <div className="flex items-center gap-4 text-xs text-white/25 w-full pt-3 border-t border-white/[0.05]">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: LANG_COLORS[repo.language] || "#888" }}
                        />
                        <span className="text-white/40">{repo.language}</span>
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
    </section>
  );
}
