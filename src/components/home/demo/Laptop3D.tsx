import React from "react";

/* -------------------------------------------------------------------------
   A MacBook built from CSS 3D planes. No WebGL, no images: the screen is
   real DOM, so text stays sharp and the demo script drives it directly.

   World space (CSS px, before scaling): x → right, y → down, z → viewer.
   The hinge runs along the x axis at the origin. The deck lies flat in the
   y = 0 plane and extends toward the viewer; the lid stands up from the
   hinge, tilted back by LID_TILT degrees.
   ------------------------------------------------------------------------- */

export const W = 1000; // body width
export const D = 690; // deck depth
export const T = 16; // body thickness
export const LID_H = 650; // lid height
export const BEZEL = { side: 20, top: 22, bottom: 28 };
export const SCREEN_W = W - BEZEL.side * 2; // 960
export const SCREEN_H = LID_H - BEZEL.top - BEZEL.bottom; // 600 (16:10)
export const LID_TILT = 14; // degrees past vertical
/** The screen is laid out at a real Mac resolution, then scaled onto the lid,
 *  so it rasterises sharply when the camera moves in. */
export const NATIVE_W = 1440;
export const NATIVE_H = 900;

const rad = (deg: number) => (deg * Math.PI) / 180;

/** Centre of the screen in world space (used as the dive target). */
export const SCREEN_CENTER = (() => {
  const v = BEZEL.top + SCREEN_H / 2 - LID_H; // distance up the lid, negative
  return { x: 0, y: v * Math.cos(rad(LID_TILT)), z: v * Math.sin(rad(LID_TILT)) };
})();

const face: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  transformOrigin: "0 0",
  backfaceVisibility: "hidden",
};

/* Key rows: [label-less widths in units]. Close to a MacBook layout. */
const ROWS: { h: number; keys: number[] }[] = [
  { h: 0.55, keys: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { h: 1, keys: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5] },
  { h: 1, keys: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  { h: 1, keys: [1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.7] },
  { h: 1, keys: [2.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.2] },
  { h: 1, keys: [1, 1, 1, 1.25, 5.05, 1.25, 1, 3] },
];
/* Index of ⌃, ⌥ and Space in the last row: lit while "listening". */
const SHORTCUT_KEYS = new Set([1, 2, 4]);

function Keyboard({ lit }: { lit: boolean }) {
  return (
    <div
      className="absolute flex flex-col gap-[7px] rounded-[10px] p-[9px]"
      style={{
        left: (W - 880) / 2,
        top: 34,
        width: 880,
        background: "linear-gradient(#1b1b1e, #232327)",
        boxShadow: "inset 0 2px 6px rgb(0 0 0 / 0.6), 0 1px 0 rgb(255 255 255 / 0.5)",
      }}
    >
      {ROWS.map((row, r) => (
        <div key={r} className="flex gap-[7px]" style={{ height: row.h * 52 }}>
          {row.keys.map((k, i) => {
            const isLit = lit && r === ROWS.length - 1 && SHORTCUT_KEYS.has(i);
            if (r === ROWS.length - 1 && i === row.keys.length - 1) {
              // Inverted-T arrow cluster
              return (
                <div key={i} className="grid grid-cols-3 grid-rows-2 gap-[4px]" style={{ flex: k }}>
                  <span />
                  <Key />
                  <span />
                  <Key />
                  <Key />
                  <Key />
                </div>
              );
            }
            return <Key key={i} flex={k} lit={isLit} />;
          })}
        </div>
      ))}
    </div>
  );
}

function Key({ flex, lit }: { flex?: number; lit?: boolean }) {
  return (
    <span
      className="block rounded-[6px] transition-[background,box-shadow] duration-200"
      style={{
        flex,
        background: lit ? "oklch(0.62 0.17 256)" : "linear-gradient(#0d0d0f, #050506)",
        boxShadow: lit
          ? "0 0 18px oklch(0.62 0.17 256 / 0.8), inset 0 1px 0 rgb(255 255 255 / 0.3)"
          : "inset 0 1px 0 rgb(255 255 255 / 0.07), 0 1px 1px rgb(0 0 0 / 0.6)",
      }}
    />
  );
}

export function Laptop3D({
  screen,
  lit = false,
  worldRef,
  style,
}: {
  screen: React.ReactNode;
  /** Light up ⌃ ⌥ Space, as if the shortcut is being pressed. */
  lit?: boolean;
  worldRef?: React.Ref<HTMLDivElement>;
  style?: React.CSSProperties;
}) {
  const t = LID_TILT;
  return (
    <div
      ref={worldRef}
      aria-hidden="true"
      style={{ position: "absolute", left: "50%", top: "50%", width: 0, height: 0, transformStyle: "preserve-3d", ...style }}
    >
      {/* Soft floor shadow */}
      <div
        style={{
          ...face,
          width: W * 1.3,
          height: D * 1.3,
          transform: `translate3d(${-W * 0.65}px, ${T + 2}px, ${-D * 0.1}px) rotateX(90deg)`,
          background: "radial-gradient(closest-side, rgb(0 0 0 / 0.2), transparent)",
        }}
      />

      {/* Deck (top of the base) */}
      <div
        style={{
          ...face,
          width: W,
          height: D,
          transform: `translate3d(${-W / 2}px, 0, 0) rotateX(90deg)`,
          borderRadius: "6px 6px 22px 22px",
          background:
            "radial-gradient(120% 60% at 50% 0%, oklch(0.6 0.08 256 / 0.18), transparent 60%), linear-gradient(oklch(0.86 0.004 286), oklch(0.78 0.004 286))",
          boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 0.08), inset 0 1px 0 rgb(255 255 255 / 0.6)",
        }}
      >
        <Keyboard lit={lit} />
        {/* Trackpad */}
        <div
          className="absolute rounded-[14px]"
          style={{
            left: (W - 470) / 2,
            top: 418,
            width: 470,
            height: 238,
            background: "linear-gradient(oklch(0.82 0.004 286), oklch(0.76 0.004 286))",
            boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 0.08), inset 0 1px 2px rgb(0 0 0 / 0.08)",
          }}
        />
      </div>

      {/* Front edge */}
      <div
        style={{
          ...face,
          width: W,
          height: T,
          transform: `translate3d(${-W / 2}px, 0, ${D}px)`,
          borderRadius: "0 0 14px 14px",
          background: "linear-gradient(oklch(0.72 0.004 286), oklch(0.5 0.004 286))",
        }}
      >
        <div className="mx-auto h-[6px] w-[150px] rounded-b-[8px] bg-black/25" />
      </div>

      {/* Lid: aluminium rim → black bezel → screen */}
      <div
        style={{
          ...face,
          width: W,
          height: LID_H,
          transform: `translate3d(${-W / 2}px, 0, 0) rotateX(${t}deg) translate3d(0, ${-LID_H}px, 0)`,
          borderRadius: 26,
          padding: 3,
          background: "linear-gradient(oklch(0.84 0.004 286), oklch(0.66 0.004 286))",
          boxShadow: "0 0 0 1px rgb(0 0 0 / 0.12)",
        }}
      >
        <div className="relative h-full w-full rounded-[23px] bg-[#070708]">
          <div
            className="absolute overflow-hidden rounded-[6px] bg-black"
            style={{
              left: BEZEL.side - 3,
              top: BEZEL.top - 3,
              width: SCREEN_W,
              height: SCREEN_H,
            }}
          >
            <div
              className="absolute left-0 top-0"
              style={{
                width: NATIVE_W,
                height: NATIVE_H,
                transform: `scale(${SCREEN_W / NATIVE_W})`,
                transformOrigin: "0 0",
              }}
            >
              {screen}
            </div>
            {/* Glass sheen */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(160deg, rgb(255 255 255 / 0.07), transparent 40%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
