import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://macvoice.akshatt.in"),
  title: {
    default: "MacVoice: Private Voice Typing & Dictation App for Mac",
    template: "%s | MacVoice",
  },
  description:
    "Press a shortcut, talk, and MacVoice types clean text at your cursor in any Mac app. On-device, removes ums, voice commands, never touches your clipboard. $9 once.",
  keywords: [
    "macvoice",
    "voice typing mac",
    "macOS dictation",
    "apple silicon voice keyboard",
    "local voice to text mac",
    "on-device speech recognition",
    "mac dictation utility",
    "developer dictation",
    "best mac dictation app 2026",
    "whisper mac alternative",
    "superwhisper alternative",
    "wispr flow alternative",
    "offline dictation macbook",
    "private voice to text macos",
    "quartz hid voice typing",
    "swift voice typing app",
  ],
  authors: [{ name: "Akshat Thakur", url: "https://akshatt.in" }],
  creator: "Akshat Thakur",
  publisher: "MacVoice",
  category: "technology",
  classification: "macOS Software / Productivity / Speech Recognition",
  alternates: {
    canonical: "https://macvoice.akshatt.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/brand/macvoice-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/macvoice-symbol.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/macvoice-icon-dark-1024.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://macvoice.akshatt.in",
    siteName: "MacVoice",
    title: "MacVoice: Private Voice Typing for Mac",
    description:
      "Talk, and your Mac types it. On-device voice typing that works in any app, removes filler words, and never uploads your voice. $9 once, no subscription.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacVoice: Private Voice Typing for Mac",
    description:
      "Talk, and your Mac types it. On-device voice typing that works in any app, removes filler words, and never uploads your voice. $9 once.",
    creator: "@akshatthakur22",
  },
  other: {
    "llms-txt": "https://macvoice.akshatt.in/llms.txt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM Context" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
