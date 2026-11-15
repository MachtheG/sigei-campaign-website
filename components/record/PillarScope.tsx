"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useCallback, useContext, useMemo } from "react";
import { PILLARS, type PillarId } from "@/data/types";

export type PillarSel = PillarId | "all";
const Ctx = createContext<{ pillar: PillarSel; setPillar: (p: PillarSel) => void }>({
  pillar: "all",
  setPillar: () => {},
});
export const usePillar = () => useContext(Ctx);

/**
 * Holds the selected pillar, synced to ?pillar= in the URL. Children stay server-rendered:
 * filtering is done in CSS via the wrapper's data-pillar attribute (see globals.css).
 */
export function PillarScope({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const raw = params.get("pillar") ?? "";
  const pillar: PillarSel = (PILLARS as readonly string[]).includes(raw)
    ? (raw as PillarId)
    : "all";

  const setPillar = useCallback((p: PillarSel) => {
    const url = new URL(window.location.href);
    if (p === "all") url.searchParams.delete("pillar");
    else url.searchParams.set("pillar", p);
    window.history.replaceState(null, "", url.toString());
  }, []);

  const value = useMemo(() => ({ pillar, setPillar }), [pillar, setPillar]);
  return (
    <Ctx.Provider value={value}>
      <div data-pillar={pillar}>{children}</div>
    </Ctx.Provider>
  );
}
