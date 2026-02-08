import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { CodeExample } from "@/components/landing/code-example";
import { CostComparison } from "@/components/landing/cost-comparison";
import { CompatibilityTable } from "@/components/landing/compatibility-table";
import { Architecture } from "@/components/landing/architecture";
import { QuickStart } from "@/components/landing/quick-start";
import { OpenSource } from "@/components/landing/open-source";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <CodeExample />
        <CostComparison />
        <CompatibilityTable />
        <Architecture />
        <QuickStart />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
