"use client";
import { useLocale } from "next-intl";
import { useState } from "react";
import { submitForm, type FormResult } from "@/lib/forms/actions";
import type { FormKind } from "@/lib/forms/schemas";

export function useFormSubmit(kind: FormKind) {
  const locale = useLocale();
  const [state, setState] = useState<"idle" | "sending" | "done" | "error" | "rate">("idle");
  const [serverFields, setServerFields] = useState<Record<string, string>>({});

  async function send(values: unknown) {
    setState("sending");
    let res: FormResult;
    try {
      res = await submitForm(kind, locale, values);
    } catch {
      setState("error");
      return;
    }
    if (res.ok) setState("done");
    else if (res.error === "rate") setState("rate");
    else {
      setServerFields(res.fields ?? {});
      setState("error");
    }
  }
  return { state, send, serverFields, reset: () => setState("idle") };
}
