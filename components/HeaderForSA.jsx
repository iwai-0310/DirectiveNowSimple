"use client";

import Link from "next/link";
import { SlideTabsExample } from "@/components/SlideTabMain";
import HeaderDropDown from "@/components/HeaderDropdown";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[1000] w-full bg-gradient-to-b from-[#22223B] to-[#030617]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <div className="text-xl font-bold text-[#F2E9E4]">DirectiveNow</div>
        </Link>

        {/* Tabs */}
        <div className="flex items-center">
          {/* <SlideTabsExample /> */}
          <HeaderDropDown/>
        </div>
      </div>
    </header>
  );
}
