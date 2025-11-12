import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FeatureSections } from "@/components/FeatureSections";
import { ModelMatrix } from "@/components/ModelMatrix";
import { PricingPlans } from "@/components/PricingPlans";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Testimonials } from "@/components/Testimonials";
import { CodeSample } from "@/components/CodeSample";
import { Playground } from "@/components/Playground";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <FeatureSections />
        <ModelMatrix />
        <PricingPlans />
        <ComparisonTable />
        <Testimonials />
        <CodeSample />
        <Playground />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
