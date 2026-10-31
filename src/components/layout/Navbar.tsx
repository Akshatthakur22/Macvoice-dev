"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowDownToLine } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8E8ED] bg-[#FFFFFF]/80 backdrop-blur-xl transition-all">
      <Container className="flex h-14 sm:h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center bg-[#EAF3FF] border border-[#0071E3]/20 group-hover:border-[#0071E3]/40 transition-colors">
            <Image
              src="/brand/macvoice-symbol.svg"
              alt="MacVoice Symbol"
              width={18}
              height={18}
              className="w-4 h-4 object-contain"
              priority
            />
          </div>
          <span className="font-semibold text-[17px] tracking-tight text-[#1D1D1F] flex items-center gap-1.5">
            MacVoice
            <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#F5F5F7] text-[#6E6E73] border border-[#E8E8ED]">
              macOS
            </span>
          </span>
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
