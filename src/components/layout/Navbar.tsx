"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowDownToLine } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8E8ED] bg-[#FFFFFF]/80 backdrop-blur-xl transition-all">
      <Container className="flex h-14 sm:h-16 items-center justify-between">
        {/* Brand Logo: Apple-Grade Solid Blue Squircle with Unmistakable Mic Symbol */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="MacVoice Home">
          <div className="w-8 h-8 rounded-[8.5px] bg-gradient-to-b from-[#0A84FF] to-[#0071E3] flex items-center justify-center shadow-[0_2px_6px_rgba(0,113,227,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_3px_10px_rgba(0,113,227,0.38)]">
            <svg
              className="w-[18px] h-[18px] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8.5" y="2.5" width="7" height="11.5" rx="3.5" fill="currentColor" />
              <path
                d="M5.5 10.5C5.5 14.09 8.41 17 12 17C15.59 17 18.5 14.09 18.5 10.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path d="M12 17V21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M8.5 21H15.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-[18px] tracking-[-0.03em] text-[#1D1D1F]">
              MacVoice
            </span>
            <span className="text-[11px] font-medium text-[#86868B] tracking-tight">
              for Mac
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#1D1D1F]/80">
          <Link
            href="/#features"
            className="hover:text-[#0071E3] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#modes"
            className="hover:text-[#0071E3] transition-colors"
          >
            Modes
          </Link>
          <Link
            href="/compatibility"
            className="hover:text-[#0071E3] transition-colors"
          >
            Compatibility
          </Link>
          <Link
            href="/privacy"
            className="hover:text-[#0071E3] transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/docs"
            className="hover:text-[#0071E3] transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="hover:text-[#0071E3] transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="/pricing"
            variant="primary"
            size="sm"
            className="font-medium text-xs px-4"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            Buy MacVoice — $9
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#6E6E73] hover:text-[#1D1D1F] rounded-lg hover:bg-[#F5F5F7] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E8ED] bg-[#FFFFFF]/95 backdrop-blur-2xl px-6 py-6 transition-all shadow-lg">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1D1D1F]">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071E3]"
            >
              Features
            </Link>
            <Link
              href="/#modes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071E3]"
            >
              Two Modes (Verbatim vs Polished)
            </Link>
            <Link
              href="/compatibility"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071E3]"
            >
              Compatibility Matrix
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071E3]"
            >
              Privacy & Air-Gap Architecture
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071E3]"
            >
              Quickstart & Documentation
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#0071E3]"
            >
              Pricing ($9 One-Time)
            </Link>
            <div className="pt-2">
              <Button
                href="/pricing"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ArrowDownToLine className="w-4 h-4" />
                Buy MacVoice — $9 USD
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
