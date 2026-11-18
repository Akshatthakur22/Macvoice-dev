---
title: "Apple SpeechAnalyzer Explained: macOS 26's New Speech Engine"
description: "What Apple's SpeechAnalyzer and SpeechTranscriber are, what changed in macOS 26 and iOS 26, how it compares with Whisper, and what it means for dictation apps and your privacy."
published: "2026-11-18"
category: "how-speech-to-text-works"
primaryKeyword: "apple speechanalyzer"
tldr: "SpeechAnalyzer is Apple’s speech-to-text framework introduced at WWDC 2025 for iOS 26 and macOS 26. Its SpeechTranscriber module runs on-device, streams results while you talk, handles long-form audio, and uses system-managed models that aren’t bundled in each app. Independent tests found it fast and competitive with Whisper Small on English."
faq: [{"q":"Does SpeechAnalyzer work offline?","a":"Yes. Transcription runs on-device once macOS has downloaded the model for your language. The model is managed by the system and shared between apps."},{"q":"Which apps use SpeechAnalyzer?","a":"Apple uses it in its own apps, and third-party apps can adopt it on iOS 26 and macOS 26. MacVoice uses SpeechAnalyzer for all of its dictation."}]
---

At WWDC 2025 Apple introduced a new speech-to-text framework, **SpeechAnalyzer**, for iOS 26 and macOS 26 (Tahoe). It's the engine behind a new generation of on-device transcription and dictation, including [MacVoice](/).

## What it is

SpeechAnalyzer is a framework developers use to turn audio into text. Its main module for transcription is **SpeechTranscriber**. Key traits:

- **On-device.** Recognition runs on the Mac or iPhone, not Apple's servers.
- **Streaming.** It returns *volatile* (provisional) results almost immediately and then *finalised* results as it becomes confident. Apps can show text while you talk.
- **Long-form.** Designed for lectures, meetings and long dictation, not just short commands.
- **System-managed models.** The speech model isn't bundled inside every app. macOS downloads it once per language and shares it. That's why an app built on it can be under 1 MB.

## What changed from the old Speech framework

Apple's older `SFSpeechRecognizer` API was built for short utterances, some languages needed Apple's servers, and on-device quality varied. SpeechAnalyzer is a redesign aimed at long, natural speech with on-device processing and better streaming results.

## How fast and accurate is it?

Early independent tests are encouraging:

- **MacStories** (June 2025) reported it transcribing faster than OpenAI's Whisper in a hands-on test.
- **Inscribe** (July 2026, 5,559 LibriSpeech clips on an M2 Pro) reported **2.12% WER** on clean speech and 4.56% on noisy speech, versus 3.74% and 7.95% for Whisper Small, and faster processing.
- **Argmax**, which builds Whisper tooling, found Apple's engine **about twice as fast** as WhisperKit's whisper-small.en in their setup but **slightly less accurate** (14.0 vs 12.8 error rate on their test set).

So: fast, and competitive with mid-size Whisper models on English. Large cloud models can still be more accurate on hard audio. Details in [Whisper vs Apple speech recognition](/blog/whisper-vs-apple-speech-recognition).

## Languages

SpeechTranscriber launched with around ten languages (including English, Spanish, French, German, Italian, Japanese, Korean, Portuguese, Chinese and Cantonese) and Apple has said more will follow. Support varies by device, so apps check at runtime which languages are available and installed.

## What it means for dictation apps

Before SpeechAnalyzer, Mac dictation apps had two choices: use Apple's built-in Dictation (no control over cleanup or behaviour) or bundle their own model, often hundreds of megabytes to gigabytes. Now an app can use Apple's on-device engine directly and focus on the experience:

- MacVoice uses SpeechTranscriber for recognition, passes your **custom words** to it as hints, and only types **finalised** text, so already-typed words never change.
- It adds its own instant cleanup, voice commands and chat- and terminal-aware typing on top.

## Privacy

Because SpeechAnalyzer runs on-device, apps built on it can do speech-to-text without uploading audio. The one network step is macOS downloading the language model the first time. See [on-device vs cloud speech recognition](/blog/on-device-vs-cloud-speech-recognition).
