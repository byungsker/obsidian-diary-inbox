import { describe, expect, it } from "vitest";
import { createDailyNote, createDiaryEntry } from "./markdown";

describe("createDiaryEntry", () => {
  it("creates an Obsidian-friendly entry with linked text, metadata, and raw text", () => {
    const entry = createDiaryEntry({
      text: "오늘 은둥이랑 회사 이야기를 했다.",
      linkedText: "오늘 [[은둥이]]랑 [[회사]] 이야기를 했다.",
      linkedTerms: ["은둥이", "회사"],
      mood: "mixed",
      energy: "low",
      timestamp: new Date("2026-06-20T22:14:00+09:00"),
    });

    expect(entry).toContain("## 22:14");
    expect(entry).toContain("오늘 [[은둥이]]랑 [[회사]] 이야기를 했다.");
    expect(entry).toContain("- mood: mixed");
    expect(entry).toContain("- energy: low");
    expect(entry).toContain("- linked: [[은둥이]], [[회사]]");
    expect(entry).toContain("### Raw\n\n오늘 은둥이랑 회사 이야기를 했다.");
  });
});

describe("createDailyNote", () => {
  it("creates a daily note with OKF-compatible frontmatter", () => {
    const note = createDailyNote({
      date: "2026-06-20",
      entry: "## 22:14\n\n본문",
    });

    expect(note).toContain("type: diary");
    expect(note).toContain("source: diary-inbox");
    expect(note).toContain("# 2026-06-20");
    expect(note).toContain("## 22:14\n\n본문");
  });
});
