import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/lib/faq";

/**
 * Uses native <details>/<summary> so every answer is in the server-rendered
 * HTML (crawlable by Google and AI answer engines) while still collapsing
 * visually. No client JavaScript needed.
 */
export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#F5F5F7] border-t border-[#E8E8ED]">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Clear, Honest Answers."
          description="What MacVoice does, what it needs from your Mac, and what you get when you buy it."
        />

        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => (
            <details
              key={faq.question}
              open={idx === 0}
              className="group rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] overflow-hidden shadow-sm"
            >
              <summary className="w-full p-5 cursor-pointer list-none flex items-center justify-between gap-4 hover:bg-[#F5F5F7]/50 transition-colors [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm sm:text-base font-semibold text-[#1D1D1F]">
                  {faq.question}
                </h3>
                <ChevronDown className="w-4 h-4 text-[#6E6E73] shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-[#0071E3]" />
              </summary>
              <div className="px-5 pb-5 pt-3 text-xs sm:text-sm text-[#6E6E73] leading-relaxed border-t border-[#E8E8ED]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
