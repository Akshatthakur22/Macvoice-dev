import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AppIcon } from "@/components/ui/AppIcon";
import { SetupSteps } from "@/components/support/SetupSteps";
import { SupportPicker } from "@/components/support/SupportPicker";
import { ShareMacVoice } from "@/components/support/ShareMacVoice";
import { DownloadStarter } from "@/components/support/DownloadStarter";

export const metadata: Metadata = {
  title: "Downloading MacVoice",
  description: "Your free MacVoice download is starting. Set up in under a minute.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://macvoice.akshatt.in/download" },
};

export default function DownloadPage() {
  return (
    <div className="py-12 lg:py-20">
      <Container className="max-w-[880px]">
        <div className="flex flex-col items-center text-center">
          <AppIcon className="h-16 w-16 rounded-[18px] shadow-e3" label="MacVoice app icon" />
          <h1 className="text-h2 mt-6 text-balance">
            <span className="text-ink">Your download is starting.</span>{" "}
            <span className="text-ink-3 sm:block">Free, every feature.</span>
          </h1>
          <p className="text-body-lg mt-4 text-ink-2">
            Didn&apos;t start?{" "}
            <a href="/api/download" className="font-medium text-accent underline-offset-4 hover:underline">
              Download MacVoice.dmg
            </a>{" "}
            · macOS 26 or later
          </p>
          <DownloadStarter />
        </div>

        <section aria-labelledby="setup" className="mt-12">
          <h2 id="setup" className="text-eyebrow mb-4 text-ink-2">
            Set up in under a minute
          </h2>
          <SetupSteps />
        </section>

        <section aria-labelledby="back-it" className="mt-12 rounded-panel border border-line bg-surface p-6 shadow-e2 sm:p-8">
          <h2 id="back-it" className="text-h3 text-ink">
            If MacVoice earns a place on your Mac, back it.
          </h2>
          <p className="text-body mt-2 max-w-[600px] text-ink-2">
            It&apos;s free, and it stays free. I&apos;m one developer, and contributions from people who love it fund
            every update. Totally optional.
          </p>
          <SupportPicker className="mt-6" />
        </section>

        <section aria-labelledby="share" className="mt-12">
          <h2 id="share" className="text-h3 text-ink">
            Know someone who types all day?
          </h2>
          <p className="text-body mt-1 text-ink-2">Sharing MacVoice helps more than you&apos;d think.</p>
          <div className="mt-4">
            <ShareMacVoice />
          </div>
        </section>

        <p className="text-body mt-12 text-ink-2">
          Something not working, or an idea?{" "}
          <a href="mailto:akshatthakur22@gmail.com" className="font-medium text-accent underline-offset-4 hover:underline">
            Email me
          </a>
          . I read every message.
        </p>
      </Container>
    </div>
  );
}
