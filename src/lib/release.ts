import fs from "fs";
import path from "path";

/**
 * Where the MacVoice.dmg release lives on the server. Checked in order:
 * private/releases (deployed with the app), DMG_FILE_PATH, then releases/.
 * Returns null when no DMG is present.
 */
export function resolveDmgPath(): string | null {
  const candidates = [
    path.join(process.cwd(), "private", "releases", "MacVoice.dmg"),
    process.env.DMG_FILE_PATH?.trim() || "",
    path.join(process.cwd(), "releases", "MacVoice.dmg"),
  ].filter(Boolean);

  for (const p of candidates) {
    if (fs.existsSync(/*turbopackIgnore: true*/ p)) return p;
  }
  return null;
}

/** Streams the DMG as a file download. */
export function dmgResponse(filePath: string): Response {
  const { size } = fs.statSync(/*turbopackIgnore: true*/ filePath);
  const fileStream = fs.createReadStream(/*turbopackIgnore: true*/ filePath);

  const body = new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => controller.enqueue(chunk));
      fileStream.on("end", () => controller.close());
      fileStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      fileStream.destroy();
    },
  });

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/x-apple-diskimage",
      "Content-Disposition": 'attachment; filename="MacVoice.dmg"',
      "Content-Length": size.toString(),
      "Cache-Control": "public, max-age=300",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
