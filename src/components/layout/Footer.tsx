import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8ED] bg-[#F5F5F7] text-[#6E6E73] text-[12px] leading-relaxed pt-16 pb-12">
      <Container>
        {/* Four-Column Layout on Desktop, Two-Column on Tablet, Single-Column on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-[#E8E8ED]">
          {/* Column 1: Product & Story */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Product
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Core Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/#modes"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Verbatim & Polished Modes
                </Link>
              </li>
              <li>
                <Link
                  href="/#compare"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Benchmark Comparison
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Documentation & Setup */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Documentation
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link
                  href="/docs#quickstart"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Quickstart Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs#shortcuts"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Shortcut Configuration
                </Link>
              </li>
              <li>
                <Link
                  href="/docs#permissions"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  macOS Permissions Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/docs#uninstall"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Clean Uninstallation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform & Architecture */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Platform & Architecture
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link
                  href="/compatibility"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Compatibility Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/compatibility#requirements"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  System Requirements (macOS 26+)
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#architecture"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Air-Gap Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#audio"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  In-Memory Audio Processing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Licensing & Legal */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
              License & Legal
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Lifetime License ($9 USD)
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Terms of Sale & License
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms#refund"
                  className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
                >
                  14-Day Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Short Brand & Trademark Statement */}
        <div className="pt-8 pb-6 text-[11px] text-[#6E6E73] leading-relaxed max-w-4xl space-y-1.5">
          <p>
            MacVoice is a focused, local-first voice keyboard for macOS. Designed to turn natural speech into text directly at your cursor with zero cloud servers and zero subscriptions.
          </p>
          <p>
            Apple, Mac, macOS, and Apple Silicon are trademarks of Apple Inc., registered in the U.S. and other countries. MacVoice is an independent software product and is not affiliated with or endorsed by Apple Inc.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Creator Attribution, and Legal Links */}
        <div className="pt-6 border-t border-[#E8E8ED] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6E73]">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-center sm:text-left">
            <span>© 2026 MacVoice. All rights reserved.</span>
            <span className="hidden sm:inline text-[#D2D2D7]">•</span>
            <span>Crafted for Mac power users by Akshat Thakur.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
            >
              Terms of Sale
            </Link>
            <Link
              href="/compatibility"
              className="hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-sm transition-colors duration-150"
            >
              Compatibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
