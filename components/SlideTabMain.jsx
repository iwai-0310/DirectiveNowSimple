"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const SlideTabsExample = () => {
  return <SlideTabs />;
};

const tabs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us ", href: "/aboutUS" },
  { label: "Get a Free Audit", href: "/" },

];

const SlideTabs = () => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <nav aria-label="Primary">
      <ul
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        className="
          relative flex w-fit items-center gap-1 rounded-full
          border border-white/20 bg-white/10 p-1
          backdrop-blur-md
        "
      >
        {tabs.map((t) => (
          <Tab key={t.href} href={t.href} setPosition={setPosition}>
            {t.label}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, href, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative"
    >
      <Link
        href={href}
        className="
          relative z-10 block rounded-full px-4 py-2
          text-xs font-medium uppercase tracking-wide text-white/90
          transition-colors hover:text-white
          md:px-5 md:py-2.5 md:text-sm
        "
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      className="
        absolute z-0 h-9 rounded-full
        bg-white/20
      "
      style={{ top: 4 }}
    />
  );
};
