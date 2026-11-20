/**
 * Single source of truth for the homepage FAQ. Used by the visible FAQ
 * section and by the FAQPage JSON-LD, so the two can never drift apart.
 *
 * Every answer here must match what the shipped app actually does
 * (see the Typer repo: Sources/VoiceTypingApp/main.swift and
 * Sources/VoiceTypingCore/Polishing/NativeSwiftTranscriptPolisher.swift).
 *
 * Style: plain words first. Technical detail, if any, goes in a second
 * paragraph separated by a blank line ("\n\n").
 */
export type FAQGroup = "Privacy" | "The app" | "Pricing";

export interface FAQItem {
  group: FAQGroup;
  question: string;
  answer: string;
}

export const FAQ_GROUPS: FAQGroup[] = ["Privacy", "The app", "Pricing"];

export const homeFaqs: FAQItem[] = [
  // ---------------- Privacy ----------------
  {
    group: "Privacy",
    question: "Does MacVoice send my voice or text to a server?",
    answer:
      "No. Your voice is turned into text on your Mac, and nothing you say is uploaded or saved. There's no account, no analytics and no history.\n\nMacVoice uses Apple's on-device speech engine. Audio lives only in memory while you dictate. The one exception is the first run, when macOS itself may download Apple's speech model for your language.",
  },
  {
    group: "Privacy",
    question: "Why does MacVoice need Microphone and Accessibility access?",
    answer:
      "Microphone access lets MacVoice hear you. Accessibility access lets it type into other apps; macOS asks for this for any app that types on your behalf.\n\nMacVoice uses Accessibility to send keyboard events (CGEvent) to the app you're typing in, and to read the few characters just before your cursor so spacing and capitals come out right. Nothing it reads is stored or sent anywhere.",
  },
  {
    group: "Privacy",
    question: "Does MacVoice use copy-paste? Will it change my clipboard?",
    answer:
      "No. MacVoice never touches your clipboard, so whatever you copied stays exactly as it was.\n\nMany dictation apps put the text on your clipboard and press Cmd+V for you (some then restore your old clipboard). MacVoice sends the text as keyboard input instead, the same way a keyboard does.",
  },
  // ---------------- The app ----------------
  {
    group: "The app",
    question: "What does MacVoice actually do?",
    answer:
      "Click into any text box on your Mac, press Control + Option + Space, and talk. MacVoice types what you say right where your cursor is, in whatever app you're using: Slack, Mail, Notes, VS Code, Google Docs in Safari or Chrome, and so on. Press the shortcut again to stop.",
  },
  {
    group: "The app",
    question: "How is MacVoice different from Apple's built-in dictation?",
    answer:
      "It cleans up after you. MacVoice removes 'um' and 'uh', fixes missing apostrophes ('dont' → 'don't'), and follows commands like 'new line', 'bullet point' and 'scratch that'. It also learns your words, never sends a half-written chat message, and keeps Terminal commands runnable.\n\nRecognition itself uses Apple's own on-device speech engine, so accuracy is in the same family.",
  },
  {
    group: "The app",
    question: "Does it work in fields where pasting is blocked?",
    answer:
      "Usually, yes. MacVoice types the text as keyboard input instead of pasting it, so websites that block paste generally accept it.\n\nPassword fields are the exception: when macOS Secure Input is on, MacVoice deliberately refuses to type.",
  },
  {
    group: "The app",
    question: "What can I say to format text?",
    answer:
      "Say 'new line', 'new paragraph', 'bullet point', 'comma', 'question mark', 'exclamation mark' or 'full stop', or end a sentence with 'period'. Say 'scratch that' to delete the last sentence MacVoice typed.\n\nThese work in Polished mode (the default). MacVoice is careful with them: 'the next line of code' or 'a long period' are typed as normal words.",
  },
  {
    group: "The app",
    question: "Can it learn names and technical words?",
    answer:
      "Yes. In Settings → Words, list names, product terms and jargon like 'Kubernetes', and the recognizer will prefer your spellings.\n\nYou can also add replacements written as 'what I say => what to type', for example 'my email => name@example.com'.",
  },
  {
    group: "The app",
    question: "Does it work in Terminal?",
    answer:
      "Yes. In Terminal apps MacVoice only removes fillers. It won't capitalise your command, add a trailing period or turn 'new line' into Enter, so commands stay runnable.\n\nRecognised apps: Terminal, iTerm2, Warp, Ghostty, kitty, Alacritty, WezTerm and Hyper.",
  },
  {
    group: "The app",
    question: "Which Macs and macOS versions are supported?",
    answer:
      "MacVoice needs macOS 26 (Tahoe) or later. It's designed for and tested on Apple Silicon Macs (M1 and newer).\n\nmacOS 26 is required because MacVoice is built on Apple's SpeechAnalyzer engine, which first shipped there.",
  },
  {
    group: "The app",
    question: "Which languages does it support?",
    answer:
      "MacVoice uses your Mac's system language if Apple's on-device engine supports it. English gets the full cleanup: fillers, apostrophes, spoken punctuation and 'scratch that'.\n\nOther supported languages are transcribed and capitalised, without the English-only cleanup rules.",
  },
  {
    group: "The app",
    question: "Can I change the keyboard shortcut?",
    answer:
      "Yes. Open MacVoice Settings from the menu bar, go to the Shortcut tab, click the shortcut button and press any combination that includes Control, Option or Command.\n\nIf another app already uses it, MacVoice keeps your previous shortcut.",
  },
  {
    group: "The app",
    question: "Why is the download so small?",
    answer:
      "MacVoice uses the speech engine already built into macOS instead of bundling its own AI model, so the app is under 1 MB.\n\nIf your Mac has never used on-device speech for your language, macOS downloads Apple's model once on first use.",
  },
  // ---------------- Pricing ----------------
  {
    group: "Pricing",
    question: "Is MacVoice really free?",
    answer:
      "Yes. Every feature is free to download and use, with no account, no trial and no time limit. Use it on as many of your Macs as you like.",
  },
  {
    group: "Pricing",
    question: "Why is it free?",
    answer:
      "MacVoice runs entirely on your Mac, so there are no servers to pay for each time you talk. I'd rather it reach everyone who types all day than sit behind a paywall.\n\nPeople who love it can back it with a one-time contribution, and that funds development.",
  },
  {
    group: "Pricing",
    question: "Will it stay free?",
    answer:
      "Everything MacVoice does today stays free. If I ever add paid Pro features, they'll be new features, and early supporters get them free.",
  },
  {
    group: "Pricing",
    question: "What do supporters get?",
    answer:
      "Any future MacVoice Pro features free, early builds before public release, and a direct line to me. Contributions are one-time, from $3, paid through Polar.",
  },
  {
    group: "Pricing",
    question: "Can I get a refund on a contribution?",
    answer:
      "Yes, within 14 days, no questions asked. Email akshatthakur22@gmail.com with your receipt.",
  },
];
