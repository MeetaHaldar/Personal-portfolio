import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Static-style OG image generated at build time (simple typographic design).
// NOTE: `ImageResponse` runs at build time (Node runtime) and is not compatible
// with `output: "export"`. If you enable static export, delete this file and
// add a static /public/og.png (1200×630), then set `openGraph.images` in
// app/layout.tsx to "/og.png".

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdf7f4",
          color: "#2a1e26",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Soft decorative gradient corner. */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 460,
            height: 460,
            borderRadius: 460,
            background: "linear-gradient(135deg, #c05b7e, #8b5a9e 55%, #d9a45b)",
            opacity: 0.35,
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#c05b7e",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: 48,
              background: "linear-gradient(135deg, #c05b7e, #8b5a9e 55%, #d9a45b)",
              color: "#fffdfb",
              fontSize: 28,
            }}
          >
            {site.name.charAt(0)}
          </div>
          {site.name}
        </div>
        <div style={{ fontSize: 66, lineHeight: 1.1, maxWidth: 900, fontWeight: 600 }}>
          {site.title}
        </div>
        <div style={{ fontSize: 26, color: "#6f5f68", maxWidth: 900 }}>
          Reliable web applications and business software with React, Next.js and Node.js.
        </div>
      </div>
    ),
    { ...size }
  );
}
