import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Users, GitPullRequest, Github } from "lucide-react";

const cards = [
  {
    icon: Scale,
    title: "MIT License",
    description: "Use, modify, and distribute freely. No restrictions.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join discussions, report issues, suggest features.",
  },
  {
    icon: GitPullRequest,
    title: "Contribute",
    description: "PRs welcome. Check the contributing guide to get started.",
  },
];

export function OpenSource() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Open Source. Always.
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
        MIT licensed. Free forever. Built by the community, for the community.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
        {cards.map((c) => (
          <Card key={c.title}>
            <CardContent className="pt-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button size="lg" asChild>
        <a
          href="https://github.com/ansoraGROUP/dupabase"
          target="_blank"
          rel="noopener"
        >
          <Github className="mr-2 h-4 w-4" />
          Star on GitHub
        </a>
      </Button>
    </section>
  );
}
