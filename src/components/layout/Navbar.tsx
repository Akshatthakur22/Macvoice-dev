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
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090e17]/80 backdrop-blur-xl transition-all">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
            <Image
              src="/brand/macvoice-symbol.svg"
              alt="MacVoice Symbol"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
              priority
            />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white flex items-center gap-1.5">
            MacVoice
            <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              macOS
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link
            href="/#features"
            className="hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#modes"
            className="hover:text-white transition-colors"
          >
            Modes
          </Link>
          <Link
            href="/compatibility"
            className="hover:text-white transition-colors"
          >
            Compatibility
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/docs"
            className="hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="hover:text-white transition-colors"
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
            className="font-medium"
          >
            <ArrowDownToLine className="w-4 h-4" />
            Buy MacVoice — $9
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0d131f]/95 backdrop-blur-2xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-200">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Features
            </Link>
            <Link
              href="/#modes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Two Modes (Verbatim vs Polished)
            </Link>
            <Link
              href="/compatibility"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Compatibility Matrix
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Privacy & Air-Gap Architecture
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Quickstart & Documentation
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
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
