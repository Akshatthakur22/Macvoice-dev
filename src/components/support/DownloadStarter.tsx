"use client";

import React, { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

/**
 * Starts the DMG download once when the page opens. Checks availability
 * first so nobody is left waiting on a download that will never come.
 */
export function DownloadStarter() {
  const [unavailable, setUnavailable] = useState(false);

  // The cleanup cancels the timer, so the download starts exactly once,
  // even when React mounts effects twice in development.
  useEffect(() => {
    const t = window.setTimeout(async () => {
      try {
        const res = await fetch("/api/download", { method: "HEAD" });
        if (!res.ok) {
          setUnavailable(true);
          return;
        }
      } catch {
        // Network hiccup: try the download anyway.
      }
      const a = document.createElement("a");
      a.href = "/api/download";
      a.download = "MacVoice.dmg";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 300);
    return () => window.clearTimeout(t);
  }, []);

  if (!unavailable) return null;
  return (
    <p role="alert" className="mx-auto mt-6 flex max-w-[560px] items-start gap-2 rounded-tile border border-line bg-surface p-4 text-left text-body text-ink shadow-e1">
      <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-accent-warm" aria-hidden="true" />
      <span>
        The download isn&apos;t available for a moment. Email{" "}
        <a href="mailto:akshatthakur22@gmail.com" className="font-medium text-accent underline-offset-4 hover:underline">
          akshatthakur22@gmail.com
        </a>{" "}
        and I&apos;ll send it to you directly.
      </span>
    </p>
  );
}
