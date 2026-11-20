import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShortcutBadge } from "@/components/ui/ShortcutBadge";
import {
  BookOpen,
  Settings,
  Sliders,
  ShieldAlert,
  Trash2,
  Mic,
  BookA,
  SquareTerminal,
  LifeBuoy,
} from "lucide-react";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "MacVoice Guide: Setup, Voice Commands & Troubleshooting",
  description:
    "How to install MacVoice, allow permissions, use voice commands (new line, bullet point, scratch that), add custom words, change the shortcut, and fix common problems.",
  alternates: {
    canonical: "https://macvoice.akshatt.in/docs",
  },
  openGraph: {
    title: "MacVoice Guide: Setup, Voice Commands & Troubleshooting",
    description:
      "Everything you need to set up and get the most out of MacVoice on your Mac.",
    url: "https://macvoice.akshatt.in/docs",
  },
};

const docsBreadcrumb = buildBreadcrumbSchema([
  { name: "Home", item: "https://macvoice.akshatt.in" },
  { name: "Documentation", item: "https://macvoice.akshatt.in/docs" },
]);

const docsHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to install and set up MacVoice on a Mac",
  description:
    "Install MacVoice, allow microphone and accessibility access, and start voice typing in any app.",
  totalTime: "PT3M",
  step: [
    {
      "@type": "HowToStep",
      name: "Download MacVoice",
      text: "Download MacVoice.dmg (under 1 MB) from your purchase confirmation page.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Install to Applications",
      text: "Open MacVoice.dmg and drag MacVoice into the Applications folder. Launch it from Applications, not from inside the disk image.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Allow permissions",
      text: "Allow Microphone access so MacVoice can hear you, and turn MacVoice on under System Settings → Privacy & Security → Accessibility so it can type into other apps.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Start voice typing",
      text: "Click into any text box, press Control + Option + Space, and talk. Press the shortcut again to stop.",
      position: 4,
    },
  ],
};

const card = "p-6 rounded-3xl bg-[#F5F5F7] border border-[#E8E8ED]";
const code = "text-[#0071E3] font-mono bg-[#EAF3FF] px-1.5 py-0.5 rounded";

function DocHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-2xl bg-[#EAF3FF] text-[#0071E3] border border-[#0071E3]/20">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl font-bold text-[#1D1D1F]">{children}</h2>
    </div>
  );
}

const voiceCommands: [string, string][] = [
  ["new line", "Starts a new line (Shift+Return in chat apps, so nothing is sent)"],
  ["new paragraph", "Starts a new paragraph"],
  ["shift enter / soft return", "Line break without sending, in any app"],
  ["bullet point", "Starts a new “- ” list item"],
  ["comma", ","],
  ["question mark", "?"],
  ["exclamation mark / exclamation point", "!"],
  ["full stop", "."],
  ["…period (at the end of what you say)", "."],
  ["semicolon", ";"],
  ["scratch that", "Deletes the last sentence MacVoice typed, or the words before it in the same sentence"],
];

export default function DocsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#FFFFFF]">
      <JsonLd schema={[docsBreadcrumb, docsHowToSchema]} />
      <Container size="narrow">
        <SectionHeader
          as="h1"
          eyebrow="User Guide"
          title="MacVoice Guide"
          description="Set up in a couple of minutes, then learn the handful of things that make MacVoice feel like magic."
        />

        <nav aria-label="On this page" className="mb-12 p-5 rounded-2xl border border-[#E8E8ED] text-xs">
          <div className="font-semibold text-[#1D1D1F] mb-2">On this page</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#0071E3]">
            <a href="#quickstart">Install</a>
            <a href="#first-open">If macOS blocks the first launch</a>
            <a href="#modes">Modes</a>
            <a href="#voice-commands">Voice commands</a>
            <a href="#words">Custom words</a>
            <a href="#terminal">Terminal & chat apps</a>
            <a href="#shortcuts">Shortcut</a>
            <a href="#settings">Other settings</a>
            <a href="#permissions">Troubleshooting</a>
            <a href="#uninstall">Uninstall</a>
          </div>
        </nav>

        <div className="space-y-12 text-[#1D1D1F] text-sm leading-relaxed">
          <section id="quickstart" className="space-y-4">
            <DocHeading icon={BookOpen}>1. Install & start</DocHeading>
            <ol className="list-decimal list-inside space-y-3 pl-2 text-[#6E6E73]">
              <li>
                Download <code className={code}>MacVoice.dmg</code> from your purchase confirmation page.
              </li>
              <li>
                Open the DMG and drag <strong>MacVoice</strong> onto the <strong>Applications</strong> shortcut. Don&apos;t run it from inside the disk image.
              </li>
              <li>
                Open MacVoice from Applications or Spotlight. A microphone icon labelled <strong>MacVoice</strong> appears in your menu bar. Click it → <strong>MacVoice Settings…</strong> to open the MacVoice window any time.
              </li>
              <li>
                The first time you start dictating, allow <strong>Microphone</strong> access, then turn MacVoice on in <em>System Settings → Privacy &amp; Security → Accessibility</em> (MacVoice opens that page for you). It notices the change by itself and plays a sound when it&apos;s ready.
              </li>
              <li>
                Click any text box, press <ShortcutBadge display="⌃⌥Space" size="sm" /> and talk. Press it again to stop. The MacVoice window also has a test box you can try first.
              </li>
            </ol>
            <p className="text-xs text-[#6E6E73]">
              The very first time, macOS may download Apple&apos;s speech model for your language. MacVoice shows <em>&quot;Checking Apple speech model… First setup may download it.&quot;</em> while this happens. After that, everything works offline.
            </p>
          </section>

          <section id="first-open" className="space-y-4">
            <DocHeading icon={ShieldAlert}>2. If macOS blocks the first launch</DocHeading>
            <p className="text-[#6E6E73]">
              If macOS says MacVoice &quot;can&apos;t be opened&quot; or is from an unidentified developer:
            </p>
            <div className={`${card} space-y-2.5 text-xs`}>
              <p>1. Click <strong>Done</strong> on the warning (don&apos;t move MacVoice to the Trash).</p>
              <p>2. Open <em>System Settings → Privacy &amp; Security</em> and scroll down. Next to the message about MacVoice, click <strong>Open Anyway</strong> and confirm.</p>
              <p>
                3. Prefer Terminal? Run <code className={code}>xattr -cr /Applications/MacVoice.app</code> once, then open MacVoice again.
              </p>
            </div>
          </section>

          <section id="modes" className="space-y-4">
            <DocHeading icon={Sliders}>3. Polished vs. Verbatim</DocHeading>
            <p className="text-[#6E6E73]">Switch in the MacVoice window → <strong>Modes</strong> tab.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={card}>
                <h3 className="font-bold mb-1">Polished (default)</h3>
                <p className="text-xs text-[#6E6E73]">
                  Removes &quot;um&quot;, &quot;uh&quot; and stutters, fixes apostrophes (&quot;dont&quot; → &quot;don&apos;t&quot;) and capital letters, and follows voice commands. Types each sentence as soon as you finish it. Best for messages, email and documents.
                </p>
              </div>
              <div className={card}>
                <h3 className="font-bold mb-1">Verbatim</h3>
                <p className="text-xs text-[#6E6E73]">
                  Types exactly what the speech engine heard, word by word, as you speak. No cleanup and no voice commands. Best when you want every word, or like seeing text appear live.
                </p>
              </div>
            </div>
          </section>

          <section id="voice-commands" className="space-y-4">
            <DocHeading icon={Mic}>4. Voice commands</DocHeading>
            <p className="text-[#6E6E73]">
              Available in Polished mode for English. MacVoice ignores these words when you&apos;re clearly talking <em>about</em> them, so &quot;the next line of code&quot;, &quot;add a comma here&quot; or &quot;a long period&quot; are typed normally.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#E8E8ED]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F5F5F7] text-[#6E6E73]">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Say</th>
                    <th className="py-3 px-4 font-semibold">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E8ED]">
                  {voiceCommands.map(([say, result]) => (
                    <tr key={say}>
                      <td className="py-3 px-4 font-mono text-[#0071E3]">{say}</td>
                      <td className="py-3 px-4 text-[#1D1D1F]">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="words" className="space-y-4">
            <DocHeading icon={BookA}>5. Custom words & replacements</DocHeading>
            <p className="text-[#6E6E73]">
              Open the MacVoice window → <strong>Words</strong> tab, edit, then click <strong>Save Words</strong>. Lines starting with <code className={code}>#</code> are ignored.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={card}>
                <h3 className="font-bold mb-1">Custom words</h3>
                <p className="text-xs text-[#6E6E73] mb-3">
                  One per line: names, product names, jargon. Apple&apos;s recognizer prefers these spellings. Works in both modes (up to 100).
                </p>
                <pre className="text-xs font-mono bg-[#FFFFFF] border border-[#E8E8ED] rounded-xl p-3">{`Kubernetes\nPostgreSQL\nPriya Raman`}</pre>
              </div>
              <div className={card}>
                <h3 className="font-bold mb-1">Replacements</h3>
                <p className="text-xs text-[#6E6E73] mb-3">
                  <code className={code}>what you say =&gt; what to type</code>. Whole words, any capitalisation. Use <code className={code}>\n</code> for a line break. Polished mode only.
                </p>
                <pre className="text-xs font-mono bg-[#FFFFFF] border border-[#E8E8ED] rounded-xl p-3">{`mac voice => MacVoice\nmy email => you@example.com\nsign off => Thanks,\\nAkshat`}</pre>
              </div>
            </div>
          </section>

          <section id="terminal" className="space-y-4">
            <DocHeading icon={SquareTerminal}>6. Terminal & chat apps</DocHeading>
            <div className={`${card} space-y-3 text-xs`}>
              <p>
                <strong>Terminals</strong> (Terminal, iTerm2, Warp, Ghostty, kitty, Alacritty, WezTerm, Hyper and more): MacVoice only removes fillers, stutters and applies your replacements. No capital letters, no apostrophes, no trailing period, and &quot;new line&quot; is never turned into Enter. Your command is typed, not run.
              </p>
              <p>
                <strong>Chat apps</strong> (Slack, WhatsApp, Teams, Discord, Telegram, Messages, Signal, Messenger, and Slack/WhatsApp in your browser): &quot;new line&quot; becomes Shift+Return, which adds a line break instead of sending.
              </p>
              <p>
                <strong>Password fields</strong>: when macOS Secure Input is on, MacVoice won&apos;t start and tells you why. This is intentional.
              </p>
            </div>
          </section>

          <section id="shortcuts" className="space-y-4">
            <DocHeading icon={Settings}>7. Change the shortcut</DocHeading>
            <div className={`${card} space-y-2.5 text-xs`}>
              <p>1. Click the <strong>MacVoice</strong> menu bar icon → <strong>MacVoice Settings…</strong></p>
              <p>2. Open the <strong>Shortcut</strong> tab and click the button showing your current shortcut.</p>
              <p>
                3. Press the new combination. It must include Control, Option or Command (e.g. <ShortcutBadge display="⌥Space" size="sm" /> or <ShortcutBadge display="⌘⇧D" size="sm" />). Press Esc to cancel. If another app already uses it, your old shortcut stays active. <strong>Restore Default</strong> brings back <ShortcutBadge display="⌃⌥Space" size="sm" />.
              </p>
            </div>
          </section>

          <section id="settings" className="space-y-4">
            <DocHeading icon={Settings}>8. Other settings</DocHeading>
            <ul className="list-disc list-inside space-y-2 pl-2 text-[#6E6E73]">
              <li><strong>Launch MacVoice at login</strong>: start automatically when you log in.</li>
              <li><strong>Play sound cues on start &amp; stop</strong>: on by default.</li>
              <li><strong>Type one character at a time</strong>: turn on if a specific app drops or garbles text.</li>
              <li><strong>Appearance</strong>: System, Light or Dark.</li>
            </ul>
          </section>

          <section id="permissions" className="space-y-4">
            <DocHeading icon={LifeBuoy}>9. Troubleshooting</DocHeading>
            <div className="space-y-3 text-[#6E6E73]">
              <p>
                <strong>Nothing gets typed:</strong> open <em>System Settings → Privacy &amp; Security → Accessibility</em> and make sure MacVoice is on. If it already is, switch it off and on again. The Settings tab in MacVoice shows whether access is granted.
              </p>
              <p>
                <strong>&quot;Microphone access denied&quot;:</strong> allow MacVoice in <em>System Settings → Privacy &amp; Security → Microphone</em>.
              </p>
              <p>
                <strong>Dictation failed / speech model missing:</strong> click <strong>Try Again</strong> in the MacVoice window. MacVoice re-checks and, if needed, asks macOS to restore Apple&apos;s speech model (needs internet once).
              </p>
              <p>
                <strong>&quot;Secure input active&quot;:</strong> a password field or an app like a password manager has Secure Input on. Click into a normal text box and try again.
              </p>
              <p>
                <strong>Text appears garbled or partially in one app:</strong> enable <em>Type one character at a time</em> in Settings.
              </p>
            </div>
          </section>

          <section id="uninstall" className="space-y-4">
            <DocHeading icon={Trash2}>10. Uninstall</DocHeading>
            <p className="text-[#6E6E73]">
              MacVoice installs no background services or system extensions.
            </p>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E8E8ED] font-mono text-xs text-[#1D1D1F] leading-relaxed">
              1. Quit MacVoice from the menu bar.<br />
              2. Drag /Applications/MacVoice.app to the Trash.<br />
              3. (Optional) remove settings: defaults delete com.typer.voicetyping
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
