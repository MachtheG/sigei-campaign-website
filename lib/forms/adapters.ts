import { Resend } from "resend";
import type { FormKind } from "./schemas";

export type Submission = { kind: FormKind; locale: string; payload: Record<string, unknown> };
export type Adapter = (s: Submission) => Promise<void>;

const clean = (p: Record<string, unknown>) => {
  const { website: _hp, consent: _c, ...rest } = p;
  void _hp;
  void _c;
  return rest;
};

/** Email via Resend (RESEND_API_KEY + RESEND_TO [+ RESEND_FROM]). */
const resendAdapter: Adapter = async (s) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = Object.entries(clean(s.payload))
    .map(([k, v]) => `${k}: ${String(v ?? "")}`)
    .join("\n");
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Campaign site <onboarding@resend.dev>",
    to: process.env.RESEND_TO!.split(",").map((x) => x.trim()),
    subject: `[${s.kind}] new submission (${s.locale})`,
    text: `${body}\n\nConsent given: yes (Data Protection Act, 2019)`,
  });
  if (error) throw new Error(error.message);
};

/** Row in a Supabase `submissions` table via the REST API (SUPABASE_URL + SUPABASE_SERVICE_KEY). */
const supabaseAdapter: Adapter = async (s) => {
  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.SUPABASE_SERVICE_KEY!,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ kind: s.kind, locale: s.locale, payload: clean(s.payload) }),
  });
  if (!res.ok) throw new Error(`Supabase ${res.status}`);
};

/** Fallback: log to the server console (personal data is masked). */
const consoleAdapter: Adapter = async (s) => {
  const masked = Object.fromEntries(
    Object.entries(clean(s.payload)).map(([k, v]) => [
      k,
      /phone|email|name/.test(k) ? `${String(v).slice(0, 2)}…` : v,
    ]),
  );
  console.log(`[forms:console] ${s.kind} (${s.locale})`, masked);
};

export function pickAdapter(): { name: string; run: Adapter } {
  if (process.env.RESEND_API_KEY && process.env.RESEND_TO)
    return { name: "resend", run: resendAdapter };
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY)
    return { name: "supabase", run: supabaseAdapter };
  return { name: "console", run: consoleAdapter };
}
