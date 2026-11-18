---
title: "How to Dictate Prompts to ChatGPT, Claude and Cursor on a Mac"
description: "Talking to AI is faster than typing to it. How to dictate long, detailed prompts into ChatGPT, Claude, Cursor and other AI tools on a Mac, and why spoken prompts often work better."
published: "2026-11-18"
category: "voice-typing-workflows"
primaryKeyword: "dictate prompts chatgpt mac"
tldr: "Click into the AI tool’s prompt box, start your Mac dictation tool and explain what you want as if talking to a colleague: the goal, the context, constraints and the format you want back. Spoken prompts tend to be longer and more detailed, which usually gets better answers. Use custom words so technical terms come out right."
faq: [{"q":"Is it better to talk to ChatGPT or type?","a":"For long prompts, talking is usually faster and you tend to give more context, which helps the AI. For short commands, typing is fine."},{"q":"Will ‘new line’ send my prompt early?","a":"In many AI chat boxes Return sends. A dictation tool that sends Shift+Return for ‘new line’ in chat-style apps avoids that; otherwise avoid ‘new line’ and just keep talking."}]
---

The best AI prompts are long and specific. The problem: typing a 200-word prompt feels like a chore, so we write 15 words and get a generic answer. Speaking fixes that.

## Why spoken prompts work better

- **You give more context.** When talking, people naturally explain the background, what they tried and what they want. That's exactly what AI tools need.
- **It's roughly 3× faster** than typing on a phone, and faster than most people type on a laptop ([the research](/blog/speaking-vs-typing-speed)).
- **You stay in flow.** You can look at your code or document while you explain.

## A structure that works

Say it in this order. You don't need to be formal:

1. **Goal:** "I want to write a reply to a customer who's upset about a late refund."
2. **Context:** "They've emailed three times, the refund was delayed because of a bank issue, it's now processed."
3. **Constraints:** "Keep it under 120 words, apologetic but not grovelling, no promises about timing."
4. **Format:** "Give me two versions, one formal and one friendly."

## Tool by tool

**ChatGPT, Claude, Gemini (web or desktop app):** click into the prompt box and use your Mac dictation tool. Many of these apps also have their own microphone button; note that those send your audio to that company.

**Cursor, VS Code, Windsurf (AI chat panels):** click into the chat panel and dictate. Describe the change in plain language ("refactor the payment retry function so it backs off exponentially, max five attempts, and add a test"). See [voice typing for developers](/blog/voice-typing-for-developers).

**Claude Code and other terminal AI tools:** these run in a terminal, where a stray Return can submit early. A terminal-aware dictation tool helps ([dictating in Terminal safely](/blog/dictate-in-terminal-safely)).

## Get technical words right

AI prompts are full of jargon: library names, function names, product names. Teach your dictation tool those words. In [MacVoice](/), add them to **Custom words** in the Words tab ("PostgreSQL", "useEffect", "Kubernetes") so Apple's recognizer prefers those spellings. More in [why dictation gets names wrong](/blog/why-dictation-gets-names-wrong).

## Avoid early sends

Many AI chat boxes send on Return. If your dictation tool turns "new line" into Return, a half-finished prompt goes off. MacVoice's Polished mode sends Shift+Return for "new line" in recognised chat apps; in other AI tools, simply don't say "new line": keep talking and add structure with words ("first… second…").

## Privacy

Whatever you dictate *into* an AI tool is sent to that AI company anyway. But your raw voice, including the "ums" and the parts you said and deleted, doesn't need to go anywhere. On-device dictation means only the final text you choose to send leaves your Mac.
