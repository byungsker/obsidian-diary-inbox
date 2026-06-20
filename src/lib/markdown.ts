export type DiaryEntryInput = {
  text: string;
  linkedText: string;
  linkedTerms: string[];
  timestamp: Date;
  mood?: string;
  energy?: string;
};

export type DailyNoteInput = {
  date: string;
  entry: string;
};

export function createDiaryEntry(input: DiaryEntryInput): string {
  const time = formatTime(input.timestamp);
  const linkedLine = input.linkedTerms.length
    ? `- linked: ${input.linkedTerms.map((term) => `[[${term}]]`).join(", ")}`
    : "- linked: none";
  const moodLine = input.mood ? `- mood: ${input.mood}` : "- mood: unset";
  const energyLine = input.energy ? `- energy: ${input.energy}` : "- energy: unset";

  return [`## ${time}`, "", input.linkedText, "", "### Metadata", "", moodLine, energyLine, linkedLine, "", "### Raw", "", input.text].join("\n");
}

export function createDailyNote(input: DailyNoteInput): string {
  const today = input.date;

  return [
    "---",
    "type: diary",
    `date: ${today}`,
    "source: diary-inbox",
    "tags:",
    "  - diary",
    "  - source/diary-inbox",
    `created: ${today}`,
    `updated: ${today}`,
    "---",
    "",
    `# ${today}`,
    "",
    input.entry,
    "",
  ].join("\n");
}

function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul",
  }).format(date);
}
