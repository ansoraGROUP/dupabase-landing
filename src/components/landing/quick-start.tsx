import { codeToHtml } from "shiki";
import { SectionHeader } from "./section-header";
import { CopyButton } from "./copy-button";

const steps = [
  {
    num: "1",
    title: "Clone & point to your PostgreSQL",
    code: `git clone https://github.com/ansoraGROUP/dupabase.git
cd dupabase
cp .env.example .env
# Edit .env — set DATABASE_URL to YOUR PostgreSQL`,
    lang: "bash",
  },
  {
    num: "2",
    title: "Start with Docker",
    code: `make build && make up`,
    lang: "bash",
  },
  {
    num: "3",
    title: "Open the dashboard",
    code: `# Open http://localhost:16733
# Create a project, grab your API key, ship
# Unlimited projects on your $7.59/mo Hetzner VPS`,
    lang: "bash",
  },
];

export async function QuickStart() {
  const rendered = await Promise.all(
    steps.map(async (s) => ({
      ...s,
      html: await codeToHtml(s.code, {
        lang: s.lang,
        theme: "github-dark-default",
      }),
    }))
  );

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <SectionHeader
        id="quickstart"
        title="Up and Running in 60 Seconds"
        subtitle="Three steps. That's it."
      />
      <div className="max-w-2xl mx-auto space-y-0">
        {rendered.map((s, i) => (
          <div key={s.num} className="relative flex gap-4">
            {/* Timeline line */}
            {i < rendered.length - 1 && (
              <div className="absolute left-[15px] top-8 bottom-0 w-px bg-border" />
            )}
            {/* Step number */}
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-card text-sm font-bold">
              {s.num}
            </div>
            {/* Content */}
            <div className="flex-1 pb-8">
              <p className="font-semibold mb-2">{s.title}</p>
              <div className="rounded-lg border bg-[#0d1117] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-1.5 border-b border-white/10">
                  <span className="text-xs text-neutral-500">terminal</span>
                  <CopyButton value={s.code} />
                </div>
                <div
                  className="p-4 text-sm [&_pre]:!bg-transparent [&_code]:!bg-transparent"
                  dangerouslySetInnerHTML={{ __html: s.html }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
