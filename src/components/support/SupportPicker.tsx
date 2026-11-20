"use client";

import React, { useId, useState } from "react";
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import {
  SUPPORT_MAX_USD,
  SUPPORT_MIN_USD,
  SUPPORT_SUGGESTED_USD,
  SUPPORT_TIERS,
  SUPPORTER_PERKS,
  isValidSupportAmount,
} from "@/lib/support";
import { cn } from "@/lib/utils";

/** Opens Polar checkout for a one-time contribution of `usd` dollars. */
function useContribution() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const start = async (usd: number) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: usd }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Couldn't start checkout.");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't start checkout. Please try again.");
      setLoading(false);
    }
  };

  return { start, loading, error };
}

/**
 * Optional one-time contribution. Never blocks the download; the app is
 * free either way.
 */
export function SupportPicker({ className, dark }: { className?: string; dark?: boolean }) {
  const [choice, setChoice] = useState<number | "custom">(SUPPORT_SUGGESTED_USD);
  const [custom, setCustom] = useState("");
  const { start, loading, error } = useContribution();
  const customId = useId();

  const amount = choice === "custom" ? Number(custom) : choice;
  const valid = isValidSupportAmount(amount);

  const chip = (selected: boolean) =>
    cn(
      "flex cursor-pointer flex-col items-center justify-center rounded-tile px-3 py-3 text-center ring-1 transition-colors duration-100",
      dark
        ? selected
          ? "bg-white text-ink ring-white"
          : "bg-white/5 text-white ring-white/15 hover:bg-white/10"
        : selected
          ? "bg-ink text-white ring-ink"
          : "bg-surface text-ink ring-line hover:ring-line-strong"
    );

  return (
    <div className={className}>
      <fieldset>
        <legend className="sr-only">Choose an amount</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {SUPPORT_TIERS.map((t) => (
            <label key={t.usd} className={chip(choice === t.usd)}>
              <input
                type="radio"
                name="support-amount"
                value={t.usd}
                checked={choice === t.usd}
                onChange={() => setChoice(t.usd)}
                className="sr-only"
              />
              <span className="text-[20px] font-semibold tracking-[-0.02em]">${t.usd}</span>
              <span className={cn("text-[12px]", choice === t.usd ? "opacity-80" : "opacity-65")}>
                {t.usd === SUPPORT_SUGGESTED_USD ? `${t.label} · suggested` : t.label}
              </span>
            </label>
          ))}
          <label className={chip(choice === "custom")}>
            <input
              type="radio"
              name="support-amount"
              value="custom"
              checked={choice === "custom"}
              onChange={() => setChoice("custom")}
              className="sr-only"
            />
            <span className="text-[20px] font-semibold tracking-[-0.02em]">Other</span>
            <span className={cn("text-[12px]", choice === "custom" ? "opacity-80" : "opacity-65")}>
              ${SUPPORT_MIN_USD} or more
            </span>
          </label>
        </div>
      </fieldset>

      {choice === "custom" ? (
        <div className="mt-3">
          <label htmlFor={customId} className={cn("text-caption", dark ? "text-white/70" : "text-ink-2")}>
            Amount in US dollars
          </label>
          <div
            className={cn(
              "mt-1 flex items-center rounded-tile px-3 ring-1 focus-within:ring-2 focus-within:ring-accent",
              dark ? "bg-white/5 ring-white/15" : "bg-surface ring-line"
            )}
          >
            <span className={dark ? "text-white/60" : "text-ink-2"}>$</span>
            <input
              id={customId}
              inputMode="numeric"
              pattern="[0-9]*"
              autoFocus
              value={custom}
              onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, "").slice(0, 3))}
              placeholder={String(SUPPORT_SUGGESTED_USD)}
              className="h-11 w-full bg-transparent pl-1 text-[16px] outline-none"
            />
          </div>
          {custom && !valid ? (
            <p className={cn("mt-1 text-caption", dark ? "text-white/70" : "text-ink-2")}>
              Between ${SUPPORT_MIN_USD} and ${SUPPORT_MAX_USD}, please.
            </p>
          ) : null}
        </div>
      ) : null}

      <button
        type="button"
        disabled={!valid || loading}
        onClick={() => valid && start(amount)}
        className={cn(
          "group mt-4 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-100 disabled:cursor-not-allowed disabled:opacity-50",
          dark ? "bg-white text-ink hover:bg-white/90" : "bg-accent text-white hover:bg-accent-hover"
        )}
      >
        {loading ? "Opening checkout…" : valid ? `Back MacVoice with $${amount}` : "Choose an amount"}
        {!loading ? (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-soft group-hover:translate-x-[2px]" aria-hidden="true" />
        ) : null}
      </button>

      {error ? (
        <p role="alert" className="mt-3 flex items-center gap-2 text-caption text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}

      <ul className={cn("mt-4 space-y-1.5 text-[14px]", dark ? "text-white/75" : "text-ink-2")}>
        {SUPPORTER_PERKS.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-white" : "text-success-ink")} aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
      <p className={cn("mt-3 text-caption", dark ? "text-white/55" : "text-ink-2")}>
        One-time, paid securely through Polar. 14-day refund, no questions asked.
      </p>
    </div>
  );
}
