import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-[#E8E8ED] relative overflow-hidden">
      {/* Subtle soft blue background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#EAF3FF]/80 blur-[130px] pointer-events-none rounded-full" />

      <Container className="text-center relative">
        <div className="max-w-3xl mx-auto">
          {/* Logo mark */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF3FF] border border-[#0071E3]/20 flex items-center justify-center shadow-sm">
              <Image
                src="/brand/macvoice-symbol.svg"
                alt="MacVoice"
                width={30}
                height={30}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight mb-4">
            Ready to write at the speed of thought?
          </h2>

          <p className="text-[#6E6E73] text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Say goodbye to tired wrists, frustrating transcription apps, and never-ending monthly subscriptions.
            Experience effortless voice typing on your Mac today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              href="/pricing"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold group shadow-md"
            >
              Get MacVoice for Mac — $9 USD
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/docs"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto px-7 py-3.5 text-base"
            >
              Read Documentation
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-[#6E6E73] flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              14-Day Money Back Guarantee
            </span>
            <span className="text-[#D2D2D7]">•</span>
            <span>Works in Every App</span>
            <span className="text-[#D2D2D7]">•</span>
            <span>No Monthly Fees ($9 Once)</span>
            <span className="text-[#D2D2D7]">•</span>
            <span>100% Private on Your Mac</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
