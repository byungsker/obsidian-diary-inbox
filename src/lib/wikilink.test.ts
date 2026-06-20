import { describe, expect, it } from "vitest";
import { extractLinkedTerms, wikilinkDiaryText } from "./wikilink";

describe("wikilinkDiaryText", () => {
  it("wraps dictionary terms with Obsidian wikilinks", () => {
    const result = wikilinkDiaryText("오늘 은둥이랑 AI agent OS를 이야기했다.", [
      "은둥이",
      "AI agent OS",
    ]);

    expect(result.text).toBe("오늘 [[은둥이]]랑 [[AI agent OS]]를 이야기했다.");
    expect(result.linkedTerms).toEqual(["AI agent OS", "은둥이"]);
  });

  it("does not double-link terms that are already linked", () => {
    const result = wikilinkDiaryText("오늘 [[은둥이]]랑 은둥이 사진을 봤다.", ["은둥이"]);

    expect(result.text).toBe("오늘 [[은둥이]]랑 [[은둥이]] 사진을 봤다.");
  });

  it("extracts unique linked terms in first-seen order", () => {
    expect(extractLinkedTerms("[[육아]]와 [[회사]], 다시 [[육아]]")).toEqual([
      "육아",
      "회사",
    ]);
  });
});
