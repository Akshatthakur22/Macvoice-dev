"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AppIcon } from "@/components/ui/AppIcon";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#compare", label: "Compare" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const download = (
    <Link
      href="/download"
      className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-[13px] font-medium text-white transition-colors duration-100 hover:bg-accent-hover"
    >
      Download free
    </Link>
  );

  return (
    <header className="sticky top-3 z-40 mx-auto mt-3 w-full max-w-[1248px] px-4 sm:px-6">
      <div className="rounded-[24px] bg-[oklch(0.18_0.01_286/0.86)] text-white shadow-e2 ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150">
        <div className="flex h-14 items-center justify-between gap-4 pl-3 pr-2 sm:h-16 sm:pl-4">
          <Link href="/" className="flex items-center gap-2.5 rounded-full" aria-label="MacVoice home">
            <AppIcon className="h-8 w-8" />
            <span className="text-[17px] font-semibold tracking-[-0.02em]">MacVoice</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-[14px] text-white/70 transition-colors duration-100 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {download}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Main"
          className={cn("grid gap-1 border-t border-white/10 p-2 lg:hidden", !open && "hidden")}
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] text-white/80 hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
