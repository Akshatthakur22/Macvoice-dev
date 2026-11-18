---
title: "How to Dictate in Slack Without Accidentally Sending the Message"
description: "Saying “new line” while dictating in Slack, WhatsApp or Teams can send a half-written message. Here's why it happens and how to dictate multi-line messages safely on a Mac."
published: "2026-11-18"
category: "voice-typing-workflows"
primaryKeyword: "dictate in slack without sending"
tldr: "In Slack, WhatsApp, Teams and most chat apps, Return sends the message and Shift+Return adds a line break. If your dictation tool turns “new line” into Return, the message goes early. Fix it by changing your chat app’s send key, dictating one line at a time, or using a dictation app that sends Shift+Return in chat apps automatically, which MacVoice does."
faq: [{"q":"How do I make a new line in Slack without sending?","a":"Press Shift + Return. Slack also has a preference (under Advanced) to change what Enter does when writing a message."},{"q":"Does MacVoice work in Slack in the browser?","a":"Yes. MacVoice recognises Slack and WhatsApp in Safari, Chrome, Arc, Firefox, Edge and other browsers, and sends Shift+Return for ‘new line’ there too."}]
---

You're dictating a careful Slack message to your team. You say "new line" to start a list, and before you've said the second sentence the message is gone: sent, half-finished, to the whole channel.

![Return vs Shift+Return in chat apps](/blog/diagrams/chat-return-vs-shift-return.svg "In chat apps, Return sends. Shift+Return makes a new line.")

## Why "new line" sends your message

In a document, the Return key means "start a new line". In chat apps it means **send**. To get a line break in a chat box you press **Shift + Return** instead.

| Where you're typing | Return does | Line break is |
|---|---|---|
| Notes, Pages, Word, Mail | New line | Return |
| Slack, WhatsApp, Teams, Discord, Telegram, Messages | Send message | Shift + Return |
| Terminal | Run the command | Usually not wanted at all |

Many dictation tools handle "new line" the same way in every app. In a chat app, that's the same as pressing Send.

## Three ways to fix it

**1. Change which key sends.** Some chat apps let you swap keys so Return adds a line and another shortcut sends. In Slack, look under *Preferences → Advanced*. It works, but changes how you type too, and you must set it up in every app.

**2. Dictate one line at a time.** Stop dictating, press Shift+Return yourself, start again. Safe but slow.

**3. Use a dictation app that knows it's in a chat app.** The app checks which app is in front and sends Shift+Return for "new line" when it's a chat app.

## How MacVoice handles chat apps

[MacVoice](/) does option 3 automatically. It recognises:

- Slack, WhatsApp, Microsoft Teams, Discord, Telegram, Messages, Signal, Messenger and Element
- Slack and WhatsApp in Safari, Chrome, Arc, Firefox, Edge and other browsers

In normal writing apps, "new line" is a normal line break. In terminals, MacVoice never turns "new line" into Return.

## A safe way to dictate a Slack message

1. Click into the Slack message box.
2. Press Control + Option + Space and say: "Hi team comma quick update bullet point the release is on Friday bullet point docs are ready".
3. Press the shortcut again to stop and read it over.
4. Press Return when *you're* ready to send.

Result:

```
Hi team, quick update
- The release is on Friday
- Docs are ready
```

WhatsApp has the same Return-sends behaviour; see [dictating WhatsApp messages on Mac](/blog/dictate-whatsapp-messages-on-mac).

Made a mistake? Say **"scratch that"** to delete the last sentence. See all [MacVoice voice commands](/blog/mac-voice-typing-commands).
