/**
 * Single source of truth for the homepage FAQ. Used by the visible FAQ
 * section and by the FAQPage JSON-LD, so the two can never drift apart.
 *
 * Every answer here must match what the shipped app actually does
 * (see the Typer repo: Sources/VoiceTypingApp/main.swift and
 * Sources/VoiceTypingCore/Polishing/NativeSwiftTranscriptPolisher.swift).
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    question: "What does MacVoice actually do?",
    answer:
      "You click into any text box on your Mac, press Control + Option + Space, and talk. MacVoice turns your speech into text and types it right where your cursor is, in whatever app you're using: Slack, Mail, Notes, VS Code, Google Docs in Safari or Chrome, and so on. Press the shortcut again to stop.",
  },
  {
    question: "How is MacVoice different from Apple's built-in dictation?",
    answer:
      "MacVoice uses Apple's own on-device speech engine, so recognition quality is in the same family. The difference is what happens after: MacVoice removes 'um' and 'uh', fixes missing apostrophes ('dont' → 'don't'), follows spoken commands like 'new line', 'bullet point' and 'scratch that', lets you teach it your own words and shortcuts, sends a safe line break in chat apps instead of pressing Send, and keeps shell commands untouched in Terminal.",
  },
  {
    question: "Does MacVoice use copy-paste? Will it change my clipboard?",
    answer:
      "No. Many dictation apps put the text on your clipboard and press Cmd+V for you (some then restore your old clipboard afterwards). MacVoice never uses the clipboard at all. It sends the text as keyboard input, the same way a keyboard does, so whatever you copied stays exactly as it was.",
  },
  {
    question: "Does it work in fields where pasting is blocked?",
    answer:
      "Usually, yes. Because MacVoice types the text as keyboard input instead of pasting it, websites that block paste generally accept it. Password fields are the exception: when macOS Secure Input is on, MacVoice deliberately refuses to type.",
  },
  {
    question: "What can I say to format text?",
    answer:
      "In Polished mode (the default) you can say 'new line', 'new paragraph', 'bullet point', 'comma', 'question mark', 'exclamation mark', 'full stop', or end a sentence with 'period'. Say 'scratch that' to delete the last sentence MacVoice typed. MacVoice is careful with these words: 'the next line of code' or 'a long period' are typed normally.",
  },
  {
    question: "Can it learn names and technical words?",
    answer:
      "Yes. In Settings → Words you can list custom words (names, product terms, jargon like 'Kubernetes') and Apple's recognizer will prefer those spellings. You can also add replacements, written as 'what I say => what to type', for example 'my email => name@example.com'.",
  },
  {
    question: "Does MacVoice send my voice or text to a server?",
    answer:
      "No. Speech recognition runs on your Mac using Apple's on-device engine. MacVoice has no analytics, no account, and no history: audio lives only in memory while you dictate, and nothing you say is saved to disk. The one exception is the first run, when macOS itself may download Apple's speech model for your language.",
  },
  {
    question: "Does it work in Terminal?",
    answer:
      "Yes. MacVoice recognises Terminal, iTerm2, Warp, Ghostty, kitty, Alacritty, WezTerm and Hyper. In those apps it only removes fillers: it won't capitalise your command, add apostrophes, add a trailing period, or turn 'new line' into Enter, so commands stay runnable.",
  },
  {
    question: "Which Macs and macOS versions are supported?",
    answer:
      "MacVoice needs macOS 26 (Tahoe) or later, because it is built on Apple's new SpeechAnalyzer engine that first shipped in macOS 26. It is designed for and tested on Apple Silicon Macs (M1 and newer).",
  },
  {
    question: "Which languages does it support?",
    answer:
      "MacVoice uses your Mac's system language if Apple's on-device engine supports it. English gets the full cleanup (fillers, apostrophes, spoken punctuation, 'scratch that'). Other supported languages are transcribed and capitalised, without the English-only cleanup rules.",
  },
  {
    question: "Why is the download so small?",
    answer:
      "MacVoice is a native Swift app (under 1 MB) that uses the speech engine already built into macOS instead of bundling its own AI model. If your Mac has never used on-device speech for your language, macOS downloads Apple's model once on first use.",
  },
  {
    question: "Can I change the keyboard shortcut?",
    answer:
      "Yes. Open MacVoice Settings from the menu bar, go to the Shortcut tab, click the shortcut button and press any combination that includes Control, Option or Command. If another app already uses it, MacVoice keeps your previous shortcut.",
  },
  {
    question: "Can I use my license on multiple Macs?",
    answer:
      "Yes. One $9 purchase lets you use MacVoice on up to 5 Macs that you personally own. No accounts, serial numbers or activation servers.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "14 days, no questions asked. If MacVoice doesn't work well for you, email akshatthakur22@gmail.com with your receipt and you'll get a full refund.",
  },
];
