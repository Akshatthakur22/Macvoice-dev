import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#E8E8ED] bg-[#FFFFFF] overflow-hidden pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Directory Grid: Left Brand Column + 4 Right Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Brand & Attribution Column */}
          <div className="flex flex-col gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group w-fit"
              aria-label="MacVoice home"
            >
              <div className="w-8 h-8 rounded-[8px] bg-[#0071E3] flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:bg-[#0077ED] transition-colors">
                <Image
                  src="/brand/macvoice-symbol-mono-white.svg"
                  alt="MacVoice"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="font-semibold text-[20px] tracking-tight text-[#1D1D1F]">
                MacVoice
              </span>
            </Link>

            <p className="text-[13px] text-[#6E6E73] leading-relaxed max-w-[330px]">
              Free, local-first voice typing keyboard for macOS. Speak naturally and get text at your cursor with zero server uploads.
            </p>

            <div className="pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f2faf4] text-[#287a3e] border border-[#d4e8da] text-[11.5px] font-semibold whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#287a3e]" strokeWidth={2.2} />
                100% On-Device Engine
              </span>
            </div>

            <p className="text-[12px] leading-relaxed text-[#86868B] pt-1">
              © 2026 MacVoice. Lifetime license ($9 USD).
              <br />
              Created by{" "}
              <a
                href="https://akshatt.in/"
                target="_blank"
                rel="noreferrer"
                className="text-[#1D1D1F] font-semibold hover:text-[#0071E3] hover:underline transition-colors"
              >
                Akshat Thakur
              </a>.
            </p>
          </div>

          {/* 4 Directory Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-8">
            {/* Column 1: PRODUCT */}
            <nav aria-label="Product navigation" className="flex flex-col items-start gap-2.5">
              <h2 className="text-[11px] font-bold tracking-[0.08em] text-[#1D1D1F] uppercase mb-1">
                PRODUCT
              </h2>
              <Link
                href="/"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/#how-it-works"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#features"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Features &amp; Sizing
              </Link>
              <Link
                href="/#compare"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Competitor Comparison
              </Link>
              <Link
                href="/#modes"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Two Voice Modes
              </Link>
              <Link
                href="/#faq"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                FAQ &amp; Guide
              </Link>
            </nav>

            {/* Column 2: TRUST & PRIVACY */}
            <nav aria-label="Trust &amp; Privacy" className="flex flex-col items-start gap-2.5">
              <h2 className="text-[11px] font-bold tracking-[0.08em] text-[#1D1D1F] uppercase mb-1">
                TRUST &amp; PRIVACY
              </h2>
              <Link
                href="/privacy#architecture"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                About &amp; Architecture
              </Link>
              <Link
                href="/privacy"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Privacy Guarantee
              </Link>
              <Link
                href="/privacy#permissions"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Permissions Rationale
              </Link>
              <Link
                href="/privacy#network"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Zero Network Telemetry
              </Link>
              <Link
                href="/compatibility#requirements"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                60MB RAM Footprint
              </Link>
            </nav>

            {/* Column 3: RESOURCES */}
            <nav aria-label="Resources" className="flex flex-col items-start gap-2.5">
              <h2 className="text-[11px] font-bold tracking-[0.08em] text-[#1D1D1F] uppercase mb-1">
                RESOURCES
              </h2>
              <Link
                href="/docs"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/compatibility"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Compatibility Matrix
              </Link>
              <Link
                href="/terms"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Terms of Sale
              </Link>
              <Link
                href="/docs#quickstart"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                Quickstart Guide
              </Link>
              <Link
                href="/success"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors"
              >
                DMG Checksum (SHA-256)
              </Link>
            </nav>

            {/* Column 4: CONNECT */}
            <nav aria-label="Connect with creator" className="flex flex-col items-start gap-2.5">
              <h2 className="text-[11px] font-bold tracking-[0.08em] text-[#1D1D1F] uppercase mb-1">
                CONNECT
              </h2>
              <a
                href="https://akshatt.in/"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors inline-flex items-center gap-1 group"
              >
                Akshat Thakur
                <ArrowUpRight className="w-3 h-3 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
              </a>
              <a
                href="https://github.com/Akshatthakur22"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors inline-flex items-center gap-1 group"
              >
                GitHub
                <ArrowUpRight className="w-3 h-3 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/akshatthakur22/"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors inline-flex items-center gap-1 group"
              >
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
              </a>
              <a
                href="mailto:akshatthakur22@gmail.com"
                className="text-[13px] text-[#6E6E73] hover:text-[#0071E3] transition-colors inline-flex items-center gap-1 group"
              >
                Email
                <ArrowUpRight className="w-3 h-3 text-[#86868B] group-hover:text-[#0071E3] transition-colors" />
              </a>
            </nav>
          </div>
        </div>

        {/* Divider & Sub-footer Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-7 pb-6 mt-12 border-t border-[#E8E8ED] text-[12px]">
          <div className="max-w-[540px] text-[#86868B] leading-relaxed">
            MacVoice is built for software engineers, writers, and Mac users who need secure, instant voice typing.
          </div>
          <div className="flex items-center gap-2.5 flex-wrap text-[12px]">
            <Link
              href="/privacy"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              Privacy
            </Link>
            <span aria-hidden="true" className="text-[#D2D2D7]">
              &middot;
            </span>
            <Link
              href="/privacy#architecture"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              Architecture
            </Link>
            <span aria-hidden="true" className="text-[#D2D2D7]">
              &middot;
            </span>
            <a
              href="https://github.com/Akshatthakur22"
              target="_blank"
              rel="noreferrer"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-[#D2D2D7]">
              &middot;
            </span>
            <Link
              href="/compatibility"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              Compatibility
            </Link>
            <span aria-hidden="true" className="text-[#D2D2D7]">
              &middot;
            </span>
            <a
              href="mailto:akshatthakur22@gmail.com"
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Architectural Bleed Wordmark */}
      <div className="footer-bleed-wrap" aria-hidden="true">
        <span className="footer-bleed-text">MacVoice</span>
      </div>
    </footer>
  );
}
