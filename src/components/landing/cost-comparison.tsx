"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  Scale,
  X,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

/* ── animation variants ─────────────────────────────────────────── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ── line item ──────────────────────────────────────────────────── */

function LineItem({
  children,
  included,
}: {
  children: React.ReactNode;
  included: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5 text-sm">
      {included ? (
        <Check className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" />
      ) : (
        <X className="h-4 w-4 mt-0.5 shrink-0 text-red-400/60" />
      )}
      <span className={cn(!included && "text-muted-foreground/60")}>
        {children}
      </span>
    </div>
  );
}

/* ── benefit card ───────────────────────────────────────────────── */

function BenefitCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={fadeUp} className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
        <Icon className="h-4 w-4 text-emerald-400" />
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── main component ──────────────────────────────────────────────── */

export function CostComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeader
        title="The Real Cost of Supabase"
        subtitle="Supabase Pro + Medium compute = $75/project/month. A Hetzner VPS runs unlimited projects for $7.59."
      />

      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {/* ── Supabase card (dimmed) ─────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 opacity-70"
          >
            <div className="mb-4">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-1">
                Supabase Pro + Medium
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold line-through decoration-red-400/40">
                  $75
                </span>
                <span className="text-muted-foreground">/project/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                $25 plan + $60 compute − $10 credit. Plus usage overages.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
              <LineItem included={false}>
                3 environments = $225/month
              </LineItem>
              <LineItem included={false}>
                250 GB egress, then $0.09/GB
              </LineItem>
              <LineItem included={false}>
                8 GB storage, then $0.125/GB
              </LineItem>
              <LineItem included={false}>
                Self-host = 15+ containers per env
              </LineItem>
              <LineItem included={false}>
                Free plan pauses after 1 week
              </LineItem>
            </div>
          </motion.div>

          {/* ── Dupabase card (highlighted) ─────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.03] p-6 shadow-[0_0_40px_-12px_rgba(16,185,129,0.15)] relative overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-500/[0.04] to-transparent" />

            <div className="relative mb-4">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/70 mb-1">
                Dupabase + Hetzner CPX22
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-emerald-400">
                  $7.59
                </span>
                <span className="text-muted-foreground">/month total</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                2 vCPU, 4 GB RAM, 80 GB NVMe. Unlimited projects.
              </p>
            </div>

            <div className="relative space-y-2.5 pt-4 border-t border-emerald-500/15">
              <LineItem included>
                Unlimited projects on 1 server
              </LineItem>
              <LineItem included>
                20 TB traffic included (80x more)
              </LineItem>
              <LineItem included>
                80 GB NVMe storage included
              </LineItem>
              <LineItem included>
                Single binary — no container sprawl
              </LineItem>
              <LineItem included>
                Never pauses. Always on.
              </LineItem>
            </div>
          </motion.div>
        </motion.div>

        {/* ── scale comparison ──────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
          }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 overflow-x-auto"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3">
              At scale — Supabase is 10-40x more expensive
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-2 text-muted-foreground font-medium">RAM</th>
                  <th className="text-left py-2 text-muted-foreground font-medium">Supabase/mo</th>
                  <th className="text-left py-2 text-emerald-400/70 font-medium">Hetzner/mo</th>
                  <th className="text-right py-2 text-muted-foreground font-medium">Premium</th>
                </tr>
              </thead>
              <tbody className="font-mono text-xs">
                {[
                  { ram: "4 GB", supa: "$75", hetz: "$7.59", mult: "~10x" },
                  { ram: "8 GB", supa: "$135", hetz: "$12.59", mult: "~11x" },
                  { ram: "16 GB", supa: "$235", hetz: "$22.59", mult: "~10x" },
                  { ram: "32 GB", supa: "$435", hetz: "$43.59", mult: "~10x" },
                  { ram: "64 GB", supa: "$985", hetz: "~$39", mult: "~25x" },
                  { ram: "128 GB", supa: "$1,895", hetz: "~$70", mult: "~27x" },
                ].map((row) => (
                  <tr key={row.ram} className="border-b border-white/[0.04]">
                    <td className="py-1.5">{row.ram}</td>
                    <td className="py-1.5 text-muted-foreground/60">{row.supa}</td>
                    <td className="py-1.5 text-emerald-400">{row.hetz}</td>
                    <td className="py-1.5 text-right text-muted-foreground">{row.mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] text-muted-foreground/40 mt-2">
              Supabase = Pro $25 + compute − $10 credit, per project. Hetzner = flat rate, unlimited projects. 64+ GB from dedicated server auction.
            </p>
          </motion.div>
        </motion.div>

        {/* ── migration benefits ────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <BenefitCard
            icon={Code2}
            title="Zero code changes"
            description="@supabase/supabase-js works unchanged. Just swap the URL."
          />
          <BenefitCard
            icon={Layers}
            title="3 envs, 1 server"
            description="Dev, staging, and production as multi-tenant projects."
          />
          <BenefitCard
            icon={Database}
            title="BYO PostgreSQL"
            description="Bring your own database. We're just the API layer."
          />
          <BenefitCard
            icon={Scale}
            title="MIT licensed"
            description="Fork it, modify it, deploy it. No vendor lock-in."
          />
        </motion.div>
      </div>
    </section>
  );
}
