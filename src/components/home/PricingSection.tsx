"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckoutError, useCheckout } from "@/components/ui/BuyButton";
import { TrustLine } from "@/components/ui/TrustLine";
import { Waveform } from "@/components/ui/Waveform";
import { Reveal } from "@/components/ui/Reveal";

const INCLUDES = ["Up to 5 of your Macs", "All 1.x updates", "14-day refund", "No account"];

export function PricingSection({ withHeader = true }: { withHeader?: boolean }) {
  const { start, loading, error } = useCheckout();

  return (
    <section id="pricing" className="py-12 lg:py-20">
      <Container>
        {withHeader ? (
          <Reveal>
            <SectionHeader eyebrow="Pricing" title="One shortcut." muted="One price, for good." />
          </Reveal>
        ) : null}

        <Reveal className="mx-auto max-w-[560px]">
          {/* The themed object: a small recording-studio panel */}
          <div className="rounded-panel bg-ink p-3 shadow-e3">
            <div className="rounded-[20px] bg-[oklch(0.23_0.01_286)] p-6 ring-1 ring-white/5 sm:p-8">
              <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.08em] text-white/60">
                <span>MacVoice · Lifetime</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                  Ready
                </span>
              </div>

              {/* Level meter */}
              <div
                aria-hidden="true"
                className="mt-6 flex h-16 items-center justify-center rounded-tile bg-black/30 ring-1 ring-white/5"
              >
                <Waveform active cycles={3} bars={7} className="h-10 gap-1.5" barClassName="w-1.5 bg-[oklch(0.75_0.14_256)]" />
              </div>

              {/* The price key: this is the buy button */}
              <button
                type="button"
                onClick={start}
                disabled={loading}
                className="group mt-6 flex w-full cursor-pointer items-center justify-between rounded-[18px] bg-gradient-to-b from-[oklch(0.74_0.15_50)] to-accent-warm px-6 py-5 text-left text-[oklch(0.2_0.05_45)] shadow-[0_4px_0_0_oklch(0.52_0.14_40),0_12px_24px_-8px_oklch(0.68_0.16_45/0.6)] transition-[translate,box-shadow] duration-100 ease-out hover:translate-y-[2px] hover:shadow-[0_2px_0_0_oklch(0.52_0.14_40),0_6px_16px_-8px_oklch(0.68_0.16_45/0.6)] active:translate-y-[4px] active:shadow-none disabled:opacity-70"
              >
                <span>
                  <span className="block text-[56px] font-semibold leading-none tracking-[-0.04em]">$9</span>
                  <span className="mt-1 block text-[15px] font-medium">
                    {loading ? "Opening checkout…" : "Pay once. Yours for good."}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-black/10 px-4 py-2 text-[15px] font-semibold">
                  Buy
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-soft group-hover:translate-x-[2px]" aria-hidden="true" />
                </span>
              </button>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] text-white/80">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.14_256)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CheckoutError message={error} className="mt-4 justify-center" />
          <TrustLine className="mt-5 justify-center" />
          <p className="text-body mx-auto mt-6 max-w-[480px] text-center text-ink-2">
            Cloud dictation apps charge a subscription because your voice runs on their servers. MacVoice runs on
            your Mac, so there’s nothing to charge you for every month.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
