"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SlideTabsExample } from "@/components/SlideTabMain";
import HeaderDropDown from "@/components/HeaderDropdown";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[1000] w-full bg-gradient-to-b from-[#22223B] to-[#030617] text-[#F2E9E4]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="inline-block text-xl font-bold">
          DirectiveNow
        </Link>

        {/* RIGHT SIDE NAVS */}

        {/* Small screens: dropdown (default) */}
        <div className="flex items-center md:hidden">
          <HeaderDropDown />
        </div>

        {/* Medium screens: SlideTabs */}
        <div className="hidden md:flex lg:hidden items-center">
          <SlideTabsExample />
        </div>

        {/* Large screens: button row */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/services">
            <Button variant="ghost" size="sm">Services</Button>
          </Link>

          <Link href="/aboutUs">
            <Button variant="ghost" size="sm">About Us</Button>
          </Link>

          <Link href="/industries">
            <Button variant="ghost" size="sm">Industries</Button>
          </Link>

          <Link href="/contact">
            <Button variant="ghost" size="sm">Connect us</Button>
          </Link>

          <Link href="/audit">
            <Button variant="secondary" size="sm">Get a Free Audit</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
