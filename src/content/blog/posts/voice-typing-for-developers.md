---
title: "Voice Typing for Developers: Where It Helps (and Where It Doesn't)"
description: "A practical guide for programmers: use dictation for code reviews, commit messages, docs, Slack and AI prompts, keep the keyboard for code, and avoid the Terminal and jargon traps."
published: "2026-11-18"
category: "voice-typing-workflows"
primaryKeyword: "voice typing for developers"
tldr: "Don’t dictate code syntax; dictate the prose around code. Pull request descriptions, code review comments, commit messages, documentation, tickets, Slack and AI prompts are where voice typing saves developers the most time. Teach your dictation tool your project’s jargon, and use a terminal-aware tool so dictated commands never run by accident."
faq: [{"q":"Can I write code by voice?","a":"It’s possible with specialised voice-coding tools, but it’s slow to learn. For most developers the win is dictating prose (reviews, docs, prompts) and typing the code."},{"q":"Will dictation mess up my variable names?","a":"Often, yes, because ‘getUserId’ isn’t an English word. Add frequently used identifiers and library names to your dictation tool’s custom words."}]
---

Developers type all day, but a surprising amount of it isn't code. It's explaining code: to reviewers, to teammates, to future you, and increasingly to AI assistants. That's where voice typing shines.

## Where voice typing saves developers time

| Task | Why voice helps |
|---|---|
| Pull request descriptions | You explain *why*, which is easier said than typed |
| Code review comments | Longer, kinder, clearer feedback |
| Commit messages | Better than "fix stuff" when it takes 10 seconds to say |
| Docs, READMEs, ADRs | Talk through the design like you would at a whiteboard |
| Tickets and bug reports | Steps to reproduce, expected vs actual |
| Slack / Teams | Long explanations without RSI |
| AI prompts (Cursor, Claude, ChatGPT) | Detailed prompts get better results ([guide](/blog/dictate-prompts-chatgpt-claude-cursor)) |

## Where it doesn't (yet)

**Code syntax.** Saying "open paren, const user equals await…" is slower than typing for most people. Dedicated voice-coding systems exist and help people who can't use a keyboard, but they take weeks to learn. For everyone else: **dictate the prose, type the code.**

## Three traps and how to avoid them

**1. Jargon.** Speech engines don't know "kubectl", "PostgreSQL" or your service names. Add them as custom words. In [MacVoice](/) that's the Words tab, which biases Apple's recognizer toward your spellings. Use replacements for awkward ones: `cube control => kubectl`.

**2. Terminal.** Dictating into a terminal is risky: capital letters, a trailing period or an accidental Return can break or run a command. MacVoice detects Terminal, iTerm2, Warp, Ghostty, kitty and others and only removes fillers there. Details: [dictating in Terminal safely](/blog/dictate-in-terminal-safely).

**3. Clipboard.** Many dictation apps paste through your clipboard, which can clobber the stack trace you just copied. MacVoice types as keyboard input and never touches the clipboard ([why that matters](/blog/dictation-without-clipboard-mac)).

## A workflow that works

1. Write the code with your keyboard.
2. When you open the PR, click into the description and **talk through the change**: what, why, how you tested it, what reviewers should look at.
3. Stop, skim, fix the one or two misheard words.
4. Same for review comments: select the line, click "comment", talk.

Developers who try this usually find their PR descriptions get *better*, not just faster, because explaining out loud is easier than composing.

## Wrist strain

If you're using voice typing because your wrists hurt, read [voice typing for RSI and wrist pain](/blog/voice-typing-for-rsi-and-wrist-pain), and see a professional if the pain persists.
