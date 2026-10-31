import React from "react";
import { Container } from "@/components/ui/Container";

export function MetricsBar() {
  const metrics = [
    {
      value: "3x Faster",
      label: "Than Typing by Hand",
      detail: "Speak effortlessly at 150+ words per minute. Draft emails, documents, and messages without tiring your wrists.",
    },
    {
      value: "Instant",
      label: "Real-Time Typing",
      detail: "Words appear right at your cursor as you talk. No waiting around for an AI recording to finish processing.",
    },
    {
      value: "100% Private",
      label: "Never Leaves Your Mac",
      detail: "Your voice is processed completely on-device. Zero audio is ever uploaded to cloud servers or used to train models.",
    },
    {
      value: "$9 Once",
      label: "No Subscriptions",
      detail: "Stop paying $15 every month for voice tools. Pay once, own it forever, and install on up to 5 of your Macs.",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#E8E8ED]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F] tracking-tight">
                {m.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] pt-0.5">
                {m.label}
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed pt-1">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
