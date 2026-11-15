/**
 * Election day. Polls open 06:00 EAT on Tuesday 10 August 2027 (Africa/Nairobi, UTC+3, no DST).
 * Source: sources.ts → "iebc-date-notice" (IEBC notice, 14 Sep 2026). Confirm on iebc.or.ke.
 */
export const ELECTION = {
  timezone: "Africa/Nairobi",
  /** Polls open */
  opensISO: "2027-08-10T06:00:00+03:00",
  /** Polls close: standard 17:00 EAT, [[TO CONFIRM: gazetted closing time]] */
  closesISO: "2027-08-10T17:00:00+03:00",
  sourceIds: ["iebc-date-notice"],
} as const;

export const KEY_DATES = [
  {
    id: "campaign-opens",
    iso: "2027-05-29",
    sourceIds: ["iebc-campaign-period"],
  },
  {
    id: "campaign-closes",
    iso: "2027-08-07",
    sourceIds: ["iebc-campaign-period"],
  },
  {
    id: "election-day",
    iso: "2027-08-10",
    sourceIds: ["iebc-date-notice"],
  },
] as const;

export const IEBC_LINKS = {
  home: "https://www.iebc.or.ke",
  /** [[TO CONFIRM: deep link]], falls back to the IEBC home page if it moves. */
  verify: "https://verify.iebc.or.ke",
};
