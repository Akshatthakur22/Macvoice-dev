---
title: "Um, Uh, Like: Why Dictation Types Filler Words and How to Remove Them"
description: "Why Apple Dictation and other tools type “um” and “uh”, which tools remove filler words automatically, and how filler removal works without changing what you meant."
published: "2026-11-18"
category: "how-speech-to-text-works"
primaryKeyword: "remove filler words dictation"
tldr: "Speech engines are built to transcribe what you said, so many type hesitations like “um” and “uh”, and accidental repeats like “the the”. Some dictation apps clean these up automatically: cloud apps usually use an AI rewrite, while MacVoice uses instant on-device rules that remove fillers and stutters without changing your words."
faq: [{"q":"Does Apple Dictation remove um and uh?","a":"Apple Dictation doesn’t offer a filler-removal setting. Dedicated dictation apps can remove them."},{"q":"Will filler removal delete words I meant to say?","a":"Good filler removal is conservative. MacVoice only removes hesitation sounds (um, uh, erm) and accidental repeats of short words like ‘the the’, and keeps deliberate repeats like ‘really really’."}]
---

Nobody speaks the way they write. We hesitate, restart and repeat ourselves. A transcript that keeps all of that looks messy, which is the main reason people give up on dictation.

![Raw dictation vs cleaned-up dictation](/blog/diagrams/filler-cleanup.svg "Cleanup removes fillers and stutters and fixes small errors.")

## Why fillers end up in your text

Speech engines aim to transcribe **what was said**. For a court transcript or research interview that's correct; for an email it isn't. Some engines drop obvious hesitations, others type them, and results vary with how clearly you say them.

## Three ways tools clean up speech

| Approach | How | Pros | Cons |
|---|---|---|---|
| None | Type what was heard | Faithful | Messy text |
| AI rewrite (usually cloud) | Send text to a language model to "polish" | Can restructure sentences, change tone | Needs internet; may change your meaning; slower |
| Rules (on-device) | Remove known fillers and stutters with fixed rules | Instant, predictable, private | Won't rephrase clumsy sentences |

## How MacVoice's cleanup works

[MacVoice](/)'s Polished mode uses fast on-device rules, running in well under a millisecond per phrase:

- **Fillers removed:** um, umm, uh, uhh, uhm, erm, er, ah.
- **Accidental repeats collapsed** for short words: "the the", "I I", "to to".
- **Deliberate repeats kept:** "really really", "bye bye", "that that" (as in "I think that that's right").
- **Missing apostrophes fixed:** "dont" → "don't", "im" → "I'm". But words like "its", "well", "were" and "id" are left alone because they're real words.
- **Sentence ends preserved:** "I think, uh." still ends with a period.

The rule behind it: *only change text when the intent is unambiguous*. It won't rewrite your sentences, and it never sends text anywhere.

## What about "like" and "you know"?

These are trickier: "like" is often a real word ("I like it"), and "you know" can be meaningful. Removing them automatically would delete things people meant to say, so rule-based cleanup (including MacVoice's) leaves them. The real fix is a habit: pause instead of filling. Tips in [how to get better at dictation](/blog/how-to-get-better-at-dictation).

## Want raw output?

Sometimes you do: quoting someone, or dictating something exact. MacVoice's **Verbatim** mode types exactly what was recognised, word by word, with no cleanup.
