# MacVoice SEO & Growth Plan

_Written November 18, 2026. Re-check competitor prices before quoting them anywhere._

## 1. Where we stand

- **Nobody can find us yet.** A web search for `"MacVoice" app mac` returns other apps (MoVoice, VoiceInk, Voibe), not us. The brand isn't established in search yet.
- **The market is crowded and content-heavy.** Voibe, Spokenly, Yaps, LumeVoice, Voicy and VoiceInk publish dozens of "X pricing", "X vs Y" and "best dictation app for Mac 2026" articles each. A brand-new subdomain with no backlinks won't outrank them on those broad searches for months.
- **So don't fight head-on. Own the angles nobody else can claim:**

| Our angle | What people search for | Why only we can say it |
|---|---|---|
| Never uses the clipboard | "dictation app clipboard", "voice typing paste blocked" | Competitors paste through the clipboard |
| Chat-safe "new line" | "dictate slack without sending", "new line sends message" | Built into MacVoice |
| Terminal-safe | "dictation terminal mac", "voice coding terminal" | Built into MacVoice |
| $9 once | "cheap dictation app mac", "wispr flow alternative one time" | Others cost $25 to $250, or $144 a year |
| Native Apple SpeechAnalyzer, under 1 MB | "speechanalyzer app", "macos 26 dictation" | We're early on the new Apple engine |

## 2. Fix first (this week)

1. **Google Search Console + Bing Webmaster Tools.** Verify the site and submit `https://macvoice.akshatt.in/sitemap.xml` to both. Bing matters because ChatGPT search and Copilot draw on Bing's index. Turn on IndexNow in Bing.
2. **Notarize the app.** An "unidentified developer" warning straight after paying causes refunds and puts off word-of-mouth. The Guide now explains the workaround, but notarization ($99/yr Apple Developer account) removes the problem entirely.
3. **A real demo video (20–40 s).** The homepage demo is an animation. A real screen recording (Slack + "new line", Terminal, "scratch that") is the strongest conversion and trust asset you can make. Put it on YouTube too, since YouTube is its own search engine, and add `VideoObject` schema.
4. **Collect real reviews.** The fake 4.9★ rating has been removed. After about 10 genuine reviews (email buyers at day 7), show them on the page. Only then add review schema, and only with the real numbers.
5. **Privacy-friendly analytics.** The site currently has none. Use Plausible, Umami or Vercel Analytics: cookieless, so it fits the privacy brand. Track `/pricing` visits and checkout clicks.
6. **Decide on a domain.** `macvoice.akshatt.in` works, but a dedicated domain (e.g. a `.app`) builds brand authority faster and looks more trustworthy at checkout. If you switch, do it early, with 301 redirects.
7. **Upgrade Next.js.** The build warns that 16.4.3 has a known security vulnerability.

## 3. Pages to build (in order)

### Comparison pages: highest buying intent
People searching "X alternative" are ready to buy. Be factual and fair, include a "when to choose them instead" section, and date every page.
- `/vs/wispr-flow`: angle is private + pay once + no clipboard. Targets "wispr flow alternative", "wispr flow alternative one time purchase", "wispr flow privacy".
- `/vs/superwhisper`: angle is $9 vs $249.99 and no models to download. Targets "superwhisper alternative", "cheaper superwhisper".
- `/vs/apple-dictation`: angle is what MacVoice adds on top of the same Apple engine. Targets "mac dictation not working well", "apple dictation alternative".
- `/vs/voiceink`: both are on-device and one-time. Be honest that VoiceInk uses Whisper and supports more languages.

### Use-case pages
- `/for/developers`: dictating prompts into Cursor, Claude Code and ChatGPT, commit messages, PR reviews, and Terminal safety. "Talking to AI" is the fastest-growing reason people try voice typing in 2026.
- `/for/slack`: dictating long Slack and Teams messages safely (links to the blog post).
- `/for/writers`: drafts, email, Notes, Google Docs.

## 4. Blog: 50 posts are live (November 18, 2026)

Posts are Markdown files in `src/content/blog/posts/`. To add one, copy any file, change the front matter, and write. The cover image, sitemap entry, hub listing, related links and structured data are all automatic. Add `draft: true` to hide a post.

**Read this before publishing all 50 at once.** Google's "scaled content abuse" policy targets large batches of pages made mainly to rank, especially AI-written ones without real value. These posts were written to be accurate and genuinely useful, but **you** should:
1. **Read every post once**, fix anything that doesn't sound like you, and correct anything you know is wrong. Your name is on them.
2. **Add real screenshots** to the 10 most important posts (list below). First-hand evidence is the strongest quality signal there is.
3. **Consider publishing in batches** (e.g. 15 now, then 5–10 a week) by setting `draft: true` on the rest. This also gives you a steady "fresh content" signal.
4. **Update facts** marked "checked November 2026" every 3–6 months, and set `updated:` in the front matter when you do.

**Screenshots to take (highest value first):**
- `how-to-use-dictation-on-mac`: System Settings → Keyboard → Dictation
- `mac-voice-typing-commands`: MacVoice Polished output in Notes
- `dictate-in-slack-without-sending`: a multi-line Slack draft made by voice
- `dictate-in-terminal-safely`: MacVoice typing `git status` in Terminal
- `add-custom-words-mac-dictation`: the MacVoice Words tab
- `best-dictation-apps-for-mac`: MacVoice window (Dictate tab)
- `voice-control-vs-dictation-mac`: Voice Control "show numbers"
- `mac-dictation-not-working`: Sound → Input level meter
- `dictate-prompts-chatgpt-claude-cursor`: a dictated prompt in an AI chat box
- `why-dictation-apps-need-accessibility-permission`: Privacy & Security → Accessibility

Put screenshots in `public/blog/screenshots/` and reference them in Markdown: `![alt text](/blog/screenshots/name.png "Caption")`.

## 4b. Next topics (once the first 50 are indexed)

All 9 topics from the earlier calendar are now published. Ideas for the next round, prioritising what only MacVoice can show first-hand:

| Title | Target search |
|---|---|
| Dictating in Hindi and Hinglish on a Mac: what works today | "hindi dictation mac", "hinglish voice typing" |
| How we built a dictation app under 1 MB (SpeechAnalyzer + CGEvent) | Hacker News / developer audience, backlinks |
| Dictation for students: notes, essays and assignments | "dictation for students mac" |
| Voice typing for writers with dyslexia | "dictation dyslexia mac" (careful, helpful, non-medical) |
| How to dictate code review comments on GitHub | "github code review by voice" |
| Dictating in Linear, Jira and Notion tickets | "dictate jira tickets" |
| macOS 26 Tahoe dictation: what's new | "macos 26 dictation" |
| MacVoice vs Apple Dictation (side-by-side test with real results) | "macvoice vs apple dictation" |
| MacVoice vs VoiceInk | "voiceink alternative" |
| Speech-to-text glossary (ASR, WER, diarization, streaming…) | many long-tail definitions |

**Writing rules (what makes posts rank and get quoted by AI):**
- Start with a 2–3 sentence direct answer (the blog template already has a "Short answer" box).
- Use real screenshots or GIFs from the app. First-hand evidence is the biggest quality signal.
- Name the author (you, the maker) and date every post. Update it when facts change.
- Every post links to 2 related posts and one product page. Never make a claim the app doesn't support.

## 5. Getting talked about (more important than on-page SEO for a new site)

New sites rank through links and mentions. AI assistants recommend tools they see mentioned on Reddit, AlternativeTo and listicles.

1. **Show HN:** lead with the technical story ("I built a sub-1 MB Mac dictation app on Apple's new SpeechAnalyzer that types instead of pasting"). Answer every comment.
2. **Product Hunt:** with the real demo video. Tuesday to Thursday.
3. **Reddit:** r/macapps (read the self-promo rules), r/MacOS, r/productivity. Answer people's dictation questions helpfully; mention MacVoice only where it fits.
4. **AlternativeTo:** list MacVoice as an alternative to Wispr Flow, Superwhisper, VoiceInk and Apple Dictation. Cheap, and AI engines cite it often.
5. **Listicle outreach:** email authors of independent "best Mac dictation apps" articles (Zapier, 9to5Mac, MacStories, Setapp blog, indie Mac blogs) with a free license and a one-line hook.
6. **Directories:** MacBase (done), MacUpdate, Softpedia, Product Hunt, SaaSHub.
7. **Free trial question (business decision):** the product research recommended a free launch. Right now nobody can try MacVoice before paying, which limits word of mouth and reviews. Consider a 7-day trial or a free word limit.

## 6. Measuring

- Weekly: Search Console → Queries (what you appear for), Pages (which pages get clicks).
- Monthly: pick the 3 queries ranking in positions 8–20 and improve those pages.
- Check AI answers monthly: ask ChatGPT, Perplexity and Google AI Mode "best private dictation app for Mac" and note whether MacVoice is mentioned.
