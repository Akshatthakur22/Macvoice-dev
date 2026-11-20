import React from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DefaultShortcut } from "@/components/ui/Keycap";
import { TrustLine } from "@/components/ui/TrustLine";
import { Waveform } from "@/components/ui/Waveform";

/** Hero copy. Rendered inside <Stage>, above the MacBook. */
export function Hero() {
  return (
    <Container className="flex flex-col items-center pt-14 text-center sm:pt-20 lg:pt-20">
      <h1 className="text-display text-balance">
        <span className="block text-ink">
          Talk
          <Waveform
            active
            cycles={3}
            bars={5}
            className="mx-[0.12em] h-[0.6em] gap-[0.05em] align-middle"
            barClassName="w-[0.075em]"
          />
          to any Mac app.
        </span>
        <span className="block text-ink-3">
          Press{" "}
          <span className="whitespace-nowrap">
            <DefaultShortcut size="inline" />,
          </span>{" "}
          it types.
        </span>
      </h1>

      <p className="text-body-lg mt-6 max-w-[560px] text-pretty text-ink-2 sm:text-[20px]">
        Clean, punctuated text appears at your cursor while you speak. It all runs on your Mac, so your voice
        never leaves it.
      </p>

      <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
        <Button href="/download" size="lg" arrow className="w-full sm:w-auto">
          Download free
        </Button>
        <Button href="#demo" variant="secondary" size="lg" className="w-full sm:w-auto">
          Watch it type
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      <p className="mt-5 text-[15px]">
        <span className="font-semibold text-ink">Free, every feature.</span>{" "}
        <span className="text-ink-2">No trial, no subscription.</span>
      </p>
      <TrustLine className="mt-1.5 justify-center" />
    </Container>
  );
}
