import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { stats, statValue } from "@/data/record/stats";
import { sources } from "@/data/sources";
import { pick } from "@/data/types";
import { formatNumber } from "@/lib/format";

export const runtime = "nodejs";

const INK = "#0b1a14";
const FOREST = "#123d2c";
const PAPER = "#f3efe6";
const EMBER = "#e3a26a";
const UDA = "#f5b800";

/**
 * 1200×630 share cards.
 * - /api/og?page=<title>&locale=en|sw : one per page (set by `og()` in lib/seo).
 * - /api/og?stat=<id>&locale=en|sw    : one per figure, with its source.
 */
export function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const sw = q.get("locale") === "sw";
  const name = sw ? "Seneta Wakili Hillary Sigei" : "Sen. Wakili Hillary Sigei";
  const promise = "Sauti ya Bomet. Kazi Iendelee.";
  const page = q.get("page");
  const stat = page ? null : (stats.find((s) => s.id === q.get("stat")) ?? stats[0]);

  const top = (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
      <span style={{ color: EMBER, fontWeight: 700 }}>{name}</span>
      <span style={{ color: UDA, fontWeight: 700 }}>10.08.2027</span>
    </div>
  );

  let middle: React.ReactNode;
  let foot: string;
  if (stat) {
    const src = sources[stat.sourceIds[0]];
    const big =
      formatNumber(statValue(stat), sw ? "sw" : "en", stat.decimals ?? 0) + (stat.suffix ?? "");
    middle = (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 168, lineHeight: 1 }}>{big}</div>
        <div
          style={{ display: "flex", fontSize: 44, marginTop: 20, lineHeight: 1.2, maxWidth: 1000 }}
        >
          {pick(stat.label, sw ? "sw" : "en")}
        </div>
      </div>
    );
    foot = src ? `${sw ? "Chanzo" : "Source"}: ${src.outlet}` : "";
  } else {
    middle = (
      <div style={{ display: "flex", fontSize: 104, lineHeight: 1, maxWidth: 1050 }}>
        {(page ?? "").slice(0, 80)}
      </div>
    );
    foot = sw ? "Seneta wa Kaunti ya Bomet" : "Senator for Bomet County";
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `linear-gradient(160deg, ${FOREST} 0%, ${INK} 70%)`,
        color: PAPER,
        padding: 64,
      }}
    >
      {top}
      {middle}
      <div
        style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.85 }}
      >
        <span>{foot}</span>
        <span>{promise}</span>
      </div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400" } },
  );
}
