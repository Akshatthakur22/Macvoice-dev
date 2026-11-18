---
title: "Does Mac Dictation Work Offline?"
description: "When Apple Dictation works without internet, how to check whether it's processed on your Mac, and which dictation apps work fully offline."
published: "2026-11-18"
category: "mac-dictation"
primaryKeyword: "does mac dictation work offline"
tldr: "Often, yes. On many Macs and languages, Apple Dictation is processed on-device and works without internet once the speech files are downloaded. System Settings → Keyboard → Dictation tells you whether your dictation is processed on your device. Apps built on Apple’s on-device engine, like MacVoice, also work offline after that one-time download."
faq: [{"q":"How do I know if my dictation is processed on my Mac?","a":"Open System Settings → Keyboard and look under Dictation. macOS says whether voice input and transcripts are processed on your device and not sent to Apple’s servers."},{"q":"Do I need internet the first time?","a":"Usually yes. macOS downloads the speech files for your language once. After that, on-device dictation works without a connection."}]
---

Dictating on a plane, a train or a patchy café Wi-Fi? Whether it works depends on where the speech recognition happens.

![On-device vs cloud speech recognition](/blog/diagrams/on-device-vs-cloud.svg "On-device recognition keeps working without internet; cloud recognition doesn't.")

## Apple Dictation: check your settings

Open **System Settings → Keyboard** and look under **Dictation**. macOS shows whether general text dictation is **processed on your device and not sent to Siri servers**.

- If it says on-device, Dictation works offline once the language files are downloaded.
- If not, Dictation needs an internet connection for that language.

On-device support depends on your **Mac** (Apple silicon Macs support more) and your **language**. Apple publishes the details on its macOS feature-availability page.

## The one-time download

Even on-device dictation needs the **speech model for your language**. macOS downloads it when you first turn Dictation on or add a language. Do this before you travel. macOS can also remove these files to save space, and they'll download again when needed.

## Quick offline test

1. Turn off Wi-Fi.
2. Open Notes and start Dictation.
3. Talk for a few sentences.

If text appears, you're good. If you get an error, that language isn't on-device for you yet.

## Other tools

| Tool | Works offline? |
|---|---|
| Apple Dictation | Yes for on-device languages |
| Voice Control | Yes (on-device) |
| Google Docs voice typing | No, needs internet and Chrome |
| Microsoft Word Dictate | No, needs internet and Microsoft 365 |
| Windows voice typing (Win+H) | No; Windows Voice access is on-device |
| Cloud AI dictation apps | No |
| Local AI dictation apps (Whisper-based) | Yes, after downloading a model |
| MacVoice | Yes, after macOS downloads Apple's model once |

More detail on the trade-offs in [on-device vs cloud speech recognition](/blog/on-device-vs-cloud-speech-recognition).

## Why offline matters beyond travel

Offline-capable dictation is usually also the **more private** option: if it works with no internet, your voice isn't being uploaded. That's the main reason we built [MacVoice](/) on Apple's on-device engine. See [is Mac dictation private?](/blog/is-mac-dictation-private)
