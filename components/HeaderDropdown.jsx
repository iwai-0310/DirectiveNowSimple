"use client";

import { FiChevronDown, FiEdit, FiPlusSquare, FiShare, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

export default function HeaderDropDown() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

  // Calculate menu position under the button
  useLayoutEffect(() => {
    function update() {
      if (!btnRef.current) return;
      const r = btnRef.current.getBoundingClientRect();
      setPos({
        top: r.bottom + 10,
        left: r.right - 224, // 224px = w-56
        width: r.width,
      });
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, []);

  // Close on escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen((pv) => !pv)}
          className="
            flex items-center gap-2 rounded-full
            border border-white/20 bg-white/10
            px-4 py-2 text-sm font-medium text-white
            backdrop-blur-md transition
            hover:bg-white/15
          "
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <span>Menu</span>
          <motion.span
            variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
            transition={{ duration: 0.2 }}
            className="text-white/90"
          >
            <FiChevronDown />
          </motion.span>
        </button>
      </motion.div>

      {/* Portal menu + overlay */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* overlay */}
                <motion.button
                  type="button"
                  aria-label="Close menu overlay"
                  className="fixed inset-0 z-[9998] cursor-default bg-black/0"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* menu */}
                <motion.ul
                  className="
                    fixed z-[9999] w-56 overflow-hidden rounded-2xl
                    border border-white/10 bg-[#0b1023]/95
                    shadow-2xl backdrop-blur-xl p-2
                  "
                  style={{ top: pos.top, left: pos.left }}
                  initial={{ opacity: 0, scale: 0.98, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -6 }}
                >
                  <Option href="/services" onSelect={() => setOpen(false)} Icon={FiEdit} text="Services" />
                  <Option href="/aboutUs" onSelect={() => setOpen(false)} Icon={FiPlusSquare} text="About Us" />
                  <Option href="/industries" onSelect={() => setOpen(false)} Icon={FiShare} text="Industries" />
                  <Option href="/contact" onSelect={() => setOpen(false)} Icon={FiMail} text="Connect Us" />

                  <div className="my-2 h-px bg-white/10" />

                  <Option
                    href="/audit"
                    onSelect={() => setOpen(false)}
                    Icon={FiPlusSquare}
                    text="Get a free audit"
                    accent
                  />
                </motion.ul>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function Option({ text, Icon, href, onSelect, accent = false }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onSelect}
        className={`
          flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition
          ${accent
            ? "bg-white text-black hover:bg-white/90"
            : "text-white/90 hover:bg-white/10 hover:text-white"}
        `}
      >
        <span className={accent ? "text-black/80" : "text-white/80"}>
          <Icon />
        </span>
        <span className="font-medium">{text}</span>
      </Link>
    </li>
  );
}
