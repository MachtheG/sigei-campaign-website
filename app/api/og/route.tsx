import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { stats } from "@/data/record/stats";
import { sources } from "@/data/sources";
import { pick } from "@/data/types";
import { formatNumber, yearsSince } from "@/lib/format";
import { SENATOR_SINCE } from "@/data/record/stats";

export const runtime = "nodejs";

/** Shareable 1200×630 stat card (WhatsApp / X). /api/og?stat=<id>&locale=en|sw */
export function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const locale = q.get("locale") === "sw" ? "sw" : "en";
  const stat = stats.find((s) => s.id === q.get("stat")) ?? stats[0];
  const value = stat.computed === "yearsInOffice" ? Math.floor(yearsSince(SENATOR_SINCE) * 10) / 10 : stat.value;
  const src = sources[stat.sourceIds[0]];
  const big = formatNumber(value, locale, stat.decimals ?? 0) + (stat.suffix ?? "");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b3d2e", color: "#faf7f0", padding: 64 }}>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffc20e" }}>
          {locale === "sw" ? "Seneta Wakili Hillary Sigei · Bomet" : "Sen. Wakili Hillary Sigei · Bomet"}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 170, fontWeight: 800, lineHeight: 1 }}>{big}</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 20, lineHeight: 1.2, maxWidth: 980 }}>{pick(stat.label, locale)}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.85 }}>
          <span>{src ? `${locale === "sw" ? "Chanzo" : "Source"}: ${src.outlet}` : ""}</span>
          <span>{locale === "sw" ? "Mtoto wa Bomet. Kazi Iendelee." : "Bomet's son. The work continues."}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400" } },
  );
}
