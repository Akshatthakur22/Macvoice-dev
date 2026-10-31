import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8ED] bg-[#F5F5F7] text-[#6E6E73] text-[12px] leading-normal py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#E8E8ED]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/macvoice-symbol.svg"
                alt="MacVoice"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="font-semibold text-[15px] text-[#1D1D1F]">MacVoice</span>
            </Link>
            <p className="text-[#6E6E73] max-w-sm leading-relaxed">
              The ultra-lightweight, local-first voice keyboard for Mac power users.
              Streams live at your cursor with zero cloud servers and zero subscriptions.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-[#6E6E73] font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              macOS 26+ · Apple Silicon Native · 784 KB
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#1D1D1F]">
              Product
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link href="/#features" className="hover:text-[#1D1D1F] transition-colors">
                  Core Features
                </Link>
              </li>
              <li>
                <Link href="/#modes" className="hover:text-[#1D1D1F] transition-colors">
                  Verbatim vs Polished
                </Link>
              </li>
              <li>
                <Link href="/#compare" className="hover:text-[#1D1D1F] transition-colors">
                  Comparison Matrix
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#1D1D1F] transition-colors">
                  Buy MacVoice ($9)
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Links */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#1D1D1F]">
              Technical
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link href="/compatibility" className="hover:text-[#1D1D1F] transition-colors">
                  Compatibility Matrix
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#1D1D1F] transition-colors">
                  Air-Gap Architecture
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-[#1D1D1F] transition-colors">
                  User Guide & Setup
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#1D1D1F] transition-colors">
                  License & Terms of Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Release Checksum */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-semibold tracking-wider uppercase text-[#1D1D1F]">
              Release Integrity
            </h4>
            <p className="text-[11px] text-[#6E6E73] leading-normal">
              Official DMG SHA-256:
            </p>
            <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E8E8ED] text-[10px] font-mono text-[#1D1D1F] break-all select-all">
              c65640421934f518328b17a75a518e2ba36b7bb3dedd15ffeff4c30d8d1c7515
            </div>
            <p className="text-[11px] text-[#6E6E73]">
              Zero telemetry. No network sockets during transcription.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6E73]">
          <p>
            © 2026 MacVoice. Apple, macOS, and Apple Silicon are trademarks of Apple Inc.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#1D1D1F]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1D1D1F]">
              Terms of Sale
            </Link>
            <Link href="/compatibility" className="hover:text-[#1D1D1F]">
              Compatibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
