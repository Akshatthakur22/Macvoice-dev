import React from "react";
import Link from "next/link";
import { AppIcon } from "@/components/ui/AppIcon";

const GROUPS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#compare", label: "Compare" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Docs" },
      { href: "/blog", label: "Blog" },
      { href: "/compatibility", label: "Compatibility" },
      { href: "/privacy#architecture", label: "How it works inside" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/terms#refund", label: "Refunds" },
      { href: "mailto:akshatthakur22@gmail.com", label: "Contact", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t border-line pt-16">
      <div className="mx-auto max-w-[1248px] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          <div className="flex max-w-[360px] flex-col gap-4">
            <Link href="/" className="inline-flex w-fit items-center gap-2.5" aria-label="MacVoice home">
              <AppIcon className="h-8 w-8" />
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-ink">MacVoice</span>
            </Link>
            <p className="text-body text-ink-2">
              Private voice typing for Mac. Talk, and it types at your cursor in any app. Free, every feature.
            </p>
            <a
              href="https://macbase.app/apps/macvoice?ref=badge"
              target="_blank"
              rel="noopener"
              className="w-fit transition-opacity hover:opacity-90"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://macbase.app/badge/featured-on-macbase.svg"
                alt="Featured on MacBase"
                width={200}
                height={54}
                loading="lazy"
                style={{ height: "54px", width: "auto" }}
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {GROUPS.map((g) => (
              <nav key={g.title} aria-label={g.title} className="flex flex-col gap-3">
                <h2 className="text-eyebrow text-ink-2">{g.title}</h2>
                {g.links.map((l) =>
                  l.external ? (
                    <a key={l.label} href={l.href} className="text-[15px] text-ink hover:text-accent">
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} href={l.href} className="text-[15px] text-ink hover:text-accent">
                      {l.label}
                    </Link>
                  )
                )}
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-caption text-ink-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Made by{" "}
            <a href="https://akshatt.in/" target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-accent">
              Akshat Thakur
            </a>
            . © 2026 MacVoice.
          </p>
          <p className="flex gap-4">
            <a href="https://github.com/Akshatthakur22" target="_blank" rel="noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akshatthakur22/" target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none mt-8 select-none text-center leading-[0.74]">
        <span className="wordmark-outline inline-block whitespace-nowrap text-[clamp(84px,19vw,260px)] font-semibold tracking-[-0.055em] [margin-bottom:-0.14em]">
          MacVoice
        </span>
      </div>
    </footer>
  );
}
