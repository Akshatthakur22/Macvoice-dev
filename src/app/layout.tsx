import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://macvoice.akshatt.in"),
  title: {
    default: "MacVoice — Local-First Voice Keyboard for macOS",
    template: "%s | MacVoice",
  },
  description:
    "Speak naturally and turn speech into text in the app you're already using. Sub-150ms live cursor streaming, instant filler removal, zero cloud servers, and chat-safe newlines for Mac power users.",
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
    title: "MacVoice — Local-First Voice Keyboard for macOS",
    description:
      "Sub-150ms real-time voice typing for macOS. 100% on-device speech recognition, zero server uploads, 784 KB native Swift app. $9 one-time purchase.",
    images: [
      {
        url: "/brand/macvoice-icon-dark-1024.png",
        width: 1024,
        height: 1024,
        alt: "MacVoice App Icon — Local Voice Typing for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacVoice — Local-First Voice Keyboard for macOS",
    description:
      "Sub-150ms real-time voice typing for macOS. 100% on-device speech recognition, zero server uploads, 784 KB native Swift app.",
    images: ["/brand/macvoice-icon-dark-1024.png"],
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
