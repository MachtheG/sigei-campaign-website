import { z } from "zod";

/** Error messages are translation keys (get-involved.errors.*), resolved in the form components. */
const phone = z
  .string()
  .trim()
  .regex(/^(?:\+?254|0)?[17]\d{8}$/, { message: "phone" });
const name = z.string().trim().min(2, { message: "name" }).max(80, { message: "name" });
const consent = z.literal(true, { message: "consent" });
const honeypot = z.string().max(0).optional();

export const CONSTITUENCY_IDS = [
  "sotik",
  "chepalungu",
  "bomet-central",
  "bomet-east",
  "konoin",
  "other",
] as const;
const constituency = z.enum(CONSTITUENCY_IDS, { message: "constituency" });

export const pledgeSchema = z.object({
  name,
  phone,
  constituency,
  consent,
  website: honeypot,
});

export const volunteerSchema = z.object({
  name,
  phone,
  email: z.union([z.literal(""), z.email({ message: "email" })]).optional(),
  constituency,
  help: z.string().trim().max(500, { message: "long" }).optional(),
  consent,
  website: honeypot,
});

export const contactSchema = z.object({
  name,
  email: z.email({ message: "email" }),
  message: z.string().trim().min(10, { message: "message" }).max(2000, { message: "long" }),
  consent,
  website: honeypot,
});

export const schemas = {
  pledge: pledgeSchema,
  volunteer: volunteerSchema,
  contact: contactSchema,
} as const;
export type FormKind = keyof typeof schemas;
export type PledgeInput = z.input<typeof pledgeSchema>;
export type VolunteerInput = z.input<typeof volunteerSchema>;
export type ContactInput = z.input<typeof contactSchema>;
