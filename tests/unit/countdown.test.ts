import { describe, expect, it } from "vitest";
import { ELECTION } from "@/data/election";
import { electionPhase, getRemaining } from "@/lib/countdown";

const opens = new Date(ELECTION.opensISO).getTime();
const closes = new Date(ELECTION.closesISO).getTime();

describe("election countdown", () => {
  it("polls open at 06:00 EAT = 03:00 UTC on 10 Aug 2027 (a Tuesday)", () => {
    const d = new Date(opens);
    expect(d.toISOString()).toBe("2027-08-10T03:00:00.000Z");
    expect(d.getUTCDay()).toBe(2);
  });
  it("splits remaining time", () => {
    const r = getRemaining(opens, opens - (2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000);
    expect(r).toMatchObject({ days: 2, hours: 3, minutes: 4, seconds: 5, done: false });
  });
  it("never goes negative", () => {
    expect(getRemaining(opens, opens + 5000)).toMatchObject({ total: 0, days: 0, done: true });
  });
  it("phases: before / open / after", () => {
    expect(electionPhase(opens - 1, opens, closes)).toBe("before");
    expect(electionPhase(opens, opens, closes)).toBe("open");
    expect(electionPhase(closes, opens, closes)).toBe("after");
  });
});
