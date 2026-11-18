---
title: "Mac Dictation Not Working? 10 Fixes That Actually Help"
description: "Dictation icon appears but nothing types? Wrong microphone? No sound? Work through these 10 fixes for Apple Dictation on macOS, from quickest to most thorough."
published: "2026-11-18"
category: "mac-dictation"
primaryKeyword: "mac dictation not working"
tldr: "Most Mac dictation problems come from the wrong microphone being selected, Dictation being switched off, or a half-downloaded language file. Check System Settings → Keyboard → Dictation (on, right language, right microphone), check that the input level moves in System Settings → Sound → Input, then turn Dictation off and on again and restart your Mac."
faq: [{"q":"Why does the dictation microphone appear but nothing types?","a":"Usually the wrong microphone is selected (for example AirPods in their case, or a webcam), or the language files didn't finish downloading. Check the Microphone source in Keyboard → Dictation, then turn Dictation off and on to re-download."},{"q":"Why does dictation work in Notes but not in another app?","a":"Some apps handle text input differently. Test in TextEdit or Notes first. If it works there, the problem is the other app: update it, restart it, or try a different text field."}]
---

You press the shortcut, the little microphone appears… and nothing happens. Or Dictation refuses to start at all. Work through these fixes in order; most people are sorted by fix 3.

## 1. Check Dictation is actually on

Open **System Settings → Keyboard** and scroll to **Dictation**. Make sure it's switched on and that the **language** shown is the one you're speaking. If you speak English but the language says something else, Dictation will produce nonsense or nothing.

## 2. Check the right microphone is selected

This is the most common cause. On the same Dictation settings, look at **Microphone source**. If it's set to *Automatic*, your Mac may be listening to AirPods sitting in their case, a webcam on the other side of the room, or a disconnected USB mic.

Pick your actual microphone (for example *MacBook Pro Microphone*) and try again.

## 3. Check your Mac can hear you at all

Go to **System Settings → Sound → Input**, select the same microphone, and talk. The **input level** bars should move. If they don't:

- Turn the input volume up.
- Unplug and reconnect a USB or Bluetooth microphone.
- Try the built-in microphone to rule out the external one.

## 4. Test in a simple app

Open **TextEdit** or **Notes** and try Dictation there. If it works, the problem is the app you were using, not Dictation. Restart that app or try a different text box.

## 5. Check the app's microphone permission

Some apps need their own microphone permission. Open **System Settings → Privacy & Security → Microphone** and make sure the app you're dictating into (or your dictation app) is allowed.

## 6. Turn Dictation off and on again

Switch Dictation **off**, wait a few seconds, switch it **on** and click **Enable**. This makes macOS re-check (and if needed re-download) the speech files for your language. A half-downloaded language file is a known cause of "icon appears, nothing types".

## 7. Check your shortcut isn't clashing

If pressing the shortcut does nothing, another app may be using the same keys. Pick a different shortcut in Keyboard → Dictation, or test with **Edit → Start Dictation** from the menu bar. See [changing the dictation shortcut](/blog/change-dictation-shortcut-mac).

## 8. Is Voice Control on?

When **Voice Control** (in Accessibility settings) is turned on, it replaces normal Dictation. If you switched it on at some point, either use Voice Control's dictation or turn it off. Here's [the difference between the two](/blog/voice-control-vs-dictation-mac).

## 9. Restart and update

Restart your Mac, then check **System Settings → General → Software Update**. Dictation bugs are often fixed in point updates.

## 10. Try a new user account

As a last resort, create a test user account (**System Settings → Users & Groups**) and try Dictation there. If it works, something in your own account's settings is the culprit, and that's the moment to ask Apple Support for help.

## Still stuck, or want more than Dictation?

If Apple Dictation works but frustrates you (filler words, "new line" sending Slack messages, misspelled names), a dedicated dictation app may suit you better. [MacVoice](/) uses Apple's on-device speech engine with extra cleanup and voice commands. If MacVoice itself won't type, see its [troubleshooting guide](/docs#permissions).
