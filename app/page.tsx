import Header from "../components/Header";
import { AuroraHero } from "@/components/Hero";
import WhoWeAreSection from "@/components/WhoWeAre";
import CardFlip from "@/components/card-flip";
import Footer from "@/components/Footer";
import { CarouselSize } from "@/components/CST";
import Cardss from "@/components/Card/Cardss";
import {StartCard} from "@/components/Card/StartCard";
import StepCard from "@/components/Card/StepCard";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <main className="w-full">
        <AuroraHero />
        <WhoWeAreSection />
        {/* <StartCard /> */}
       <div className="flex flex-wrap gap-6">
      <StepCard
        step="01"
        title="Initial Discovery"
        description="We begin by understanding your goals , challenges and existing digital presence. This helps us shape a strategy that aligns with your objectives and desired outcomes."
        animation="discovery.json"
      />
      <StepCard
        step="02"
        title="Onboarding"
        description="We establish expectations, finalize access requirements, organize reporting dashboards and align communication channels to ensure a smooth kickoff."
        animation="Strategic_Align.json"
      />
      <StepCard
        step="03"
        title="Strategic Alignment"
        description="We dive deeper into your business model, analyze competitors and refine our intial strategy to ensure we are targeting the right platforms , audience and converion paths."
        animation="Rocket_research.json"
      />
      <StartCard/>
      </div>  
        {/* ✅ LARGE SCREENS: show CardFlip grid */}
        <section className="hidden w-full bg-indigo-950 py-20 lg:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 place-items-center sm:grid-cols-2 lg:grid-cols-3">
              <CardFlip
                title="Spark"
                subtitle="Paid Media"
                description="Advertising are designed to generate quality leads, not just clicks"
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
          </div>
        </section>

        {/* ✅ SMALL + MEDIUM: show Cardss instead */}
        <section className="w-full bg-indigo-950 py-20 lg:hidden">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex w-full justify-center">
      <Cardss />
    </div>
  </div>
</section>


        <CarouselSize />
      </main>

      <Footer />
      
                
    </div>
  );
}
