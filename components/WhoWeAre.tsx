"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "./ui/button";

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-indigo-950 dark:bg-white-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Who We Are
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-white  md:text-4xl">
              Leading Your Business <br /> to Success Online.
            </h2>

            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 ">
                    Strategic Digital Marketing
                  </h4>
                  <p className="text-white ">
                    We create customized marketing strategies tailored to your
                    unique business needs.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 ">
                    Data-Driven Results
                  </h4>
                  <p className="text-white ">
                    Our campaigns are fueled by data, ensuring every dollar you
                    spend is maximized for conversions.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 ">
                    Conversion-Focused Optimization
                  </h4>
                  <p className="text-white ">
                    We don’t stop at generating traffic — we enhance landing pages,
                     funnels, and user journeys to turn visitors into paying
 customers, improving conversion rates across your entire digital ecosystem.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-slate-500" />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 ">
                    Partnership Approach
                  </h4>
                  <p className="text-white ">
                    Think of us as an extension of your team, committed to your
                    growth and success.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/*  ANIMATION Section */}
          <div className="relative flex flex-col items-center">
            <DotLottieReact
            src="/animations/Sheets_01.lottie"
            loop
            autoplay
            style={{ width: 400, height: 350 }}
            />
            <Button variant="secondary" size="sm">Learn More About us</Button>
            {/*<Image
              src="/marketing-illustration.png"
              alt="Digital Animation choosen for Who We Are Section"
              width={600}
              height={500}
              className="w-full"
              priority
            />*/}
          </div>

        </div>
      </div>
    </section>
  );
}
