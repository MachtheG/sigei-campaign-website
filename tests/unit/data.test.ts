import { describe, expect, it } from "vitest";
import { photos } from "@/data/photos";
import { constituencies } from "@/data/record/constituencies";
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
  it("constituency voter figures add up to the county register (IEBC 2022)", () => {
    expect(constituencies).toHaveLength(5);
    expect(constituencies.reduce((n, c) => n + c.voters2022, 0)).toBe(
      stats.find((s) => s.id === "registered-voters")!.value,
    );
  });
  it("no claim about his record rests only on unverified sources", () => {
    // Context stats (county population, wards) are exempt; they say nothing about him.
    for (const item of [...stats.filter((s) => !s.context), ...timeline]) {
      const ids = item.sourceIds;
      expect(
        ids.some((id) => sources[id]?.verified),
        ids.join(","),
      ).toBe(true);
    }
  });
  it("running counts carry an as-of date", () => {
    for (const id of ["contributions", "bills-sponsored"])
      expect(stats.find((s) => s.id === id)?.asOf, id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
