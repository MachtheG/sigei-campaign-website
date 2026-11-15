"use client";
import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

type LiteCtx = { lite: boolean; setLite: (v: boolean) => void };
const Ctx = createContext<LiteCtx>({ lite: false, setLite: () => {} });
export const useLite = () => useContext(Ctx);

/** Inline script (runs before paint) so Lite mode never flashes. */
export const LITE_INIT_SCRIPT = `try{var v=localStorage.getItem('lite');var c=navigator.connection;var a=c&&(c.saveData||/(^|-)2g$/.test(c.effectiveType||''));document.documentElement.dataset.lite=(v===null?a:v==='1')?'1':'0'}catch(e){}`;

const EVT = "lite-change";
const subscribe = (cb: () => void) => {
  window.addEventListener(EVT, cb);
  return () => window.removeEventListener(EVT, cb);
};
const snapshot = () => document.documentElement.dataset.lite === "1";

/** Lite mode lives on <html data-lite>, set before paint by LITE_INIT_SCRIPT; React just mirrors it. */
export function LiteProvider({ children }: { children: React.ReactNode }) {
  const lite = useSyncExternalStore(subscribe, snapshot, () => false);

  const setLite = useCallback((v: boolean) => {
    document.documentElement.dataset.lite = v ? "1" : "0";
    try {
      localStorage.setItem("lite", v ? "1" : "0");
    } catch {}
    window.dispatchEvent(new Event(EVT));
  }, []);

  const value = useMemo(() => ({ lite, setLite }), [lite, setLite]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
