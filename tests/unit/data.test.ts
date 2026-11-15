import { describe, expect, it } from "vitest";
import { photos } from "@/data/photos";
import { stats } from "@/data/record/stats";
import { timeline } from "@/data/record/timeline";
import { commitments } from "@/data/second-term/commitments";
import { chapters } from "@/data/second-term/story";
import { sources } from "@/data/sources";

describe("data integrity", () => {
  const photoIds = new Set(photos.map((p) => p.id));
  it("every referenced photo exists", () => {
    for (const id of [
      ...stats.map((s) => s.photoId),
      ...timeline.map((e) => e.photoId),
      ...chapters.map((c) => c.photoId),
    ])
      expect(photoIds.has(id), id).toBe(true);
  });
  it("every source id exists", () => {
    for (const ids of [
      ...stats.map((s) => s.sourceIds),
      ...timeline.map((e) => e.sourceIds),
      ...commitments.map((c) => c.sourceIds),
    ])
      for (const id of ids) expect(sources[id], id).toBeDefined();
  });
  it("all commitments are DRAFT", () =>
    expect(commitments.every((c) => c.status === "draft")).toBe(true));
  it("timeline slugs are unique", () =>
    expect(new Set(timeline.map((e) => e.slug)).size).toBe(timeline.length));
  it("has 8+ sourced stats", () =>
    expect(stats.filter((s) => s.sourceIds.length).length).toBeGreaterThanOrEqual(8));
  it("the Tea Bill is never described as law (it lacks assent)", () => {
    const text = JSON.stringify(timeline.filter((e) => e.slug.startsWith("tea")));
    expect(text).not.toMatch(/became law|was assented to|is now law/i);
  });
});
