---
title: "How to Add Custom Words to Mac Dictation (Names, Jargon, Brands)"
description: "Mac dictation keeps misspelling names and technical terms? Here are the ways to teach your Mac custom words: Voice Control Vocabulary, text replacements, and dictation apps with custom vocabulary."
published: "2026-11-18"
category: "mac-dictation"
primaryKeyword: "add custom words mac dictation"
tldr: "Standard Mac Dictation has no custom word list. Your options are: turn on Voice Control and add words under its Vocabulary setting; use macOS Text Replacements to fix common misspellings after the fact; or use a dictation app with custom vocabulary, such as MacVoice’s Words tab, which biases Apple’s recognizer toward your spellings."
faq: [{"q":"Can I train Apple Dictation to recognise my voice?","a":"Not directly. Modern dictation doesn’t need voice training, but it can’t learn new words unless you add them through Voice Control’s Vocabulary or a dictation app’s custom words."},{"q":"Do macOS Text Replacements work with dictation?","a":"Sometimes, depending on the app, because replacements trigger as text is typed. They’re best for short, fixed fixes. Test them in the apps you use."}]
---

Speech recognition is great at common words and bad at the words that matter most to you: colleagues' names, product names, medical or legal terms, programming jargon. Here's how to fix that on a Mac.

## Why it happens

Speech engines pick the **most likely** word that matches the sound. "Kubernetes" or "Priyanka" are rare in the data the model learned from, so it picks something common that sounds similar ("Cooper Netties", "Priya Anka"). More on this in [why dictation gets names wrong](/blog/why-dictation-gets-names-wrong).

## Option 1: Voice Control Vocabulary (built in)

Voice Control has a custom word list:

1. Open **System Settings → Accessibility → Voice Control**.
2. Turn Voice Control on, then click **Vocabulary**.
3. Click **+** and add your words and phrases.

The catch: Voice Control **replaces normal Dictation** while it's on and is always listening. Great if you use Voice Control anyway; awkward if you just want dictation. See [Voice Control vs Dictation](/blog/voice-control-vs-dictation-mac).

## Option 2: Text Replacements (fix after the fact)

**System Settings → Keyboard → Text Replacements** lets you swap one string for another as text is typed. If dictation always writes "mac voice", add a replacement to "MacVoice".

Limits: it only fixes *consistent* mistakes, and whether it triggers on dictated text depends on the app. Test it where you write.

## Option 3: A dictation app with custom vocabulary

Several dictation apps let you list words to recognise. In [MacVoice](/):

1. Menu bar icon → **MacVoice Settings…** → **Words** tab.
2. Under **Custom words**, add one word or phrase per line (up to 100):

```
Kubernetes
PostgreSQL
Priyanka Sharma
```

3. Click **Save Words**.

These words are passed to Apple's on-device recognizer as hints, so it **prefers your spellings** while it listens. That's better than fixing words afterwards. This works in both Verbatim and Polished modes.

## Bonus: replacements for phrases you say often

MacVoice's **Replacements** box turns a spoken phrase into any text:

```
my email => priyanka@example.com
office address => 221B Baker Street, London
sign off => Best,\nPriyanka
```

Say "my email" and the full address is typed. Handy for signatures, addresses and boilerplate. Replacements apply in Polished mode.

## Tips that help any dictation tool

- Say unusual names **clearly and at normal speed**; slowing down too much can make it worse.
- Use the **full name** the first time ("Priyanka Sharma"); context helps.
- Pick the **regional language** that matches your accent ([multi-language guide](/blog/dictate-in-multiple-languages-mac)).
