export type WikilinkResult = {
  text: string;
  linkedTerms: string[];
};

export function extractLinkedTerms(text: string): string[] {
  const seen = new Set<string>();
  const terms: string[] = [];
  const matches = text.matchAll(/\[\[([^\]]+)\]\]/g);

  for (const match of matches) {
    const term = match[1]?.trim();
    if (term && !seen.has(term)) {
      seen.add(term);
      terms.push(term);
    }
  }

  return terms;
}

export function wikilinkDiaryText(text: string, dictionary: string[]): WikilinkResult {
  const sortedTerms = Array.from(new Set(dictionary.map((term) => term.trim()).filter(Boolean))).sort(
    (a, b) => b.length - a.length,
  );

  let linkedText = text;

  for (const term of sortedTerms) {
    linkedText = linkTermOutsideExistingLinks(linkedText, term);
  }

  return {
    text: linkedText,
    linkedTerms: extractLinkedTerms(linkedText).sort((a, b) => a.localeCompare(b)),
  };
}

function linkTermOutsideExistingLinks(text: string, term: string): string {
  const escapedTerm = escapeRegExp(term);
  const segments = text.split(/(\[\[[^\]]+\]\])/g);

  return segments
    .map((segment) => {
      if (segment.startsWith("[[") && segment.endsWith("]]")) {
        return segment;
      }

      return segment.replace(new RegExp(escapedTerm, "g"), `[[${term}]]`);
    })
    .join("");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
