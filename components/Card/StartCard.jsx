"use client";

import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// import animationData from "@/public/animations/hero-card.json"; // ✅ your lottie json
import animationData from "@/public/animations/we_connect.json";
export function StartCard() {
  return (
    <Card className="relative w-[240px] overflow-hidden rounded-2xl border-0 bg-transparent shadow-none">
      {/* Top media area (Lottie) */}
      <div className="relative h-[240px] w-full overflow-hidden rounded-2xl">
        {/* Optional: subtle vignette to match the reference */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/10" />

        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="h-full w-full"
        />
      </div>

      {/* Blurred footer pill */}
      <div className="pointer-events-none absolute bottom-2 left-2 right-2 z-20">
  <div className="relative flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-md">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20" />
    <span className="relative">Your journey starts with us</span>
  </div>
</div>

    </Card>
  );
}
