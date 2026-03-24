import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, GitBranch } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
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

export async function LiveActivity() {
  const repos = await getRepos();

  return (
    <section className="px-6 w-full max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Live Open Source Sync</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Real-time updates dynamically fetched from GitHub via Next.js Server Components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="group block h-full">
            <Card className="bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-md border border-white/5 h-full flex flex-col hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group-hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{repo.name}</CardTitle>
                <CardDescription className="line-clamp-2">{repo.description || "No description provided."}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <div className="flex items-center gap-4 text-sm text-muted-foreground w-full pt-4 border-t border-foreground/5">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {repo.language}
                    </div>
                  )}
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="h-4 w-4" /> {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="h-4 w-4" /> Main
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
