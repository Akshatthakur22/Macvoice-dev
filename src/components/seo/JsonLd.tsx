import React from "react";
import { homeFaqs } from "@/lib/faq";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function JsonLd({ schema }: { schema: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://macvoice.akshatt.in/#software",
      name: "MacVoice",
      url: "https://macvoice.akshatt.in",
      image: "https://macvoice.akshatt.in/brand/macvoice-icon-dark-1024.png",
      description:
        "Private voice typing for Mac. Press a shortcut, speak, and MacVoice types clean text at your cursor in any app, using Apple's on-device speech engine. Removes filler words, follows spoken commands, never uses your clipboard. Free to download and use.",
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Dictation / Speech to Text",
      operatingSystem: "macOS 26 or later",
      softwareVersion: "0.1.2",
      fileSize: "1MB",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://macvoice.akshatt.in/pricing",
        seller: {
          "@type": "Person",
          name: "Akshat Thakur",
          url: "https://akshatt.in",
        },
      },
      featureList: [
        "Types at your cursor in any Mac app with a global shortcut (default Control + Option + Space)",
        "On-device speech recognition with Apple SpeechAnalyzer; no audio leaves the Mac",
        "Types with keyboard events instead of the clipboard, so copied content is never touched",
        "Removes filler words (um, uh) and stutters; fixes missing apostrophes and capitalization",
        "Spoken commands: new line, new paragraph, bullet point, comma, question mark, period, scratch that",
        "Custom words and spoken replacements",
        "Chat-safe line breaks (Shift+Return) in Slack, WhatsApp, Teams, Discord and Telegram",
        "Terminal-aware: keeps shell commands runnable",
        "Verbatim and Polished modes",
        "Under 1 MB native Swift app, no account, no analytics",
        "Free: every feature, no account, no trial, no subscription",
      ],
      author: {
        "@type": "Person",
        name: "Akshat Thakur",
        url: "https://akshatt.in",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://macvoice.akshatt.in/#organization",
      name: "MacVoice",
      url: "https://macvoice.akshatt.in",
      logo: "https://macvoice.akshatt.in/brand/macvoice-icon-dark-1024.png",
      founder: {
        "@type": "Person",
        name: "Akshat Thakur",
        url: "https://akshatt.in",
      },
      sameAs: [
        "https://github.com/Akshatthakur22",
        "https://www.linkedin.com/in/akshatthakur22/",
        "https://macbase.app/apps/macvoice",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://macvoice.akshatt.in/#website",
      name: "MacVoice",
      url: "https://macvoice.akshatt.in",
      description: "Private voice typing for Mac",
      publisher: {
        "@id": "https://macvoice.akshatt.in/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://macvoice.akshatt.in/#faq",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

