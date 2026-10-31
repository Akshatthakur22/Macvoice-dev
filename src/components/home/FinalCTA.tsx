import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#070b12] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[140px] pointer-events-none rounded-full" />

      <Container className="text-center relative">
        <div className="max-w-3xl mx-auto">
          {/* Logo mark */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-lg">
              <Image
                src="/brand/macvoice-symbol.svg"
                alt="MacVoice"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your voice, straight to the cursor.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Stop switching windows and waiting on slow cloud models.
            Experience live, local-first voice typing for macOS today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              href="/pricing"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold group"
            >
              Get MacVoice for Mac — $9 USD
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/docs"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto px-7 py-4 text-base"
            >
              Read Documentation
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              14-Day Money Back Guarantee
            </span>
            <span>•</span>
            <span>784 KB DMG</span>
            <span>•</span>
            <span>macOS 26+ Apple Silicon</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
