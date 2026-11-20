"use client";

import React, { useState } from "react";
import { Check, Link2 } from "lucide-react";

const SITE = "https://macvoice.akshatt.in";
const POST = "MacVoice: free, private voice typing for Mac. Press a shortcut, talk, and it types in any app.";

/** Word of mouth is the main growth channel, so make sharing one click. */
export function ShareMacVoice() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", SITE);
    }
  };

  const linkClass =
    "inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-4 text-[14px] font-medium text-ink shadow-e1 transition-colors duration-100 hover:border-line-strong";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        className={linkClass}
        href={`https://x.com/intent/post?text=${encodeURIComponent(POST)}&url=${encodeURIComponent(SITE)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Post on X
      </a>
      <a
        className={linkClass}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on LinkedIn
      </a>
      <button type="button" onClick={copy} className={linkClass}>
        {copied ? <Check className="h-4 w-4 text-success-ink" aria-hidden="true" /> : <Link2 className="h-4 w-4" aria-hidden="true" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
