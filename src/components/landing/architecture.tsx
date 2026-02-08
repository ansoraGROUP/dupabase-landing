"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Binary,
  Cpu,
  Lock,
  HardDrive,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

/* ── animation variants ─────────────────────────────────────────── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const drawLine = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ── sub-components ─────────────────────────────────────────────── */

function Chip({
  children,
  accent,
  dashed,
}: {
  children: React.ReactNode;
  accent?: boolean;
  dashed?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-mono leading-5",
        accent
          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          : "bg-white/[0.04] text-muted-foreground border border-white/[0.08]",
        dashed && "border-dashed"
      )}
    >
      {children}
    </span>
  );
}

function Connector() {
  return (
    <motion.div
      variants={drawLine}
      style={{ originY: 0 }}
      className="relative mx-auto flex h-10 w-px items-center justify-center"
    >
      {/* line */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/40 via-emerald-500/25 to-emerald-500/10 rounded-full" />
      {/* pulse dot */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_1px_rgba(16,185,129,0.5)]"
        animate={{ y: [-16, 16], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

function ArchNode({
  icon: Icon,
  title,
  subtitle,
  glow,
  className,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  glow?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "relative rounded-xl border backdrop-blur-sm p-5 transition-colors",
        glow
          ? "border-emerald-500/25 bg-emerald-500/[0.03] shadow-[0_0_40px_-12px_rgba(16,185,129,0.15)]"
          : "border-white/[0.08] bg-white/[0.02]",
        className
      )}
    >
      {/* subtle inner glow for hero node */}
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-500/[0.04] to-transparent" />
      )}

      <div className="relative flex items-center gap-3 mb-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
            glow
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-white/[0.06] text-muted-foreground"
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <div>
          <h4 className="font-semibold text-sm leading-tight">{title}</h4>
          {subtitle && (
            <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="relative">{children}</div>
    </motion.div>
  );
}

/* ── stat cards ──────────────────────────────────────────────────── */

const stats = [
  {
    icon: Binary,
    title: "Single Binary",
    description: "One go build, one deploy",
  },
  {
    icon: Cpu,
    title: "LRU Connection Pool",
    description: "Auto-managed per project",
  },
  {
    icon: Lock,
    title: "AES-256-GCM",
    description: "Encrypted credentials at rest",
  },
  {
    icon: HardDrive,
    title: "S3 Backup Scheduler",
    description: "Automated backups to S3",
  },
];

/* ── main component ──────────────────────────────────────────────── */

export function Architecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeader
        title="Simple Architecture"
        subtitle="No microservice sprawl. One server, one database, unlimited projects."
      />

      <div ref={ref} className="relative">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[100px]" />
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="flex flex-col items-center"
        >
          {/* ── CLIENT ─────────────────────────────────────────── */}
          <ArchNode
            icon={Monitor}
            title="Client Application"
            subtitle="@supabase/supabase-js"
            className="w-full max-w-sm"
          >
            <div className="flex flex-wrap gap-1.5">
              <Chip>.auth.signUp()</Chip>
              <Chip>.from().select()</Chip>
              <Chip>.rpc()</Chip>
            </div>
          </ArchNode>

          {/* ── connector ──────────────────────────────────────── */}
          <Connector />

          {/* ── SERVER (hero node) ─────────────────────────────── */}
          <ArchNode
            icon={Server}
            title="Dupabase Server"
            subtitle="Single Go binary"
            glow
            className="w-full max-w-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-2 font-semibold">
                  Routes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Chip accent>/auth/v1/*</Chip>
                  <Chip accent>/rest/v1/*</Chip>
                  <Chip accent>/platform/*</Chip>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-2 font-semibold">
                  Middleware
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Chip>CORS</Chip>
                  <Chip>Rate Limit</Chip>
                  <Chip>Pool Manager</Chip>
                  <Chip>Backup Scheduler</Chip>
                </div>
              </div>
            </div>
          </ArchNode>

          {/* ── fork connector ─────────────────────────────────── */}
          <motion.div
            variants={drawLine}
            style={{ originY: 0 }}
            className="w-full max-w-2xl"
          >
            {/* desktop fork */}
            <div className="hidden sm:flex flex-col items-center">
              <div className="h-5 w-px bg-gradient-to-b from-emerald-500/30 to-emerald-500/20" />
              <div className="flex w-full">
                <div className="flex-1 h-px bg-gradient-to-l from-emerald-500/20 to-transparent" />
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/20 to-transparent" />
              </div>
              <div className="flex w-full">
                <div className="flex-1 flex justify-center">
                  <div className="h-5 w-px bg-gradient-to-b from-emerald-500/20 to-emerald-500/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="h-5 w-px bg-gradient-to-b from-emerald-500/20 to-emerald-500/10" />
                </div>
              </div>
            </div>
            {/* mobile: simple line */}
            <div className="sm:hidden flex justify-center">
              <div className="h-10 w-px bg-gradient-to-b from-emerald-500/30 to-emerald-500/10" />
            </div>
          </motion.div>

          {/* ── DATA LAYER ─────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            <ArchNode
              icon={Database}
              title="PostgreSQL"
              subtitle="YOUR database (Hetzner, AWS, anywhere)"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-2 font-semibold">
                Databases
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Chip accent>platform</Chip>
                <Chip>project_a</Chip>
                <Chip>project_b</Chip>
                <Chip dashed>project_...</Chip>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-2 mt-3 font-semibold">
                Per Project
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Chip>auth schema</Chip>
                <Chip>public schema</Chip>
                <Chip>RLS policies</Chip>
              </div>
            </ArchNode>

            <ArchNode
              icon={Cloud}
              title="S3 Storage"
              subtitle="AWS / MinIO / R2"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-2 font-semibold">
                Backups
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Chip>Hourly / Daily / Weekly</Chip>
                <Chip>Per-project selection</Chip>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-2 mt-3 font-semibold">
                Security
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Chip accent>AES-256-GCM</Chip>
                <Chip>Retention policy</Chip>
              </div>
            </ArchNode>
          </div>
        </motion.div>
      </div>

      {/* ── stat highlights ──────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
        }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10"
      >
        {stats.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <s.icon className="h-4 w-4 text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-sm">{s.title}</p>
              <p className="text-[11px] text-muted-foreground">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
