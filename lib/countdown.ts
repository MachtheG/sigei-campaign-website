export type Remaining = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** true once the target instant has passed */
  done: boolean;
};

/** Pure: time left between `now` and `target` (both epoch ms). */
export function getRemaining(targetMs: number, nowMs: number): Remaining {
  const total = Math.max(0, targetMs - nowMs);
  const s = Math.floor(total / 1000);
  return {
    total,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: targetMs - nowMs <= 0,
  };
}

/** Polls are open from opens → closes. */
export function electionPhase(
  nowMs: number,
  opensMs: number,
  closesMs: number,
): "before" | "open" | "after" {
  if (nowMs < opensMs) return "before";
  if (nowMs < closesMs) return "open";
  return "after";
}
