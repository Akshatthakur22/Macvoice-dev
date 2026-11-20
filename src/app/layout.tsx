import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/Reveal";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

const TITLE = "MacVoice — Talk to any Mac app, typed as you speak";
const DESCRIPTION =
  "Press a shortcut, talk, and MacVoice types clean text at your cursor in any Mac app. On-device and private. Pay once, $9. No subscription.";

export const metadata: Metadata = {
  metadataBase: new URL("https://macvoice.akshatt.in"),
  title: {
    default: TITLE,
    template: "%s | MacVoice",
  },
  description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM Context" />
        {/* Lets CSS hide reveal-on-scroll content only when JS can reveal it again. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </div>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
