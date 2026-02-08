import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute top-40 right-1/4 h-[250px] w-[250px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40 text-center">
        <Badge variant="secondary" className="mb-6 text-sm">
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          Open Source &middot; MIT License
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Your Supabase. Your Server.
          <br />
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            A Fraction of the Cost.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Supabase-compatible middleware for your own PostgreSQL.
          <br className="hidden sm:block" />
          <code className="text-green-400 text-foreground/80">$7.59/month</code> on Hetzner instead of <code className="text-red-400 text-foreground/80">$75+/project</code>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href="#quickstart">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/ansoraGROUP/dupabase"
              target="_blank"
              rel="noopener"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="mt-16 mx-auto max-w-xl rounded-lg border bg-card/50 p-4 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/20" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
              <div className="h-3 w-3 rounded-full bg-green-500/20" />
            </div>
            <span>terminal</span>
          </div>
          <code className="text-muted-foreground">
            <span className="text-green-400">$</span> git clone
            https://github.com/ansoraGROUP/dupabase.git
            <br />
            <span className="text-green-400">$</span> cd dupabase && make up
            <br />
            <span className="text-muted-foreground/50">
              # Hetzner CPX22 ($7.59/mo) + Dupabase = full Supabase API
            </span>
          </code>
        </div>
      </div>
    </section>
  );
}
