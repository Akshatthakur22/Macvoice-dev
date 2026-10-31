import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070b12] text-slate-400 text-sm py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/brand/macvoice-symbol.svg"
                alt="MacVoice"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="font-semibold text-lg text-white">MacVoice</span>
            </Link>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              The ultra-lightweight, local-first voice keyboard for Mac power users.
              Streams live at your cursor with zero cloud servers and zero subscriptions.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              macOS 26+ · Apple Silicon Native · 784 KB
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Core Features
                </Link>
              </li>
              <li>
                <Link href="/#modes" className="hover:text-white transition-colors">
                  Verbatim vs Polished
                </Link>
              </li>
              <li>
                <Link href="/#compare" className="hover:text-white transition-colors">
                  Comparison Matrix
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Buy MacVoice ($9)
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering & Docs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              Technical
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/compatibility" className="hover:text-white transition-colors">
                  Compatibility Matrix
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Air-Gap Architecture
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  User Guide & Setup
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  License & Terms of Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Release Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              Integrity
            </h4>
            <p className="text-xs text-slate-500 leading-normal">
              Official DMG SHA-256:
            </p>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 break-all select-all">
              c65640421934f518328b17a75a518e2ba36b7bb3dedd15ffeff4c30d8d1c7515
            </div>
            <p className="text-[11px] text-slate-500">
              Zero telemetry. No network sockets during transcription.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 MacVoice. Built with precision for the Mac.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Sale
            </Link>
            <Link href="/compatibility" className="hover:text-slate-300">
              Compatibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
