import { ImageResponse } from "next/og";

export const alt = "MacVoice: private voice typing for Mac. Talk, and your Mac types it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #FFFFFF 0%, #F5F5F7 60%, #EAF3FF 100%)",
          color: "#1D1D1F",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(180deg, #0A84FF 0%, #0071E3 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <rect x="8.5" y="2.5" width="7" height="11.5" rx="3.5" fill="white" />
              <path d="M5.5 10.5C5.5 14.09 8.41 17 12 17C15.59 17 18.5 14.09 18.5 10.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M12 17V21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M8.5 21H15.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1 }}>MacVoice</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            Talk, and your Mac types it.
          </div>
          <div style={{ fontSize: 34, color: "#6E6E73", lineHeight: 1.3 }}>
            Private voice typing for any Mac app. On-device. No subscription.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 26 }}>
          {["$9 once", "Never uploads your voice", "Removes the ums", "Works in any app"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 22px",
                borderRadius: 999,
                background: "#FFFFFF",
                border: "1px solid #E8E8ED",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
