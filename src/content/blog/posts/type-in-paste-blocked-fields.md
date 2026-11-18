---
title: "How to Dictate Into Websites That Block Paste"
description: "Some forms disable paste, which breaks dictation apps that work by pasting. Here's why, which dictation methods still work, and what to do about password fields."
published: "2026-11-18"
category: "voice-typing-workflows"
primaryKeyword: "dictation paste blocked field"
tldr: "Some websites block paste in certain fields (sign-up forms, banking, exams). Dictation apps that insert text by pasting fail there. Dictation that types text as keyboard input, such as Apple Dictation in many fields or MacVoice, usually still works. Password fields are deliberately protected by macOS Secure Input and shouldn’t be dictated into."
faq: [{"q":"Why do websites block paste?","a":"Usually to force people to type things like a confirmation email or password, or to discourage copying in exams. It’s a website choice, not a Mac setting."},{"q":"Can I dictate into password fields?","a":"No, and you shouldn’t. macOS Secure Input blocks other apps from sending keystrokes to password fields, to protect you from keyloggers."}]
---

You fill in a form by voice, and nothing appears. Or a message says "Pasting is not allowed". You've hit a paste-blocked field.

## What's happening

Some websites stop paste in certain fields, for example "confirm your email", account numbers, or exam answer boxes. Technically, the page listens for a paste event and cancels it.

Many dictation apps **insert text by pasting**: they put your words on the clipboard and press ⌘V for you. On these fields, that paste is cancelled, so your dictated text never arrives.

![Two ways dictation apps put text into other apps](/blog/diagrams/text-insertion-methods.svg "Paste-based dictation fails where paste is blocked; keyboard-input dictation doesn't.")

## What still works

**Dictation that types instead of pastes.** If text arrives as keyboard input, the page sees normal typing, and the paste block doesn't apply.

- [MacVoice](/) always types as keyboard input, so it works in most paste-blocked fields.
- Apple Dictation inserts text directly in many fields.
- Typing it yourself, of course.

The full comparison of insertion methods is in [why Mac dictation apps use your clipboard](/blog/dictation-without-clipboard-mac).

## The exception: password fields

macOS has a protection called **Secure Input**. When a password field (or a password manager) is active, macOS blocks other apps from sending keystrokes into it, so malware can't type or read your passwords.

That's a good thing. MacVoice checks for Secure Input and **refuses to start**, telling you why, rather than trying to type into a password field. Don't dictate passwords anyway: anyone nearby can hear them. More in [Secure Input and password fields](/blog/secure-input-mac-dictation-password-fields).

## If it still doesn't work

- **Remote desktops (Citrix, Microsoft Remote Desktop):** whether forwarded keystrokes arrive depends on the remote-desktop client's keyboard settings.
- **Odd web editors:** some apps drop fast keystrokes. MacVoice has a "Type one character at a time" option in Settings for these.
- **Exam or assessment sites:** check the rules; some prohibit assistive tools unless you have an approved accommodation.
