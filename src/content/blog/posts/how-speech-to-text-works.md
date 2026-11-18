---
title: "How Speech-to-Text Works, Explained Simply"
description: "What happens between you speaking and words appearing on screen: audio, neural speech models, punctuation and cleanup, explained without jargon, plus why accuracy varies."
published: "2026-11-18"
category: "how-speech-to-text-works"
primaryKeyword: "how does speech to text work"
tldr: "Speech-to-text records your voice as audio, slices it into tiny frames, and feeds them to a neural network trained on huge amounts of speech. The model predicts the most likely words, adds punctuation and capitals, and an app can then clean up fillers before typing the text. This can happen on your device or on a company’s servers."
faq: [{"q":"Is speech-to-text the same as voice recognition?","a":"Not quite. Speech recognition (speech-to-text) works out what was said. Voice recognition (speaker recognition) works out who said it."},{"q":"Why is speech-to-text better than it used to be?","a":"Modern systems use large neural networks trained on vast amounts of speech, replacing older statistical systems. They handle accents, noise and natural speech much better."}]
---

You say a sentence; a second later it's text. Here's what happens in between, in five steps.

![How speech becomes text](/blog/diagrams/speech-to-text-pipeline.svg "The five steps from voice to text.")

## 1. Capturing sound

Your microphone turns air vibrations into a stream of numbers: **audio samples**, typically 16,000 or more per second. Quality matters here: a noisy room or a mic far from your mouth means the model starts with worse information ([choosing a microphone](/blog/best-microphone-for-dictation)).

## 2. Turning audio into features

Raw audio is chopped into tiny overlapping slices, around 20–30 milliseconds each, and converted into a representation of which frequencies are present. Think of it as a picture of the sound over time (a spectrogram).

## 3. The speech model guesses the words

This is the clever part. A **neural network**, trained on many thousands of hours of transcribed speech, looks at those frames and predicts the most likely sequence of words.

Modern models don't just match sounds; they've also learned a lot about **language**. That's why "I scream" and "ice cream" usually come out right in context. It's also why rare words, like your colleague's surname, get swapped for common ones ([why dictation gets names wrong](/blog/why-dictation-gets-names-wrong)).

### Streaming vs batch

- **Streaming** models produce words *while* you talk, revising their guess as more audio arrives. Apple's dictation engine works this way.
- **Batch** models wait until you stop, then transcribe the whole clip. Many Whisper-based apps work this way, so text appears after you finish.

## 4. Punctuation, capitals and cleanup

Most modern engines add punctuation and capital letters themselves, using words and pauses as clues ([auto-punctuation explained](/blog/mac-dictation-auto-punctuation)). Dictation apps may then add their own cleanup: removing "um" and "uh", fixing apostrophes, following commands like "new line".

## 5. Getting text into your app

Finally the text has to reach the app you're writing in: by pasting, by accessibility APIs, or by sending keyboard input. That choice affects your clipboard and whether it works where paste is blocked ([the three methods](/blog/dictation-without-clipboard-mac)).

## Where does this happen?

Steps 2–3 need serious computing power. They run either **on your device** (private, works offline) or **on a company's servers** (can use bigger models, needs internet, your audio is uploaded). Read [on-device vs cloud speech recognition](/blog/on-device-vs-cloud-speech-recognition).

## Why accuracy varies

- **Audio quality:** noise, echo, distance from the mic.
- **Speaking style:** mumbling, very fast speech, long mid-sentence pauses.
- **Vocabulary:** names, jargon, mixed languages.
- **Accent vs model:** models trained on lots of speech like yours do better ([accents](/blog/voice-typing-with-an-accent)).

Accuracy is measured with **word error rate**. Here's [what WER means](/blog/word-error-rate-explained).
