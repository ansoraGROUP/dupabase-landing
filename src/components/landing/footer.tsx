import { Database } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 font-bold mb-3">
              <Database className="h-4 w-4 text-primary" />
              Dupabase
            </div>
            <p className="text-xs text-muted-foreground">
              Self-hosted Supabase alternative.
              <br />
              Built with Go and PostgreSQL.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Product</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#compatibility" className="hover:text-foreground transition-colors">
                  Compatibility
                </a>
              </li>
              <li>
                <a href="#quickstart" className="hover:text-foreground transition-colors">
                  Quick Start
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Developers</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/ansoraGROUP/dupabase"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ansoraGROUP/dupabase/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-foreground transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ansoraGROUP/dupabase/issues"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-foreground transition-colors"
                >
                  Issues
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/ansoraGROUP/dupabase/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-foreground transition-colors"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Dupabase. Open source under the MIT
          License.
        </p>
      </div>
    </footer>
  );
}
