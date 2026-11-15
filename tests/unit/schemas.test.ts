import { describe, expect, it } from "vitest";
import { contactSchema, pledgeSchema } from "@/lib/forms/schemas";

const ok = {
  name: "Jane Chebet",
  phone: "0712345678",
  constituency: "sotik",
  consent: true as const,
};

describe("form schemas", () => {
  it("accepts a valid pledge", () => expect(pledgeSchema.safeParse(ok).success).toBe(true));
  it("accepts +254 numbers", () =>
    expect(pledgeSchema.safeParse({ ...ok, phone: "+254712345678" }).success).toBe(true));
  it("rejects bad phone", () =>
    expect(pledgeSchema.safeParse({ ...ok, phone: "12345" }).success).toBe(false));
  it("requires consent (Data Protection Act)", () => {
    const r = pledgeSchema.safeParse({ ...ok, consent: false });
    expect(r.success).toBe(false);
  });
  it("rejects a filled honeypot", () =>
    expect(pledgeSchema.safeParse({ ...ok, website: "spam" }).success).toBe(false));
  it("contact needs a real message", () => {
    expect(
      contactSchema.safeParse({ name: "Jo", email: "a@b.co", message: "short", consent: true })
        .success,
    ).toBe(false);
  });
});
