---
title: "Word Error Rate (WER) Explained: How Speech Recognition Accuracy Is Measured"
description: "What word error rate means, how it's calculated with a simple example, what counts as a good WER, and why published accuracy numbers often don't match real life."
published: "2026-11-18"
category: "how-speech-to-text-works"
primaryKeyword: "word error rate explained"
tldr: "Word error rate (WER) is the standard accuracy measure for speech-to-text: the number of substituted, deleted and inserted words divided by the number of words actually spoken. Lower is better. Strong modern engines score in the low single digits on clean English benchmarks, but real-world audio, accents and jargon push it higher."
faq: [{"q":"What is a good word error rate?","a":"On clean benchmark audio, strong modern English models score roughly 2–8%. For everyday dictation, what matters more is how many corrections you make per paragraph on your own voice."},{"q":"Can WER be more than 100%?","a":"Yes. Because inserted words count as errors, a system that adds lots of extra words can exceed 100%."}]
---

When a company says its speech recognition is "95% accurate", it's usually quoting word error rate. Here's what that actually means.

## The formula

**WER = (Substitutions + Deletions + Insertions) ÷ Words actually said**

- **Substitution:** a wrong word ("Maria" instead of "Priya").
- **Deletion:** a word that went missing.
- **Insertion:** an extra word that wasn't said (often "uh" or a hallucinated word).

## A worked example

![Word error rate example](/blog/diagrams/word-error-rate.svg "Four errors across seven spoken words.")

You said 7 words. The engine made 2 substitutions, 1 deletion and 1 insertion: 4 errors. **WER = 4 ÷ 7 ≈ 57%.** A terrible result, but it shows how quickly errors add up in a short sentence.

"95% accurate" roughly means **WER ≈ 5%**: about one wrong word in twenty.

## What do real systems score?

On the [Open ASR Leaderboard](https://huggingface.co/spaces/hf-audio/open_asr_leaderboard), a public benchmark that standardises how text is normalised, the best open English models average **around 5–8% WER** across several datasets; OpenAI's Whisper Large v3 was reported at about 7.4%.

On clean read speech (the LibriSpeech dataset), an independent test in 2026 reported **Apple's SpeechAnalyzer at about 2.1% WER**, versus 3.7% for Whisper Small. Another comparison, by Argmax, found Apple's engine faster but slightly less accurate than Whisper Small on their test set. See [Whisper vs Apple speech recognition](/blog/whisper-vs-apple-speech-recognition).

## Why published numbers don't match your experience

1. **Normalisation.** Is "12" the same as "twelve"? Does punctuation count? One analysis showed the *same* transcript scoring 55% or 9% WER depending on these choices.
2. **Test audio.** Benchmarks often use clean, read speech. Your audio has background noise, natural pauses and "um"s.
3. **Vocabulary.** Benchmarks rarely include your colleague's name or your product.
4. **Accent.** Models do best on speech that resembles their training data ([accents](/blog/voice-typing-with-an-accent)).

## What to measure instead

For everyday dictation, a better personal test:

1. Write a 100-word paragraph that's typical of your work, including names and jargon.
2. Read it aloud into each tool you're considering.
3. Count the words you'd have to fix.

That's your real WER. Then try again after adding [custom words](/blog/add-custom-words-mac-dictation). It often drops sharply.

## Beyond WER

WER ignores things that matter for dictation: **punctuation, capitalisation, speed** (does text appear while you speak?) and **cleanup** (are "um"s removed?). A tool with slightly higher WER but live text and good cleanup can feel better to use. More in [speech-to-text accuracy tips](/blog/speech-to-text-accuracy-tips).
