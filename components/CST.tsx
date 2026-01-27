"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import StepCard from "@/components/Card/StepCard"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const steps = [
    {
      step: "01",
      title: "Initial Discovery",
      description: "We begin by understanding your goals, challenges, and existing digital presence. This helps us shape a strategy that aligns with your objectives and desired outcomes.",
      animation: "discovery.json",
    },
    {
      step: "02",
      title: "Onboarding",
      description: "We establish expectations, finalize access requirements, organize reporting dashboards, and align communication channels to ensure a smooth kickoff.",
      animation: "Onboarding.json",
    },
    {
      step: "03",
      title: "Strategic Alignment",
      description: "We dive deeper into your business model, analyze competitors, and refine our initial strategy to ensure we are targeting the right platforms, audiences, and conversion paths..",
      animation: "Strategic_Align.json",
    },
    {
      step: "04",
      title: "Early Performance Review",
      description: "In the opening weeks, we monitor key performance indicators, analyze early data trends, and identify areas for optimization to help strengthen campaign direction.",
      animation: "Data_management.json",
    },
    {
      step: "05",
      title: "Growth Strategy Workshop",
      description: "We collaborate with you to review insights, adjust targeting, refine messaging, and map out next-phase scaling opportunities based on performance indicators and goals.",
      animation: "Bussiness_Growth.json",
    },
    {
      step: "06",
      title: "Continuous Optimization & Support",
      description: "Through ongoing reporting cycles, strategy sessions, and refinement, we work to maximize performance and maintain alignment with your evolving business needs.",
      animation: "Rocket_research.json",
    },
  ];
  return (
    <Carousel
      opts={{ align: "start", loop: true, duration: 40 }}
      plugins={[plugin.current]}
      className="w-full max-w-none"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
         {steps.map((item) => (
          <CarouselItem
            key={item.step}
            className="basis-full sm:basis-1/2 md:basis-1/3"
          >
            <div className="p-1 sm:p-1.5 md:p-2">
              {/* ✅ Render your StepCard */}
              <StepCard
                step={item.step}
                title={item.title}
                description={item.description}
                animation={item.animation}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Optional: hide arrows on very small screens */}
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
