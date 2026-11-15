"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type LiteCtx = { lite: boolean; setLite: (v: boolean) => void };
const Ctx = createContext<LiteCtx>({ lite: false, setLite: () => {} });
export const useLite = () => useContext(Ctx);

/** Inline script (runs before paint) so Lite mode never flashes. */
export const LITE_INIT_SCRIPT = `try{var v=localStorage.getItem('lite');var c=navigator.connection;var a=c&&(c.saveData||/(^|-)2g$/.test(c.effectiveType||''));document.documentElement.dataset.lite=(v===null?a:v==='1')?'1':'0'}catch(e){}`;

export function LiteProvider({ children }: { children: React.ReactNode }) {
  const [lite, setLiteState] = useState(false);

  useEffect(() => {
    setLiteState(document.documentElement.dataset.lite === "1");
  }, []);

  const setLite = useCallback((v: boolean) => {
    setLiteState(v);
    document.documentElement.dataset.lite = v ? "1" : "0";
    try {
      localStorage.setItem("lite", v ? "1" : "0");
    } catch {}
  }, []);

  const value = useMemo(() => ({ lite, setLite }), [lite, setLite]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
