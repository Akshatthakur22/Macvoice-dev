import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24 bg-[#FFFFFF]">
      <Container className="text-center">
        {/* Restrained Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="blue" className="py-1 px-4 text-xs font-medium tracking-tight">
            Built for macOS 26+ · Apple Silicon Native · 784 KB
          </Badge>
        </div>

        {/* Primary H1 Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] max-w-4xl mx-auto leading-[1.08] mb-6">
          Your voice, straight to the cursor.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed mb-9 font-normal">
          A focused, local-first voice keyboard for Mac.
          Dictate directly into the apps you already use, strip vocal fillers in under 0.1ms,
          and keep your workflow moving with zero cloud servers.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
          <Button
            href="/pricing"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-[15px] px-8 py-3.5 font-medium group"
          >
            Buy MacVoice — $9 USD
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>

          <Button
            href="#demo"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-[15px] px-7 py-3.5"
          >
            See Live Demo
          </Button>
        </div>

        {/* Micro-copy beneath CTA */}
        <p className="text-xs text-[#6E6E73] mb-12 flex items-center justify-center gap-2 flex-wrap">
          <span>One-time purchase ($9).</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>No subscription or account.</span>
          <span className="text-[#D2D2D7]">•</span>
          <span>Instant 784 KB DMG download.</span>
        </p>

        {/* Shortcut Quick Indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E8E8ED] text-xs text-[#1D1D1F]">
          <span className="text-[#6E6E73]">Default shortcut:</span>
          <ShortcutBadge keys={["Control", "Option", "Space"]} size="sm" />
          <span className="text-[#6E6E73]">or customize in Settings</span>
        </div>
      </Container>
    </section>
  );
}
