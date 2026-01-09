import Image from "next/image";
import Header from "../components/Header"
import { AuroraHero } from "@/components/Hero";
import WhoWeAreSection from "@/components/WhoWeAre";
import CardFlip  from "@/components/card-flip";
export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header/>
      <main className="w-full">
        <AuroraHero />
        <WhoWeAreSection />
        {/* package section cardFlip reusability */}
        <section className="mx-auto max-w-7xl px-6 py-20 bg-indigo-950">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <CardFlip
        title="Spark"
        subtitle="Paid Media"
        description=" Advertising are designed to generate quality leads, not just clicks"
        features={[
          "Maximize ROI ",
          "targeted, conversion-focused PPC",
          "social media advertising ",
        ]}
        />
        <CardFlip
        title="Ignite"
        subtitle="SEO"
        description="Data-backed SEO strategies tailored to your business."
        features={[
          "Increase your organic visibility",
          "attract high-intent customers",
          "advanced, data-backed SEO",
          "SEO strategies tailored to your business",
        ]}
        />
        <CardFlip
        title="Blaze All-In"
        subtitle="Website Optimization"
        description="Turn your website into a conversion machine"
        features={[
          "enhanced UX",
          "fast-loading pages",
          "funnel optimization",
          "persuasive content"
        ]}
        />
        </div>
        </section>
      </main>
      
    </div>
  );
}
