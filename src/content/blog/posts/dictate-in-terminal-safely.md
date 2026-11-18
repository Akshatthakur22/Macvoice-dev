---
title: "How to Dictate in Terminal on Mac Without Running the Wrong Command"
description: "Dictating into Terminal, iTerm2 or Warp can capitalise commands, add periods or press Return. Here's what goes wrong and how to voice-type shell commands safely."
published: "2026-11-18"
category: "voice-typing-workflows"
primaryKeyword: "dictation terminal mac"
tldr: "Normal dictation formats text for prose: it capitalises the first word, adds a final period and may turn “new line” into Return, which breaks or runs shell commands. Either dictate into a text editor and paste, or use a terminal-aware dictation tool. MacVoice detects terminals and only removes filler words there: no capitals, no period, and it never presses Return."
faq: [{"q":"Why does dictation capitalise my commands?","a":"Dictation assumes you are writing sentences, so it capitalises the first word (‘Git status’). Shells are case-sensitive, so ‘Git’ fails."},{"q":"Which terminals does MacVoice recognise?","a":"Terminal, iTerm2, Warp, Ghostty, kitty, Alacritty, WezTerm, Hyper, Termius and Prompt."}]
---

Dictation is designed for sentences. Shells are not sentences. Put the two together and you get commands like `Git status.` that don't run, or worse, commands that run before you've finished saying them.

## What goes wrong

| Dictation habit | In a shell |
|---|---|
| Capitalises the first word | `Git status` → command not found |
| Adds a period at the end | `ls -la.` → wrong argument |
| Adds apostrophes ("dont" → "don't") | Unbalanced quote, shell waits for input |
| "new line" → Return | **Runs the command immediately** |
| Types "um" | `um git status` → command not found |

## Option 1: Dictate elsewhere, then paste

Dictate into a text editor, fix it, copy, paste into Terminal. Safe, but slow, and you lose the point of voice typing.

## Option 2: Use a terminal-aware dictation tool

[MacVoice](/) checks which app is in front. In a terminal (Terminal, iTerm2, Warp, Ghostty, kitty, Alacritty, WezTerm, Hyper, Termius, Prompt) Polished mode switches to a minimal set of rules:

- ✅ Removes "um", "uh" and stutters
- ✅ Applies your replacements ("cube control" → `kubectl`)
- ✅ Supports "scratch that"
- ❌ No capital letters (and the recognizer's capitalised first word is lowered)
- ❌ No apostrophe changes
- ❌ No trailing period
- ❌ "new line" is never turned into Return

So "um git status" becomes `git status`, typed and waiting for *you* to press Return.

## Make commands easier to say

Shell commands are full of symbols speech engines don't expect. Replacements make them speakable:

```
cube control => kubectl
get pods => kubectl get pods -A
git log pretty => git log --oneline --graph
dash dash help => --help
```

Add these in MacVoice's Words tab → Replacements.

## Where voice really helps in the terminal

Honestly, short commands are faster to type. Voice shines for:

- **AI coding agents in the terminal** (like Claude Code): describing a change in plain English is a long prompt, which is perfect for dictation.
- **Commit messages:** `git commit -m "` then dictate the message.
- **Long natural-language arguments:** notes, descriptions, search queries.

More developer workflows in [voice typing for developers](/blog/voice-typing-for-developers).
