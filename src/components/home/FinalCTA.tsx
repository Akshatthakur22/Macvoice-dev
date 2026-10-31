import React from "react";
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#0A84FF] to-[#0071E3] flex items-center justify-center shadow-md shadow-blue-500/20">
              <svg
                className="w-8 h-8 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
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
