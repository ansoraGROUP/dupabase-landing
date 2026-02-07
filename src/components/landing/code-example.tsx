import { codeToHtml } from "shiki";
import { CopyButton } from "./copy-button";

const code = `import { createClient } from '@supabase/supabase-js'

// Just change the URL — everything else works the same
const supabase = createClient(
  'https://your-server.com',
  'your-anon-key'
)

// Auth — signup, login, JWT sessions
const { data: { user } } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password',
})

// REST — query your tables with full filtering
const { data: todos } = await supabase
  .from('todos')
  .select('*')
  .eq('user_id', user.id)
  .order('created_at', { ascending: false })`;

export async function CodeExample() {
  const html = await codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Connect in 3 lines
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Use the official{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
              @supabase/supabase-js
            </code>{" "}
            client library. Just point it at your self-hosted Dupabase instance.
          </p>
          <p className="text-muted-foreground">
            Auth, REST, filtering, ordering, pagination, RPC — it all works the
            same. Your existing code migrates with zero changes.
          </p>
        </div>

        <div className="rounded-lg border bg-[#0d1117] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/20" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                <div className="h-3 w-3 rounded-full bg-green-500/20" />
              </div>
              <span className="text-xs text-neutral-500 ml-2">app.ts</span>
            </div>
            <CopyButton value={code} />
          </div>
          <div
            className="p-4 text-sm overflow-x-auto [&_pre]:!bg-transparent [&_code]:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  );
}
