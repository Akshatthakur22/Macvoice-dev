---
title: "MacVoice Voice Commands: New Line, Bullet Point, Scratch That (Cheat Sheet)"
description: "A cheat sheet of MacVoice voice typing commands for Mac: punctuation, new lines, bullet points and undo, plus custom words, replacements and Terminal tips."
published: "2026-11-18"
category: "mac-dictation"
primaryKeyword: "mac voice typing commands"
tldr: "In MacVoice’s Polished mode, say the punctuation or layout you want: “comma”, “question mark”, “new line”, “new paragraph”, “bullet point”. Say “scratch that” to delete the last sentence. Teach it names and phrases in the Words tab, and it automatically removes “um”s and fixes apostrophes."
faq: [{"q":"Do MacVoice commands work in Verbatim mode?","a":"No. Voice commands and cleanup run in Polished mode (the default). Verbatim types exactly what was recognised, word by word."},{"q":"What if I actually want to type the word ‘comma’?","a":"MacVoice checks the words around a command. Phrases like ‘add a comma here’ or ‘the next line of code’ are typed as normal words."}]
---

Voice typing gets much faster once you know a handful of spoken commands. This cheat sheet covers the commands built into [MacVoice](/) (Polished mode, English). Using Apple's built-in Dictation instead? See the [Apple Dictation commands list](/blog/apple-dictation-commands).

## Punctuation

| Say | You get | Example |
|---|---|---|
| comma | , | “thanks comma see you soon” → Thanks, see you soon |
| question mark | ? | “are you free tomorrow question mark” → Are you free tomorrow? |
| exclamation mark / point | ! | “great work exclamation mark” → Great work! |
| full stop | . | “that’s all full stop” → That’s all. |
| period (at the end) | . | “I’m done period” → I’m done. |
| semicolon | ; | “it works semicolon ship it” → It works; ship it |

Apple's speech engine already adds a lot of punctuation by itself, so you often won't need these.

## Lines, paragraphs and lists

| Say | You get |
|---|---|
| new line / next line / line break | A new line |
| new paragraph | A new paragraph |
| bullet point | A new “- ” list item |
| shift enter / soft return | A line break that never sends, in any app |

In Slack, WhatsApp, Teams and other chat apps, "new line" becomes Shift+Return so your message isn't sent early. More in [how to dictate in Slack without sending](/blog/dictate-in-slack-without-sending).

## Undo: "scratch that"

Say **"scratch that"** and MacVoice deletes the last sentence it typed. Say it mid-sentence and it drops the words before it:

> “let’s meet on Tuesday scratch that let’s meet on Wednesday” → **Let’s meet on Wednesday.**

## It knows when you're not giving a command

These are typed as normal text: "the next line of code", "add a comma here", "a long period of time", "the first bullet point is…", "scratch that itch".

## What happens automatically

![Raw dictation vs cleaned-up dictation](/blog/diagrams/filler-cleanup.svg "Polished mode removes fillers and fixes small errors.")

- "um", "uh", "erm" are removed.
- Accidental repeats like "the the" are fixed (but "really really" is kept).
- Missing apostrophes are added: "dont" → "don't", "im" → "I'm".
- Sentences start with a capital, while "iPhone", "macOS", URLs, emails and decimals are left alone.
- If you continue a sentence already in the text box, the first word isn't capitalised.

## Teach it your words

**Custom words** (Words tab): list names and jargon one per line, such as "Kubernetes" or a colleague's name. Apple's recognizer will prefer those spellings. More in [why dictation gets names wrong](/blog/why-dictation-gets-names-wrong).

**Replacements:** write rules as *what you say => what to type*:

```
my email => you@example.com
mac voice => MacVoice
sign off => Thanks,\nAkshat
```

## Dictating in Terminal

In Terminal, iTerm2, Warp, Ghostty and other terminals, MacVoice only removes fillers and applies replacements: no capitals, no apostrophes, no final period, and it never presses Return. See [dictating in Terminal safely](/blog/dictate-in-terminal-safely).

## Quick reference

| Goal | Say |
|---|---|
| Punctuation | comma · question mark · exclamation mark · full stop · …period |
| Structure | new line · new paragraph · bullet point |
| Undo | scratch that |
| Start / stop | Control + Option + Space (or your own shortcut) |
