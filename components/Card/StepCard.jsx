"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Card } from "@/components/ui/card";

export default function StepCard({
  step = "01",
  title = "Step Title",
  description = "Step description goes here.",
  animation = "discovery.json", // ✅ file name from /public/animations
}) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`/animations/${animation}`);
        if (!res.ok) throw new Error(`Failed to load /animations/${animation}`);
        const json = await res.json();
        if (!cancelled) setAnimationData(json);
      } catch (e) {
        console.error(e);
        if (!cancelled) setAnimationData(null);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [animation]);

  return (
    <Card className="relative w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#070712] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
      {/* background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,140,0,0.18),transparent_40%),radial-gradient(circle_at_70%_40%,rgba(255,140,0,0.10),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative">
        {/* top step number */}
        <div className="mb-3 text-center text-3xl font-semibold tracking-wide text-orange-300">
          {step}
        </div>

        {/* glowing ring + lottie */}
        <div className="relative mx-auto mb-5 grid h-[190px] w-[190px] place-items-center">
          <div className="absolute inset-0 rounded-full bg-orange-500/25 blur-2xl opacity-70" />
          <div className="absolute inset-0 rounded-full border border-orange-300/60 shadow-[0_0_40px_rgba(255,140,0,0.30)]" />

          <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full bg-black/20">
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="h-full w-full"
              />
            ) : (
              // fallback (while loading or failed)
              <div className="grid h-full w-full place-items-center text-xs text-white/60">
                Loading…
              </div>
            )}
          </div>

          <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(255,140,0,0.9)]" />
          <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(255,140,0,0.9)]" />
        </div>

        {/* title line with step */}
        <div className="mb-3 flex items-baseline justify-center gap-2">
          <h3 className="text-center text-xl font-semibold leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-center text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </Card>
  );
}
