"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How is MacVoice different from Apple's built-in dictation?",
      answer:
        "Apple Dictation types out all your vocal fillers ('um', 'uh', hesitations), pops up an intrusive floating microphone bubble that covers your text, and frequently drops characters inside VS Code and terminals. Saying 'new line' in Slack or WhatsApp also accidentally fires your message. MacVoice fixes every one of these: it strips vocal fillers in under 0.1ms, has zero screen clutter, works across coding editors, and intelligently sends Shift+Return in chat apps.",
    },
    {
      question: "How does MacVoice type into applications? Does it use copy-paste?",
      answer:
        "No. Unlike other speech tools that dump transcribed text into your system clipboard (NSPasteboard) and fire a simulated Cmd+V paste command, MacVoice uses deep macOS Quartz HID integration (CGEvent posted directly to .cghidEventTap). It synthesizes authentic hardware key-down and key-up event pairs with human typing cadence. Your existing clipboard contents (passwords, code snippets, links) remain 100% untouched.",
    },
    {
      question: "Does MacVoice work on websites or software where copy-paste is disabled?",
      answer:
        "Yes, absolutely. Because MacVoice synthesizes genuine physical keyboard events directly into the macOS Window Server, web scripts with onpaste='return false;' or enterprise applications with locked context menus cannot block it. To the operating system and destination application, MacVoice's input is indistinguishable from physical fingers typing on an Apple Magic Keyboard.",
    },
    {
      question: "Why is the download only 784 KB? Are there hidden downloads?",
      answer:
        "Unlike Electron or Python-based tools that bundle gigabytes of local LLMs and heavy runtimes, MacVoice is written in pure native Swift. It directly calls Apple's high-performance SpeechAnalyzer frameworks built into macOS 26+. If your system has not previously downloaded Apple's speech recognition assets for your language, macOS will download them once in the background (~30 seconds) via system settings.",
    },
    {
      question: "Does MacVoice send my voice or text to any external server?",
      answer:
        "No. MacVoice operates 100% on-device in resident RAM. It creates zero outbound network sockets during voice typing. Your private code, customer conversations, and internal notes never touch the public internet.",
    },
    {
      question: "Which macOS versions and Macs are supported?",
      answer:
        "MacVoice requires macOS 26.0 or later running on Apple Silicon (M1, M2, M3, M4 Macs). It utilizes Apple's modern SpeechAnalyzer and Neural Engine hardware acceleration available in macOS 26.",
    },
    {
      question: "Can I customize the keyboard shortcut?",
      answer:
        "Yes! The default shortcut is Control + Option + Space (⌃⌥Space). You can click the MacVoice menu bar icon, open Settings, and record any custom shortcut combination you prefer.",
    },
    {
      question: "Does MacVoice overwrite my system clipboard?",
      answer:
        "No. MacVoice is designed around a dedicated keyboard-event insertion path (CGEvent synthesis) rather than copy-pasting via NSPasteboard. What you previously copied remains safely in your clipboard.",
    },
    {
      question: "Can I use my license on multiple Macs?",
      answer:
        "Yes. Your single $9 purchase entitles you to install and use MacVoice on up to 5 personal Macs that you own and operate. No DRM, no serial numbers, and no activation servers.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 14-day no-questions-asked refund guarantee. If MacVoice does not work flawlessly in your workflow, email support@macvoice.app with your checkout receipt and we will refund you in full.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#F5F5F7] border-t border-[#E8E8ED]">
      <Container size="narrow">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Clear, Honest Answers."
          description="Everything you need to know about MacVoice's architecture, permissions, and purchase terms."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E8E8ED] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F5F5F7]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1D1D1F]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6E6E73] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0071E3]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6E6E73] leading-relaxed border-t border-[#E8E8ED]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
