---
title: "Why Dictation Gets Names and Jargon Wrong (and How to Fix It)"
description: "Speech recognition turns names, brands and technical terms into the wrong words. Here's why it happens and five ways to fix it, from custom vocabulary to how you speak."
published: "2026-11-18"
category: "how-speech-to-text-works"
primaryKeyword: "dictation names wrong"
tldr: "Speech engines pick the most likely words based on what they learned from huge amounts of common speech, so rare names and jargon get swapped for common words that sound similar. Fix it with custom vocabulary (Voice Control Vocabulary or a dictation app’s custom words), replacements for repeat mistakes, the right regional language, and giving more context when you speak."
faq: [{"q":"Why does dictation spell my name wrong every time?","a":"If your name is rare in the model’s training data, a more common similar-sounding word wins. Adding it to a custom vocabulary list tells the recogniser to prefer your spelling."},{"q":"Do custom words work for acronyms?","a":"Yes, add them as you want them written (for example ‘API’ or ‘SQL’). Replacements can turn a spoken phrase into an exact acronym."}]
---

Dictation handles "please send the report" perfectly and then writes your colleague Saoirse as "Sir Shah". It's not you. It's how speech models work.

## Why it happens

A speech model hears sounds and asks: **which words most likely produced these sounds, given how language usually goes?** It learned "usually" from enormous amounts of everyday speech.

- "Kubernetes" sounds like several common words, and those common words are far more frequent in its training data.
- Names from other languages may follow spelling rules the model hasn't learned for English.
- Brand names are often deliberately unusual ("Lyft", "Flickr").

So the model makes a sensible bet, and loses.

## Fix 1: Give it a custom vocabulary

The strongest fix is telling the recogniser which words to expect *while it listens*.

- **Voice Control** on Mac has a **Vocabulary** list ([how to add words](/blog/add-custom-words-mac-dictation)).
- Many dictation apps have custom words. In [MacVoice](/) you list them in the **Words** tab, and they're passed to Apple's on-device recogniser as hints, so it prefers "Saoirse" over "Sir Shah".

## Fix 2: Replacements for stubborn mistakes

If a word is *consistently* misheard the same way, map the mistake to the right spelling: `sir shah => Saoirse`, or map an easy spoken phrase to a hard written one: `cube control => kubectl`. MacVoice's Replacements and macOS Text Replacements both do this.

## Fix 3: Choose the right regional language

English (India), English (UK) and English (Australia) models know local names and pronunciation better than English (US). See [voice typing with an accent](/blog/voice-typing-with-an-accent).

## Fix 4: Give context when you speak

Models use surrounding words. "Send it to Priya Raman in finance" is easier than "send it to Priya". Saying the full name the first time often helps.

## Fix 5: Speak naturally

Slowing down and over-enunciating can make it *worse*; models are trained on natural speech. Speak at a normal pace, in whole phrases. More in [speech-to-text accuracy tips](/blog/speech-to-text-accuracy-tips).

## A quick routine

1. Spend 5 minutes listing the 20 names and terms you use most (people, products, tools, places).
2. Add them as custom words.
3. Add replacements for any that still go wrong after a day.
4. Repeat monthly.

Most people find this one step removes the majority of their corrections.
