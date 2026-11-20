import React from "react";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AppIcon } from "@/components/ui/AppIcon";
import { Reveal } from "@/components/ui/Reveal";

type Cell = boolean | string;
type Row = { label: string; macvoice: Cell; apple: Cell; wispr: Cell; superwhisper: Cell };

// Competitor facts last checked November 2026 against vendor docs/pricing.
// Only list things that can be verified; re-check before changing.
const ROWS: Row[] = [
  { label: "Text appears while you talk", macvoice: true, apple: true, wispr: "After you stop", superwhisper: "After you stop" },
  { label: "Removes “um” and “uh”", macvoice: true, apple: false, wispr: "Cloud AI", superwhisper: "AI modes" },
  { label: "Voice stays on your Mac", macvoice: true, apple: true, wispr: false, superwhisper: "Local models" },
  { label: "Leaves your clipboard alone", macvoice: true, apple: true, wispr: "Pastes, then restores", superwhisper: "Pastes" },
  { label: "Works offline", macvoice: true, apple: true, wispr: false, superwhisper: "Local models" },
  { label: "Price", macvoice: "$9 once", apple: "Free", wispr: "$144/yr Pro", superwhisper: "~$85/yr Pro" },
  { label: "What you need", macvoice: "macOS 26+", apple: "Built in", wispr: "Account + internet", superwhisper: "Model downloads" },
];

const COLS = [
  { key: "apple", label: "macOS Dictation" },
  { key: "wispr", label: "Wispr Flow" },
  { key: "superwhisper", label: "Superwhisper" },
] as const;

function Value({ v, strong }: { v: Cell; strong?: boolean }) {
  if (v === true)
    return (
      <span className="inline-flex items-center gap-1.5">
        <Check className="h-5 w-5 text-success" strokeWidth={2.5} aria-hidden="true" />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex items-center">
        <X className="h-5 w-5 text-ink-3" aria-hidden="true" />
        <span className="sr-only">No</span>
      </span>
    );
  return <span className={strong ? "font-semibold text-ink" : "text-ink-2"}>{v}</span>;
}

export function ComparisonTable() {
  return (
    <section id="compare" className="py-12 lg:py-20">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Compare"
            title="macOS has Dictation."
            muted="MacVoice cleans up after you."
          />
        </Reveal>

        <Reveal className="-mx-4 overflow-x-auto px-4 py-4 sm:mx-0 sm:px-0">
          <div className="relative mx-auto min-w-[760px] max-w-[1080px]">
            {/* The lifted MacVoice column */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -top-3 left-[28%] w-[20%] rounded-card bg-surface shadow-e3 ring-1 ring-line"
            />
            <table className="relative w-full table-fixed border-collapse text-left text-[15px]">
              <colgroup>
                <col className="w-[28%]" />
                <col className="w-[20%]" />
                <col className="w-[17.33%]" />
                <col className="w-[17.33%]" />
                <col className="w-[17.33%]" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className="px-4 pb-4 pt-5">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="px-5 pb-4 pt-5">
                    <span className="flex items-center gap-2 text-[15px] font-semibold text-ink">
                      <AppIcon className="h-6 w-6" />
                      MacVoice
                    </span>
                  </th>
                  {COLS.map((c) => (
                    <th key={c.key} scope="col" className="px-4 pb-4 pt-5 text-[14px] font-medium text-ink-2">
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-t border-line">
                    <th scope="row" className="px-4 py-4 font-medium text-ink">
                      {r.label}
                    </th>
                    <td className="px-5 py-4">
                      <Value v={r.macvoice} strong />
                    </td>
                    {COLS.map((c) => (
                      <td key={c.key} className="px-4 py-4">
                        <Value v={r[c.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="text-caption mx-auto mt-6 max-w-[640px] text-center text-ink-2">
          Competitor details come from each vendor’s website and docs, last checked November 2026. Prices change, so
          check their sites for the latest.
        </p>
      </Container>
    </section>
  );
}
