"use client";
import { useEffect, useState } from "react";
import { ELECTION } from "@/data/election";
import { electionPhase, getRemaining, type Remaining } from "@/lib/countdown";

const opens = new Date(ELECTION.opensISO).getTime();
const closes = new Date(ELECTION.closesISO).getTime();

export type CountdownState = {
  remaining: Remaining;
  phase: "before" | "open" | "after";
} | null;

/** Returns null on the server and first client render (hydration-safe), then ticks. */
export function useCountdown(intervalMs = 1000): CountdownState {
  const [state, setState] = useState<CountdownState>(null);
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setState({ remaining: getRemaining(opens, now), phase: electionPhase(now, opens, closes) });
    };
    tick();
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return state;
}
