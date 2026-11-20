import { NextResponse } from "next/server";
import { dmgResponse, resolveDmgPath } from "@/lib/release";

/**
 * MacVoice is free: anyone can download the DMG, no checkout or account.
 *
 * Set MACVOICE_DOWNLOAD_URL (e.g. a GitHub Releases asset) to serve the file
 * from there instead; otherwise the DMG is streamed from server storage.
 */
export async function GET() {
  const external = process.env.MACVOICE_DOWNLOAD_URL?.trim();
  if (external) {
    return NextResponse.redirect(external, { status: 302 });
  }

  const filePath = resolveDmgPath();
  if (!filePath) {
    console.error("MacVoice.dmg not found: set MACVOICE_DOWNLOAD_URL or DMG_FILE_PATH, or add private/releases/MacVoice.dmg");
    return NextResponse.json(
      { error: "The download is temporarily unavailable. Please email akshatthakur22@gmail.com and I'll send it to you." },
      { status: 503 }
    );
  }

  return dmgResponse(filePath);
}

/** Lets the download page check availability without fetching the file. */
export async function HEAD() {
  const available = Boolean(process.env.MACVOICE_DOWNLOAD_URL?.trim()) || resolveDmgPath() !== null;
  return new Response(null, { status: available ? 200 : 503 });
}
