export interface BlogCategory {
  slug: string;
  name: string;
  /** Short label for chips and covers. */
  short: string;
  description: string;
  /** Intro paragraph shown on the hub page. */
  intro: string;
  /** Accent colour used on cover images. */
  color: string;
}

export const categories: BlogCategory[] = [
  {
    slug: "mac-dictation",
    name: "Dictation on Mac",
    short: "Mac Dictation",
    description: "How to use, set up and fix dictation on a Mac: Apple Dictation, Voice Control, shortcuts, commands and languages.",
    intro:
      "Everything about talking to type on a Mac: turning Dictation on, the commands it understands, choosing a shortcut and microphone, switching languages, and what to do when it stops working.",
    color: "#0071E3",
  },
  {
    slug: "voice-typing-workflows",
    name: "Voice Typing in Your Apps",
    short: "Workflows",
    description: "Practical guides to dictating in Slack, email, Google Docs, Word, Notion, AI chat tools, code editors and Terminal.",
    intro:
      "Step-by-step guides to using your voice where you actually write: chat apps, email, documents, notes, AI prompts and code, with the gotchas for each.",
    color: "#7C3AED",
  },
  {
    slug: "how-speech-to-text-works",
    name: "How Speech-to-Text Works",
    short: "How It Works",
    description: "Plain-English explanations of speech recognition: how it works, accuracy and word error rate, Whisper, Apple SpeechAnalyzer, and on-device vs cloud.",
    intro:
      "What actually happens between your voice and the text on screen, why accuracy varies, and how the main speech engines compare, explained without jargon.",
    color: "#059669",
  },
  {
    slug: "privacy",
    name: "Privacy & Security",
    short: "Privacy",
    description: "Where your voice goes when you dictate, which apps work offline, permissions, and dictating confidential information.",
    intro:
      "Your voice is personal data. These guides explain where audio goes with different dictation tools, what permissions mean, and how to dictate sensitive material safely.",
    color: "#DC2626",
  },
  {
    slug: "productivity",
    name: "Productivity & Wellbeing",
    short: "Productivity",
    description: "Write faster and more comfortably by voice: speed, habits, RSI, accessibility, accents and dictating in shared spaces.",
    intro:
      "How voice typing changes the way you work: how much faster it is, how to build the habit, and how it can help with wrist strain, accessibility and accents.",
    color: "#EA580C",
  },
  {
    slug: "guides-and-comparisons",
    name: "Guides & Comparisons",
    short: "Compare",
    description: "Honest comparisons of dictation apps for Mac, plus dictation guides for iPhone and Windows.",
    intro:
      "Fair, dated comparisons of dictation tools, including when another app is the better choice, plus how dictation works on iPhone and Windows.",
    color: "#0891B2",
  },
];

export function getCategory(slug: string): BlogCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
