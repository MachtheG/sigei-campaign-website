"use server";
import { headers } from "next/headers";
import { pickAdapter } from "./adapters";
import { schemas, type FormKind } from "./schemas";

export type FormResult =
  | { ok: true }
  | { ok: false; error: "validation" | "rate" | "server"; fields?: Record<string, string> };

// Best-effort in-memory rate limit (per server instance): 5 submissions / 10 min / IP.
// For production at scale, swap for Upstash/Redis or Vercel's WAF rate limiting.
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60_000;
const MAX = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t > WINDOW)) hits.delete(k);
  return recent.length > MAX;
}

export async function submitForm(kind: FormKind, locale: string, raw: unknown): Promise<FormResult> {
  const schema = schemas[kind];
  if (!schema) return { ok: false, error: "validation" };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (limited(ip)) return { ok: false, error: "rate" };

  // Honeypot: bots fill the hidden "website" field. Pretend success, deliver nothing.
  if (raw && typeof raw === "object" && "website" in raw && (raw as { website?: string }).website) return { ok: true };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const i of parsed.error.issues) fields[String(i.path[0])] = i.message;
    return { ok: false, error: "validation", fields };
  }

  try {
    await pickAdapter().run({ kind, locale: locale === "sw" ? "sw" : "en", payload: parsed.data });
    return { ok: true };
  } catch (e) {
    console.error("[forms] delivery failed:", e instanceof Error ? e.message : e);
    return { ok: false, error: "server" };
  }
}
