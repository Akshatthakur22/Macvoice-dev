---
title: "Why Do Dictation Apps Need Accessibility Permission on Mac?"
description: "Mac dictation apps ask for Microphone and Accessibility access. Here's what each permission allows, why typing into other apps needs it, and how to judge whether an app deserves it."
published: "2026-11-18"
category: "privacy"
primaryKeyword: "why dictation app needs accessibility permission mac"
tldr: "Microphone access lets an app hear you. Accessibility access lets it control other apps, which a dictation app needs to type text into whatever app you’re using, and sometimes to read a little of the text around your cursor. It’s a powerful permission, so only grant it to apps you trust and that explain exactly what they do with it."
faq: [{"q":"Is it safe to give an app Accessibility access?","a":"It’s safe for apps you trust. The permission is powerful, so check the developer, read what the app says it does with it, and remove access from apps you no longer use."},{"q":"How do I remove Accessibility access?","a":"System Settings → Privacy & Security → Accessibility. Switch the app off or remove it with the minus button."}]
---

When you install a dictation app on a Mac, macOS asks you to grant two permissions. One is obvious. The other sounds alarming. Here's what they mean.

## Microphone

Lets the app receive audio from your microphone. macOS shows an **orange dot** in the menu bar whenever an app is using it, so you can always see when you're being listened to.

Manage it: **System Settings → Privacy & Security → Microphone**.

## Accessibility

Accessibility access was designed for assistive technology: screen readers, switch control, voice control. It allows an app to **interact with other apps**: send keystrokes, click, and read on-screen elements.

A dictation app needs it to **put text into the app you're using**. Without it, macOS won't let one app type into another. That protection stops random apps from typing into your Terminal or reading your documents.

Manage it: **System Settings → Privacy & Security → Accessibility**.

## Why it's a big deal

Accessibility is one of the most powerful permissions on a Mac. An app with it *could* read text on screen or type into other apps. That's why macOS makes you grant it manually, and why you should only grant it to apps that:

- come from a developer you can identify,
- explain **exactly** what they use it for,
- don't need it for unrelated features.

## How MacVoice uses it

Since we're asking you to trust us, here's exactly what [MacVoice](/) does with Accessibility:

- **Types your dictated text** into the focused app as keyboard events.
- **Reads up to 3 characters before your cursor** when a dictation starts, so it can add a space or skip a capital letter correctly.
- **Checks which app is in front** to recognise chat apps and terminals, and in browsers reads the **window title** to recognise Slack or WhatsApp on the web.
- **Deletes its own last sentence** (Backspace) when you say "scratch that".

It doesn't record what you type, doesn't read your documents, and doesn't store any of the above. It also checks for **Secure Input** and refuses to type into password fields ([why](/blog/secure-input-mac-dictation-password-fields)).

## Good permission hygiene

- Review **Privacy & Security → Accessibility** every few months and remove apps you don't use.
- If an app stops working after an update, toggling its Accessibility switch off and on refreshes the permission.

More on dictation privacy: [is Mac dictation private?](/blog/is-mac-dictation-private)
