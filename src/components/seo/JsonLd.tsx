import React from "react";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function JsonLd({ schema }: { schema: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
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
        "Free, local-first voice typing keyboard for macOS. Native Swift utility with sub-150ms live cursor streaming, filler word removal, chat-safe newlines, and zero network telemetry.",
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Speech Recognition / Dictation Utility",
      operatingSystem: "macOS 26.0+ (Apple Silicon M1/M2/M3/M4)",
      softwareVersion: "1.0.0",
      fileSize: "784KB",
      offers: {
        "@type": "Offer",
        price: "9.00",
        priceCurrency: "USD",
        priceValidUntil: "2028-12-31",
        availability: "https://schema.org/InStock",
        url: "https://macvoice.akshatt.in/pricing",
        seller: {
          "@type": "Person",
          name: "Akshat Thakur",
          url: "https://akshatt.in",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "128",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Sub-150ms live cursor streaming directly into active input fields",
        "100% on-device speech processing with zero network sockets",
        "Authentic Quartz HID keystroke injection preserving system clipboard",
        "Smart Chat-Safe Shift+Return newline logic in Slack, Discord, and Teams",
        "Instant sub-0.1ms vocal filler word removal (um, uh, hesitations)",
        "Polished and Verbatim dual voice typing modes",
        "Minimal 784 KB DMG package size with ~60 MB idle RAM footprint",
        "Valid on up to 5 personal Mac computers per license",
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
      description: "Local-First Voice Keyboard for macOS",
      publisher: {
        "@id": "https://macvoice.akshatt.in/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://macvoice.akshatt.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is MacVoice different from Apple's built-in dictation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Apple Dictation types out all your vocal fillers ('um', 'uh', hesitations), pops up an intrusive floating microphone bubble that covers your text, and frequently drops characters inside VS Code and terminals. Saying 'new line' in Slack or WhatsApp also accidentally fires your message. MacVoice fixes every one of these: it strips vocal fillers in under 0.1ms, has zero screen clutter, works across coding editors, and intelligently sends Shift+Return in chat apps.",
          },
        },
        {
          "@type": "Question",
          name: "How does MacVoice type into applications? Does it use copy-paste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Unlike other speech tools that dump transcribed text into your system clipboard (NSPasteboard) and fire a simulated Cmd+V paste command, MacVoice uses deep macOS Quartz HID integration (CGEvent posted directly to .cghidEventTap). It synthesizes authentic hardware key-down and key-up event pairs with human typing cadence. Your existing clipboard contents (passwords, code snippets, links) remain 100% untouched.",
          },
        },
        {
          "@type": "Question",
          name: "Does MacVoice work on websites or software where copy-paste is disabled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely. Because MacVoice synthesizes genuine physical keyboard events directly into the macOS Window Server, web scripts with onpaste='return false;' or enterprise applications with locked context menus cannot block it. To the operating system and destination application, MacVoice's input is indistinguishable from physical fingers typing on an Apple Magic Keyboard.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the download only 784 KB? Are there hidden downloads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike Electron or Python-based tools that bundle gigabytes of local LLMs and heavy runtimes, MacVoice is written in pure native Swift. It directly calls Apple's high-performance SpeechAnalyzer frameworks built into macOS 26+. If your system has not previously downloaded Apple's speech recognition assets for your language, macOS will download them once in the background (~30 seconds) via system settings.",
          },
        },
        {
          "@type": "Question",
          name: "Does MacVoice send my voice or text to any external server?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MacVoice operates 100% on-device in resident RAM. It creates zero outbound network sockets during voice typing. Your private code, customer conversations, and internal notes never touch the public internet.",
          },
        },
        {
          "@type": "Question",
          name: "Which macOS versions and Macs are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MacVoice requires macOS 26.0 or later running on Apple Silicon (M1, M2, M3, M4 Macs). It utilizes Apple's modern SpeechAnalyzer and Neural Engine hardware acceleration available in macOS 26.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize the keyboard shortcut?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! The default shortcut is Control + Option + Space (⌃⌥Space). You can click the MacVoice menu bar icon, open Settings, and record any custom shortcut combination you prefer.",
          },
        },
        {
          "@type": "Question",
          name: "Does MacVoice overwrite my system clipboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MacVoice is designed around a dedicated keyboard-event insertion path (CGEvent synthesis) rather than copy-pasting via NSPasteboard. What you previously copied remains safely in your clipboard.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use my license on multiple Macs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Your single $9 purchase entitles you to install and use MacVoice on up to 5 personal Macs that you own and operate. No DRM, no serial numbers, and no activation servers.",
          },
        },
        {
          "@type": "Question",
          name: "What is your refund policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a 14-day no-questions-asked refund guarantee. If MacVoice does not work flawlessly in your workflow, email akshatthakur22@gmail.com with your checkout receipt and we will refund you in full.",
          },
        },
      ],
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

