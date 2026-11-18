---
title: "What Happens to Your Voice When You Use Cloud Dictation?"
description: "Step by step: what cloud dictation services do with your audio: upload, processing, AI rewriting, storage, training and deletion, plus the questions to ask before you trust one."
published: "2026-11-18"
category: "privacy"
primaryKeyword: "cloud dictation privacy"
tldr: "With cloud dictation, your audio is recorded on your device, uploaded to the provider’s servers, transcribed, often rewritten by an AI model, and the text is sent back. What happens next (how long audio and text are kept, whether they’re used for training, who can access them) depends entirely on the provider’s policy and your settings."
faq: [{"q":"Do cloud dictation apps keep my recordings?","a":"Some delete audio right after processing, some keep it for a period, and some use it to improve models unless you opt out. Read the specific app’s privacy policy."},{"q":"Is cloud dictation safe for work?","a":"It can be, if your employer has approved the provider and the data-processing terms fit your obligations. For confidential information, on-device dictation removes the question."}]
---

Cloud dictation can be excellent. But it helps to know exactly what you're agreeing to when you press the button.

## The journey of your voice

1. **Recording.** The app records your microphone while you hold or toggle its shortcut.
2. **Upload.** The audio (or a compressed version) is sent over the internet, normally encrypted in transit, to the provider's servers or a speech API they use.
3. **Transcription.** A speech model on their servers turns audio into text.
4. **AI rewriting (often).** Many apps then send the text through a large language model to remove fillers, fix grammar or change tone. This may be a *second* company's model.
5. **Return.** The text comes back to your Mac and is pasted into your app.
6. **Retention.** Audio and/or text may be deleted immediately, kept for a period (for debugging, abuse prevention or history features), or used to improve models.

![On-device vs cloud speech recognition](/blog/diagrams/on-device-vs-cloud.svg "In the cloud model, steps 2–6 happen outside your computer.")

## Questions to ask before you trust a provider

- **Retention:** how long are audio and text kept? Can you delete your history?
- **Training:** is your data used to train models? Is that opt-in or opt-out?
- **Sub-processors:** which other companies (speech APIs, AI models, hosting) see your data?
- **Location:** where are the servers? Does it matter for your regulations?
- **Business terms:** is there a data processing agreement for work use?
- **Context capture:** does the app also read your screen or the surrounding text to improve results? Some do, for better accuracy.

## When cloud dictation is reasonable

- You need **AI rewriting** or tone changes.
- You dictate in a **language on-device engines don't support** well.
- Your content isn't sensitive, or your employer has approved the provider.

## When on-device is the better choice

- **Confidential work:** clients, patients, legal, finance, HR ([guide](/blog/dictating-confidential-information)).
- **Personal writing:** journals, messages, health notes.
- **Unreliable internet:** travel, rural areas.
- **You'd rather not have a subscription.** On-device costs the provider nothing per use, which is why one-time pricing is possible.

[MacVoice](/) is on-device by design: Apple's speech engine on your Mac, local cleanup, no account, no uploads, no history. See [is Mac dictation private?](/blog/is-mac-dictation-private) for how to check Apple's own Dictation.
