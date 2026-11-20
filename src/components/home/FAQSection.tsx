import React from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQ_GROUPS, homeFaqs } from "@/lib/faq";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Native <details>/<summary>: every answer is in the server-rendered HTML
 * (crawlable) and it needs no client JavaScript.
 * Grid: Privacy and Pricing stack on the left, The app spans the right.
 */
export function FAQSection() {
  return (
    <section id="faq" className="py-12 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeader eyebrow="FAQ" title="Questions, answered." muted="Privacy first." />
        </Reveal>

        <div className="mx-auto grid max-w-[1080px] items-start gap-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
          {FAQ_GROUPS.map((group) => (
            <Reveal
              as="div"
              key={group}
              className={cn(
                "rounded-card border border-line bg-surface p-2 shadow-e1",
                group === "The app" && "lg:row-span-2"
              )}
            >
              <h3 className="text-eyebrow px-4 pb-2 pt-4 text-ink-2">{group}</h3>
              <div className="divide-y divide-line">
                {homeFaqs
                  .filter((f) => f.group === group)
                  .map((faq) => (
                    <details key={faq.question} className="group px-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <Plus
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-ink-2 transition-transform duration-200 ease-soft group-open:rotate-45"
                        />
                      </summary>
                      <div className="space-y-3 pb-5 text-body text-ink-2">
                        {faq.answer.split("\n\n").map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </details>
                  ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
