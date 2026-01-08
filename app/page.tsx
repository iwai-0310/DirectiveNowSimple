import Image from "next/image";
import Header from "../components/Header"
import { AuroraHero } from "@/components/Hero";
import WhoWeAreSection from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header/>
      <main className="w-full">
        <AuroraHero />
        <WhoWeAreSection />
      </main>
      
    </div>
  );
}
