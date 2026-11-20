import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AppIcon } from "@/components/ui/AppIcon";
import { Button } from "@/components/ui/Button";
import { SetupSteps } from "@/components/support/SetupSteps";
import { ShareMacVoice } from "@/components/support/ShareMacVoice";
import { SUPPORTER_PERKS } from "@/lib/support";

export const metadata: Metadata = {
  title: "Thank you for backing MacVoice",
  description: "Thank you for supporting MacVoice. Download it and set up in under a minute.",
  robots: { index: false, follow: false, nocache: true },
};

/** Where Polar sends people after a contribution. */
export default function SuccessPage() {
  return (
    <div className="py-12 lg:py-20">
      <Container className="max-w-[880px]">
        <div className="flex flex-col items-center text-center">
          <AppIcon className="h-16 w-16 rounded-[18px] shadow-e3" label="MacVoice app icon" />
          <h1 className="text-h2 mt-6 text-balance">
            <span className="text-ink">Thank you.</span>{" "}
            <span className="text-ink-3 sm:block">You&apos;re an early supporter.</span>
          </h1>
          <p className="text-body-lg mt-4 max-w-[560px] text-ink-2">
            Your contribution goes straight into making MacVoice better. Your receipt is on its way from Polar.
          </p>
          <div className="mt-8">
            <Button href="/download" size="lg" arrow>
              Download MacVoice
            </Button>
          </div>
        </div>

        <section aria-labelledby="perks" className="mt-12 rounded-panel border border-line bg-surface p-6 shadow-e2 sm:p-8">
          <h2 id="perks" className="text-h3 text-ink">
            What you get as a supporter
          </h2>
          <ul className="mt-3 space-y-2 text-body text-ink-2">
            {SUPPORTER_PERKS.map((p) => (
              <li key={p}>· {p}</li>
            ))}
          </ul>
          <p className="text-body mt-4 text-ink-2">
            Reply to your receipt email or write to{" "}
            <a href="mailto:akshatthakur22@gmail.com" className="font-medium text-accent underline-offset-4 hover:underline">
              akshatthakur22@gmail.com
            </a>{" "}
            any time. I read every message.
          </p>
        </section>

        <section aria-labelledby="setup" className="mt-12">
          <h2 id="setup" className="text-eyebrow mb-4 text-ink-2">
            Set up in under a minute
          </h2>
          <SetupSteps />
        </section>

        <section aria-labelledby="share" className="mt-12">
          <h2 id="share" className="text-h3 text-ink">
            One more way to help
          </h2>
          <p className="text-body mt-1 text-ink-2">Tell one friend who types all day.</p>
          <div className="mt-4">
            <ShareMacVoice />
          </div>
        </section>
      </Container>
    </div>
  );
}
