/* -------------------------------------------------------------------------
   Demo script. Every scene shows something the shipped app really does
   (Polished mode): filler removal, chat-safe "new line", Terminal-safe
   output, and "scratch that". Keep mock prices out of these windows.
   ------------------------------------------------------------------------- */

export type Step = { say: string; type?: string; erase?: number };
export type Frame = { text: string; say: string; listening: boolean };
export type AppKind = "mail" | "slack" | "terminal" | "notes";
export type Scene = { app: AppKind; name: string; title: string; sub: string; said: string; frames: Frame[] };

function hold(frames: Frame[], f: Frame, n: number) {
  for (let i = 0; i < n; i++) frames.push(f);
}

function build(steps: Step[]): Frame[] {
  const frames: Frame[] = [];
  let text = "";
  hold(frames, { text, say: "", listening: false }, 6);
  for (const step of steps) {
    if (step.erase) {
      hold(frames, { text, say: step.say, listening: true }, 10);
      text = text.slice(0, text.length - step.erase);
      hold(frames, { text, say: step.say, listening: true }, 12);
    } else if (step.type !== undefined) {
      const words = step.say.split(" ");
      const t = step.type;
      for (let i = 1; i <= t.length; i++) {
        const shown = Math.max(1, Math.ceil((i / t.length) * words.length));
        frames.push({ text: text + t.slice(0, i), say: words.slice(0, shown).join(" "), listening: true });
      }
      text += t;
      hold(frames, { text, say: step.say, listening: true }, 8);
    }
  }
  hold(frames, { text, say: "", listening: false }, 20);
  return frames;
}

function scene(app: AppKind, name: string, title: string, sub: string, steps: Step[]): Scene {
  return { app, name, title, sub, said: steps.map((s) => s.say).join(" … "), frames: build(steps) };
}

const BETA_THU = "Ship the beta on Thursday.";

export const SCENES: Scene[] = [
  scene("mail", "Mail", "Just talk.", "The ums disappear. Punctuation shows up on its own.", [
    { say: "hi priya new paragraph", type: "Hi Priya,\n\n" },
    { say: "um thanks for sending this over", type: "Thanks for sending this over. " },
    { say: "the timeline looks good lets lock friday for the beta", type: "The timeline looks good. Let's lock Friday for the beta." },
  ]),
  scene("slack", "Slack", "Say “new line”. Nothing sends.", "In Slack, WhatsApp and Teams, a new line stays a new line.", [
    { say: "yes its merged", type: "Yes, it's merged." },
    { say: "new line", type: "\n" },
    { say: "ill deploy after standup", type: "I'll deploy after standup." },
  ]),
  scene("terminal", "Terminal", "Safe in Terminal.", "No capital letters, no trailing period. The command still runs.", [
    { say: "um git pull origin main", type: "git pull origin main" },
  ]),
  scene("notes", "Notes", "Then fix it with your voice.", "Say “scratch that” to delete the last sentence MacVoice typed.", [
    { say: "ship the beta on thursday", type: BETA_THU },
    { say: "scratch that", erase: BETA_THU.length },
    { say: "ship the beta on friday", type: "Ship the beta on Friday." },
  ]),
];

export function frameAt(scene: Scene, index: number): Frame {
  return scene.frames[Math.max(0, Math.min(index, scene.frames.length - 1))];
}
