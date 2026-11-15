import { ELECTION } from "@/data/election";

// Add-to-calendar file for election day. Times are converted to UTC so every calendar app agrees.
const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function GET() {
  const stamp = fmt(new Date().toISOString());
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sigei Campaign//Election Day//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:general-election-2027@sigei-campaign",
    `DTSTAMP:${stamp}`,
    `DTSTART:${fmt(ELECTION.opensISO)}`,
    `DTEND:${fmt(ELECTION.closesISO)}`,
    "SUMMARY:Kenya General Election 2027: go and vote! / Siku ya Uchaguzi Mkuu",
    "DESCRIPTION:Polls open 6:00 am (EAT). Carry your ID and know your polling station. Verify your registration at iebc.or.ke.",
    "LOCATION:Your polling station",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    "DESCRIPTION:Election day is tomorrow",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ]
    .join("\r\n");
  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="election-day-2027.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
