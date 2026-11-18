---
title: "Is Mac Dictation Private? Where Your Voice Actually Goes"
description: "Does Apple Dictation send your voice to Apple? How to check if it's on-device, what the ‘share audio recordings’ setting means, and how third-party dictation apps compare on privacy."
published: "2026-11-18"
category: "privacy"
primaryKeyword: "is mac dictation private"
tldr: "It depends on your Mac and language. System Settings → Keyboard → Dictation tells you whether dictation is processed on your device and not sent to Apple’s servers. Sharing audio recordings to improve Siri and Dictation is a separate, optional setting you can turn off. Third-party apps vary widely: check whether they work offline and read their policy on audio."
faq: [{"q":"Does Apple listen to my dictation?","a":"Only if you opted in to sharing audio recordings to improve Siri and Dictation. You can turn this off in System Settings → Privacy & Security → Analytics & Improvements."},{"q":"Is on-device dictation completely private?","a":"Your audio isn’t uploaded for recognition. The text still goes wherever you type it, for example an email or a cloud document."}]
---

Dictation means a microphone listening to you, often while you write private things. It's fair to ask where that audio goes.

## Apple Dictation

### Is it on-device?

Open **System Settings → Keyboard** and look under **Dictation**. macOS states whether voice input and transcripts are **processed on your device and not sent to Siri servers**. On-device support depends on your Mac and language; Apple silicon Macs support more languages on-device.

### The "improve Siri & Dictation" setting

When you turn Dictation on, macOS asks whether to **share audio recordings** to help improve Siri and Dictation. This is optional. To check or change it: **System Settings → Privacy & Security → Analytics & Improvements** and turn off *Improve Siri & Dictation*.

### What Apple stores

Apple's privacy documentation covers what is kept when server-based dictation is used and how it's associated with a random identifier. If this matters to you, read Apple's "Ask Siri, Dictation & Privacy" page in System Settings (there's a link next to the Dictation setting).

## Third-party dictation apps

These range from fully local to fully cloud:

| Type | Where audio goes | How to tell |
|---|---|---|
| Built on Apple's on-device engine | Stays on your Mac | Works with Wi-Fi off |
| Local Whisper apps | Stays on your Mac (with local models) | Model download, works offline |
| Cloud AI dictation | Uploaded to the provider | Needs internet, usually an account |
| Hybrid | Depends on the mode you pick | Check settings per mode |

Questions to ask any dictation app:

1. Does it work **offline**? ([test](/blog/does-mac-dictation-work-offline))
2. Is audio **stored**? For how long?
3. Is it used to **train** models? Can you opt out?
4. Does it keep a **history** of what you dictated?
5. Does it need an **account**?

## The text is a separate question

Even with on-device recognition, the *text* goes where you type it: Gmail, Slack, Google Docs. On-device dictation keeps your **voice and drafts** private; it doesn't change the privacy of the app you're writing in.

## How MacVoice handles privacy

[MacVoice](/) runs recognition with Apple's on-device engine. Audio stays in memory only while you dictate and is never saved or uploaded. There's no history, no analytics and no account. To add spaces and capitals correctly it reads up to 3 characters before your cursor, and it checks which app is in front (to detect chat apps and terminals). None of that is stored. Full details on our [privacy page](/privacy).

Related: [on-device vs cloud speech recognition](/blog/on-device-vs-cloud-speech-recognition) and [dictating confidential information](/blog/dictating-confidential-information).
