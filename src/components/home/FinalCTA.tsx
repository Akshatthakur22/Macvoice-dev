import React from "react";
import { AppIcon } from "@/components/ui/AppIcon";
import { BuyButton } from "@/components/ui/BuyButton";
import { Container } from "@/components/ui/Container";
import { TrustLine } from "@/components/ui/TrustLine";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <AppIcon className="h-20 w-20 rounded-[22px] shadow-e3" label="MacVoice app icon" />
          <h2 className="text-h2 mt-8 max-w-[14ch] text-balance">
            <span className="text-ink">Your next email</span>{" "}
            <span className="text-ink-3">is one shortcut away.</span>
          </h2>
          <div className="mt-9 flex flex-col items-center">
            <BuyButton>Buy MacVoice — $9</BuyButton>
          </div>
          <TrustLine className="mt-4 justify-center" />
        </Reveal>
      </Container>
    </section>
  );
}
