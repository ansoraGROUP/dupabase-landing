import {
  CheckCircle2,
  ShieldCheck,
  Infinity,
  DollarSign,
  Puzzle,
  Lock,
} from "lucide-react";
import { SectionHeader } from "./section-header";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Full data sovereignty",
    description: "Your data lives on your servers, under your control.",
  },
  {
    icon: Lock,
    title: "No vendor lock-in",
    description: "MIT licensed. Fork it, modify it, deploy anywhere.",
  },
  {
    icon: Infinity,
    title: "Unlimited projects",
    description: "Create as many projects as you need. No artificial limits.",
  },
  {
    icon: DollarSign,
    title: "No usage-based pricing",
    description: "No surprise bills. Pay only for your infrastructure.",
  },
  {
    icon: Puzzle,
    title: "Custom PG extensions",
    description: "Install any PostgreSQL extension you need.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance ready",
    description: "GDPR, HIPAA — you control the infrastructure.",
  },
];

export function SelfHosted() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeader
        title="Why Self-Host?"
        subtitle="Own your backend. No limits, no surprises, no lock-in."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
              <b.icon className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="font-medium text-sm">{b.title}</p>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
