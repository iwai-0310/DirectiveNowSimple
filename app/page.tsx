import Image from "next/image";
import Header from "../components/Header"
import { AuroraHero } from "@/components/Hero";
import WhoWeAreSection from "@/components/WhoWeAre";
import CardFlip  from "@/components/card-flip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header/>
      <main className="w-full">
        <AuroraHero />
        <WhoWeAreSection />
        {/* package section cardFlip reusability */}
        <section className="w-viewport mx-auto max-w-7xl px-6 py-20 bg-indigo-950">
        <div className="w-viewport grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <CardFlip
        title="Spark"
        subtitle="Paid Media"
        description=" Advertising are designed to generate quality leads, not just clicks"
        features={[
          "Google Ads account setup or restructure",
          "Search Ads campaign management",
          "Keyword & competitor research ",
          "Conversion tracking (calls & forms)",
          "GA4 & Google Tag Manager setup",
          "Weekly optimization & monitoring",
          "Monthly performance report",
        ]}
        />
        <CardFlip
        title="Ignite"
        subtitle="SEO"
        description="Data-backed SEO strategies tailored to your business."
        features={[
          "Search + Performance Max campaigns",
          "Advanced conversion tracking setup",
          "Call tracking integration",
          "Landing page CRO recommendations",
          "Search term mining & intent optimization",
          "Bi-weekly optimization cycles",
          "Monthly strategy & performance call",
        ]}
        />
        <CardFlip
        title="Blaze All-In"
        subtitle="Website Optimization"
        description="Turn your website into a conversion machine"
        features={[
          "Full Google Ads ecosystem (Search, PMax, YouTube where applicable)",
          "Enhanced & offline conversion tracking",
          "Conversion-focused landing page guidance",
          "Custom Looker Studio dashboard",
          "Weekly optimisation & strategy reviews",
          "Priority support & faster testing cycles",
        ]}
        />
        </div>
        </section>
      </main>
      {/* <Footer/> */}
      <Footer/>
    </div>
  );
}
