import {
  Puzzle,
  Server,
  Shield,
  Users,
  LayoutDashboard,
  Upload,
  Key,
  Database,
  HardDrive,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "./section-header";

const features = [
  {
    icon: Puzzle,
    title: "Drop-in Replacement",
    description:
      "Works with the official @supabase/supabase-js client. Zero code changes needed.",
  },
  {
    icon: Server,
    title: "Single Binary",
    description:
      "One Go binary + PostgreSQL. No microservice sprawl, no 15 Docker containers.",
  },
  {
    icon: Shield,
    title: "Self-Hosted",
    description:
      "Your data stays on your infrastructure. Full control, full privacy.",
  },
  {
    icon: Users,
    title: "Multi-Tenant",
    description:
      "Multiple projects per user, each with isolated databases and API keys.",
  },
  {
    icon: LayoutDashboard,
    title: "Full Dashboard",
    description:
      "Modern Next.js dashboard for managing projects, keys, backups, imports, and settings.",
  },
  {
    icon: HardDrive,
    title: "S3 Backups",
    description:
      "Scheduled backups to S3-compatible storage with per-project selection and retention policies.",
  },
  {
    icon: Upload,
    title: "Database Import",
    description:
      "Import pg_dump files from existing Supabase projects with drag-and-drop.",
  },
  {
    icon: Key,
    title: "Auth Built-in",
    description:
      "GoTrue-compatible authentication with JWT, signup, login, and token rotation.",
  },
  {
    icon: Database,
    title: "REST API",
    description:
      "PostgREST-compatible REST for CRUD, filtering, ordering, pagination, and RPC.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeader
        id="features"
        title="Everything You Need"
        subtitle="A complete backend platform that works with the tools you already know."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <Card
            key={f.title}
            className="group transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <CardContent className="pt-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
