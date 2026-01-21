"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[plugin.current]}
      className="w-full max-w-5xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            // ✅ 2 visible on small screens, 3 visible on md+ and lg+
            className="basis-full sm:basis-1/2 md:basis-1/3"
          >
            {/* ✅ Reduce padding on smaller screens */}
            <div className="p-1 sm:p-1.5 md:p-2">
              <Card>
                <CardContent
                  // ✅ Make the card smaller on small screens
                  className="
                    flex items-center justify-center
                    aspect-[4/5] sm:aspect-square
                    p-3 sm:p-4 md:p-6
                  "
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
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
