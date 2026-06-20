# Obsidian Diary Inbox

> Write once. Build your life wiki.

Obsidian Diary Inbox is a local-first diary capture layer for Obsidian. The MVP turns short diary text into Obsidian-friendly Markdown with wikilinks, metadata, and raw text preservation.

## MVP direction

- Quick diary capture from web/PWA first
- Markdown output for `diary/daily/YYYY-MM-DD.md`
- Dictionary-based `[[wikilink]]` insertion
- Raw text preservation
- Weekly review generator later
- AI optional, off by default

## Development

```bash
npm install
npm test
npm run lint
npm run build
npm run dev
```

## Preview

This project is configured for GitHub Pages static preview via:

```bash
GITHUB_PAGES=true npm run build
```
