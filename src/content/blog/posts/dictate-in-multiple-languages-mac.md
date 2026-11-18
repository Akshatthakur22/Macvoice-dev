---
title: "How to Dictate in More Than One Language on Mac"
description: "Add dictation languages on your Mac, switch between them quickly, and get better results when you mix languages, including English with an Indian, British or other accent."
published: "2026-11-18"
category: "mac-dictation"
primaryKeyword: "dictation multiple languages mac"
tldr: "Go to System Settings → Keyboard → Dictation and click Edit next to Languages to add more. While dictating, click the language label next to the cursor or press the Globe key to switch. Pick the regional version that matches your accent, such as English (India) or English (UK), for better accuracy."
faq: [{"q":"Can Mac dictation detect the language automatically?","a":"Not reliably mid-sentence. Dictation listens for the language you have selected, so switch to the right one before you start speaking."},{"q":"Which English should I pick for an Indian accent?","a":"Try English (India). Regional models are trained on that variety of English and often recognise names and pronunciation better."}]
---

If you write in more than one language, or speak English with a regional accent, a few minutes in settings makes Dictation noticeably better.

## Add languages

1. Open **System Settings → Keyboard**.
2. Scroll to **Dictation** and click **Edit…** next to *Languages*.
3. Tick the languages (and regional variants) you want.

Your Mac may download speech files for each new language.

## Switch while dictating

When more than one language is set up, a **language label appears next to the dictation microphone**. Click it to choose another language, or press the **Globe (🌐) key** if your keyboard has one.

Dictation listens for *one* language at a time. Switch before you start speaking; it won't follow you if you change language mid-sentence.

## Choose the right regional English

English comes in several regional versions, for example English (US), English (UK), English (India), English (Australia), English (Canada). The regional models are trained on how people in those places actually speak, including local names and spelling.

If your accent isn't American, try your regional version. Many people with Indian English get noticeably better results with **English (India)**. More tips in [voice typing with an accent](/blog/voice-typing-with-an-accent).

## Mixing languages (Hinglish, Spanglish…)

Code-switching, mixing two languages in one sentence, is still hard for most speech engines, including Apple's. Practical approaches:

- **Pick the dominant language** of the sentence and accept that borrowed words may need fixing.
- **Teach it the borrowed words.** Tools with custom vocabulary (Voice Control's Vocabulary, or [MacVoice's custom words](/blog/add-custom-words-mac-dictation)) help with names and repeated terms.
- **Dictate in chunks:** one language per sentence or paragraph, switching in between.

## How MacVoice handles languages

[MacVoice](/) uses your **Mac's system language** and Apple's on-device engine. If an installed model of the same language already exists (say English (US) while your Mac is set to English (India)), it uses that immediately rather than downloading another. English gets the full cleanup (filler removal, apostrophes, voice commands); other supported languages are transcribed and capitalised without the English-only rules.
