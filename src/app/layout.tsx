import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://macvoice.akshatt.in"),
  title: "MacVoice — Local-First Voice Keyboard for macOS",
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
  ],
  authors: [{ name: "Akshat Thakur", url: "https://akshatt.in" }],
  creator: "Akshat Thakur",
  publisher: "MacVoice",
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
    title: "MacVoice — Speak. Type. Done.",
    description:
      "The ultra-lightweight, 100% on-device voice typing utility for Mac power users. 784 KB package. Zero cloud audio.",
    siteName: "MacVoice",
    images: [
      {
        url: "/brand/macvoice-icon-dark-1024.png",
        width: 1024,
        height: 1024,
        alt: "MacVoice App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacVoice — Speak. Type. Done.",
    description:
      "The ultra-lightweight, on-device voice keyboard for Mac power users. 784 KB package. < 150ms live streaming.",
    images: ["/brand/macvoice-icon-dark-1024.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
