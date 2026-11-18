---
title: "Mac Dictation Auto-Punctuation: How It Works and How to Turn It Off"
description: "Why Mac dictation adds commas and periods by itself, why it sometimes gets them wrong, and how to switch auto-punctuation off or work with it."
published: "2026-11-18"
category: "mac-dictation"
primaryKeyword: "mac dictation auto punctuation"
tldr: "In supported languages, Mac Dictation automatically inserts commas, periods and question marks based on your words and pauses. To turn it off, go to System Settings → Keyboard → Dictation and switch off Auto-punctuation. You can still say punctuation out loud either way."
faq: [{"q":"Why does dictation put periods in the wrong place?","a":"Auto-punctuation uses your pauses as a clue. Long pauses mid-sentence (while you think) can be read as the end of a sentence. Speaking in complete phrases helps."},{"q":"Can I keep auto-punctuation and still say commas?","a":"Yes. Spoken punctuation like ‘comma’ and ‘question mark’ works whether auto-punctuation is on or off."}]
---

Modern dictation doesn't make you say "comma" every few words. It listens to your phrasing and adds punctuation for you. Most of the time that's great; sometimes it's maddening. Here's what's going on.

## What auto-punctuation does

In supported languages, Mac Dictation automatically inserts **commas, periods and question marks** as you dictate. The speech model looks at two things:

- **Your words:** "can you send it" sounds like a question, so it gets a "?".
- **Your pauses and intonation:** a long pause often means the end of a sentence.

## Turn it off (or on)

1. Open **System Settings → Keyboard**.
2. Scroll to **Dictation**.
3. Switch **Auto-punctuation** off.

With it off, you'll need to say every mark yourself ("comma", "period", "question mark"). See the [full command list](/blog/apple-dictation-commands).

## Why it sometimes gets it wrong

- **Thinking pauses.** If you stop mid-sentence to think, Dictation may end the sentence there. The fix is habit: pause *between* sentences, not inside them. Our [tips for getting better at dictation](/blog/how-to-get-better-at-dictation) cover this.
- **Lists and fragments.** Short phrases ("milk, eggs, bread") are hard to punctuate from sound alone.
- **Questions without question words.** "You're coming tomorrow?" relies on intonation, which is easy to miss.

## Should you keep it on?

For most people, **yes**. It saves a lot of effort, and fixing the occasional comma is faster than saying every one. Turn it off if you dictate structured text (lists, code comments, addresses) and prefer full control.

## How dictation apps handle punctuation

Apps built on Apple's speech engine, including [MacVoice](/), also get punctuation from the model. MacVoice then tidies up: it merges doubled marks (say "comma" right where the engine already added one and you get one comma, not two), attaches punctuation to the previous word, and only treats "period" as a command at the end of what you say, so "a long period of time" stays as words. In Terminal it drops the trailing period so your command still runs.
