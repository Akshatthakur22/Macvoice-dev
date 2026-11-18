---
title: "Secure Input on Mac: Why Dictation Stops Working in Password Fields"
description: "What macOS Secure Input is, why dictation and keyboard tools stop working when it's on, how to find which app is holding it, and why you shouldn't dictate passwords anyway."
published: "2026-11-18"
category: "privacy"
primaryKeyword: "secure input mac dictation"
tldr: "Secure Input is a macOS protection that blocks other apps from seeing or sending keystrokes while you type in a password field. When it’s active, dictation apps and keyboard utilities can’t type, by design. Click out of the password field (or close the app holding Secure Input) and dictation works again. Never dictate passwords aloud."
faq: [{"q":"How do I turn off Secure Input on Mac?","a":"You don’t turn it off directly. It switches on when a password field or certain apps are focused and off when you leave them. If it’s stuck, quit the app that enabled it, often a password manager or a terminal with secure keyboard entry turned on."},{"q":"Why does my dictation app say ‘secure input active’?","a":"A password field or an app with secure keyboard entry is active. Click into a normal text field and try again."}]
---

You press your dictation shortcut and get a message like "Secure input active", or simply nothing happens. Here's what's going on.

## What Secure Input is

When you type a password, macOS turns on **Secure Input**. While it's on, other apps can't see your keystrokes and can't send keystrokes into the field. That stops keyloggers and malicious apps from capturing or typing your password.

It switches on automatically when:

- a **password field** is focused (login pages, system dialogs),
- a **password manager** is unlocked or being typed into,
- a **terminal** has "Secure Keyboard Entry" enabled (Terminal and iTerm2 have this option).

## Why dictation stops

Dictation apps that type into other apps use keyboard events. Secure Input blocks exactly that. **This is correct behaviour**: a tool that could type into password fields would be a security risk.

[MacVoice](/) checks for Secure Input before starting and tells you "Secure input active — cannot type into password or secure fields" instead of failing silently.

## Fixing a "stuck" Secure Input

Sometimes an app leaves Secure Input on after you've moved on:

1. **Click into a normal text field** in another app.
2. **Check your terminal**: in Terminal, the *Terminal* menu has *Secure Keyboard Entry*; iTerm2 has it in its app menu. Turn it off if you don't need it.
3. **Lock and unlock your password manager**, or quit it.
4. **Quit apps one at a time** to find the one holding it; log out and back in as a last resort.

## Is Secure Input slowing other things down?

Secure Input affects more than dictation. While it's stuck on, text expanders, keyboard remappers and some launchers also stop working. If several keyboard tools fail at once, a stuck Secure Input is the first thing to check. In MacVoice, the status line in its window tells you when Secure Input is the reason it can't start.

## Don't dictate passwords

Even where it's technically possible:

- People (and devices) nearby can hear you.
- Cloud dictation would upload your password.
- Passwords should be random strings you don't say out loud. Let a password manager fill them in.

Related: [why dictation apps need Accessibility permission](/blog/why-dictation-apps-need-accessibility-permission) and [dictating into fields that block paste](/blog/type-in-paste-blocked-fields).
