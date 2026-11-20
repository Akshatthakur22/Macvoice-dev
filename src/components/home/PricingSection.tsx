import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrustLine } from "@/components/ui/TrustLine";
import { Waveform } from "@/components/ui/Waveform";
import { Reveal } from "@/components/ui/Reveal";
import { SupportPicker } from "@/components/support/SupportPicker";

export function PricingSection({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <section id="pricing" className="py-12 lg:py-20">
      <Container>
        {withHeader ? (
          <Reveal>
            <SectionHeader eyebrow="Pricing" title="Free for everyone." muted="Funded by people who love it." />
          </Reveal>
        ) : null}

        <Reveal className="mx-auto max-w-[600px]">
          {/* The themed object: a small recording-studio panel */}
          <div className="rounded-panel bg-ink p-3 shadow-e3">
            <div className="rounded-[20px] bg-[oklch(0.23_0.01_286)] p-6 text-white ring-1 ring-white/5 sm:p-8">
              <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.08em] text-white/60">
                <span>MacVoice · Free</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                  Every feature
                </span>
              </div>

              <div
                aria-hidden="true"
                className="mt-6 flex h-16 items-center justify-center rounded-tile bg-black/30 ring-1 ring-white/5"
              >
                <Waveform active cycles={3} bars={7} className="h-10 gap-1.5" barClassName="w-1.5 bg-[oklch(0.75_0.14_256)]" />
              </div>

              {/* The key: this is the download */}
              <Link
                href="/download"
                className="group mt-6 flex w-full items-center justify-between rounded-[18px] bg-gradient-to-b from-[oklch(0.74_0.15_50)] to-accent-warm px-6 py-5 text-[oklch(0.2_0.05_45)] shadow-[0_4px_0_0_oklch(0.52_0.14_40),0_12px_24px_-8px_oklch(0.68_0.16_45/0.6)] transition-[translate,box-shadow] duration-100 ease-out hover:translate-y-[2px] hover:shadow-[0_2px_0_0_oklch(0.52_0.14_40),0_6px_16px_-8px_oklch(0.68_0.16_45/0.6)] active:translate-y-[4px] active:shadow-none"
              >
                <span>
                  <span className="block text-[52px] font-semibold leading-none tracking-[-0.04em]">Free</span>
                  <span className="mt-1 block text-[15px] font-medium">No trial. No subscription. No account.</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/10 px-4 py-2 text-[15px] font-semibold">
                  Download
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-soft group-hover:translate-x-[2px]" aria-hidden="true" />
                </span>
              </Link>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-[17px] font-semibold">Want to back it? Optional.</h3>
                <p className="mt-1 text-[15px] text-white/65">A one-time contribution, any amount from $3.</p>
                <SupportPicker dark className="mt-4" />
              </div>
            </div>
          </div>

          <TrustLine className="mt-5 justify-center" />

          {/* Why it's free, in the maker's words */}
          <figure className="mt-8 rounded-card border border-line bg-surface p-6 shadow-e1">
            <blockquote className="text-body text-ink-2">
              &ldquo;MacVoice runs on your Mac, so it costs me almost nothing when you use it. I&apos;d rather it reach
              everyone who types all day than sit behind a paywall. If it saves you time, backing it keeps the
              updates coming.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-caption text-ink-2">
              <a href="https://akshatt.in/" target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-accent">
                Akshat Thakur
              </a>
              , who makes MacVoice
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
