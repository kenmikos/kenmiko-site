# kenmiko.com

Personal portfolio + blog. Astro, deployed to Cloudflare via Workers static assets, auto-deployed on every push to `main`.

## How I update this site

Everything below assumes you're in the project folder in a terminal (`cd` to wherever you cloned `kenmiko-site`) and have run `npm install` at least once.

### Adding a blog post

1. Copy the template instead of typing frontmatter from scratch:

   ```bash
   cp src/content/posts/_template.md src/content/posts/your-slug-here.md
   ```

   The filename becomes the URL — `your-slug-here.md` publishes at `/blog/your-slug-here/`. Use lowercase words separated by hyphens.

2. Open the new file and fill in the frontmatter. Full example of what it should look like when done:

   ```md
   ---
   title: "Why Your Budget Variance Report Is Lying to You"
   description: "A walkthrough of the most common way variance reports mislead the people reading them, and a simpler fix."
   date: 2026-08-15
   tags: ["budgeting", "analytics"]
   draft: false
   ---

   Your post content goes here, written in normal Markdown: paragraphs, `## headings`,
   **bold**, links, code blocks, lists — all of it works.
   ```

3. Write the post below the frontmatter in Markdown.
4. [Preview it locally](#previewing-before-you-publish) if you want to double check it.
5. [Publish it](#publishing-the-exact-git-commands).

### Adding a portfolio project

Projects are a folder (not a single file) so each one can carry its own cover image alongside the write-up.

1. Copy the template folder:

   ```bash
   cp -r src/content/projects/_template src/content/projects/your-project-slug
   ```

   (On Windows PowerShell: `Copy-Item -Recurse src/content/projects/_template src/content/projects/your-project-slug`)

2. Put a cover image in that new folder — e.g. `src/content/projects/your-project-slug/cover.jpg`. Any of `.jpg`, `.png`, `.svg`, or `.webp` works.
3. Open `src/content/projects/your-project-slug/index.md` and fill in the frontmatter. Full example:

   ```md
   ---
   title: "Capital Project Spend-Rate Dashboard"
   description: "A Power BI dashboard that flags capital projects burning budget faster than schedule progress justifies."
   date: 2026-08-01
   tags: ["dashboards", "project-controls"]
   draft: false
   tools: ["SQL", "Python", "Power BI"]
   cover: "./cover.jpg"
   coverAlt: "Screenshot of the spend-rate dashboard showing a red-flagged project"
   tier: "Intermediate Data Modeling"
   scope: "6-table relational schema, multi-source"
   deliverables: ["Power Query pipeline", "Power BI dashboard", "Process documentation"]
   ---

   Write the project up here: what the problem was, what you built, what you used, and
   what the outcome was.
   ```

   `cover` must point to a file that actually exists in the same folder — that's what the "put a cover image in that folder" step above was for. `tier`, `scope`, and `deliverables` are all optional — leave them out entirely if a project doesn't need them.

4. Write the project write-up below the frontmatter, using `##`/`###` headings for structure (e.g. Project Overview → Scenario/Sources/Process/Results → Findings & Recommendations). Once a project has more than a couple of headings, a table of contents is generated automatically and linked to them — nothing to configure.

   For a section you want collapsed by default (a detailed methodology write-up, for example), wrap it in plain HTML — no setup needed, it's styled to match automatically:

   ```html
   <details>
   <summary>Methodology</summary>

   The collapsed content goes here, in Markdown, same as anywhere else.

   </details>
   ```

5. [Preview it locally](#previewing-before-you-publish), then [publish it](#publishing-the-exact-git-commands).

### Where images go

- **A project's cover image** — goes in that project's own folder (`src/content/projects/your-slug/cover.jpg`), referenced as `./cover.jpg` in its frontmatter. This is the only kind of image that's schema-checked and auto-optimized.
- **Any other image** — a screenshot inside a post, an extra chart in a project write-up — goes in the `public/images/` folder, in a subfolder named after the post or project, and you reference it with a leading `/`:

  - Post images: put the file at `public/images/posts/your-slug/screenshot.png`, reference it in the Markdown as `![description](/images/posts/your-slug/screenshot.png)`.
  - Project images: put the file at `public/images/projects/your-slug/screenshot.png`, reference it as `![description](/images/projects/your-slug/screenshot.png)`.

  These aren't auto-optimized like the cover image, but for occasional screenshots in a monthly-cadence blog that's not worth the extra complexity.

### How the draft flag works

Every post and project has `draft: true` or `draft: false` in its frontmatter.

- **`draft: true`** — visible when you run the site locally (`npm run dev`), so you can review it in the browser. **Never built into the production site**, no matter what. This is checked at build time, not by looking at the date, so there's no way for a draft to leak onto the live site by accident.
- **`draft: false`** — included in the next production build and will go live on your next push to `main`.

The `date` field does **not** control visibility — it only controls sort order and what date is displayed on the page. A post dated next month with `draft: false` publishes immediately, it does not wait. If you want to hold something back, leave `draft: true` until you're ready.

### Adding a new tag

There's nothing to configure — tags are created automatically from whatever you type in a post's or project's `tags: [...]` frontmatter. The first time you use a new tag, a filter page appears automatically at `/blog/tags/that-tag/` on the next build. Keep tags lowercase with hyphens instead of spaces (`project-controls`, not `Project Controls`) so they stay consistent and URL-friendly.

### Previewing before you publish

```bash
npm run dev
```

Opens the site at `http://localhost:4321` with hot-reload — edits show up as you save. This is where drafts are visible, so it's also how you check a `draft: true` post looks right before flipping it to `false`.

To see exactly what will go live (drafts excluded, fully built), instead run:

```bash
npm run build
npm run preview
```

When you're done previewing, stop the dev server with `Ctrl+C` in that terminal, or, if it's still running in the background from an earlier session:

```bash
npx astro dev stop
```

### Publishing (the exact git commands)

Once a post or project looks right and `draft: false` is set:

```bash
git add .
git commit -m "Add post: Why Your Budget Variance Report Is Lying to You"
git push
```

(Swap the commit message for whatever you actually added.) That's the whole publish step — Cloudflare picks up the push automatically, builds, and deploys. Give it a couple of minutes, then check the live site.

## Site-wide settings

- **Site name** ("Ken Miko," shown in the header, footer, browser tab, and RSS feed) — one place to change it: `src/layouts/BaseLayout.astro`, the `siteName` constant near the top of the frontmatter (currently line 18).
- **Nav links** (Blog / Projects / About in the header) — `src/layouts/BaseLayout.astro`, inside the `<nav>` block. Add, remove, or reorder the `<a href="...">Label</a>` lines directly.
- **Home page intro text** — `src/pages/index.astro`, the `<p>` inside the first `<section>`.
- **About page** — `src/pages/about.astro`, edit directly.
- **Site domain** (used for canonical URLs, RSS, and the sitemap) — `astro.config.mjs`, the `site: 'https://kenmiko.com'` value.
- **Colors, fonts, spacing** — `src/styles/global.css`, all at the top in the "Design tokens" section as `--variable: value` pairs. Change a value there rather than hunting for it elsewhere in the CSS.

## Troubleshooting

**"I set `draft: false` and pushed, but my post/project isn't showing up on the live site."**
Give it a couple of minutes — Cloudflare needs to build and deploy after the push. If it's been longer than ~10 minutes, check the build log in the Cloudflare dashboard (Workers & Pages → kenmiko-site → the latest deployment) for an error. Also double check you actually saved `draft: false` (not `draft: true`) and that you pushed to `main`, not another branch.

**The build fails with `InvalidContentEntryDataError` or a message about a collection schema.**
This means a required field is missing, or a value is the wrong type — usually a broken `date` (e.g. `date: not-a-real-date` instead of `date: 2026-01-01`), a missing `title`/`description`, or a `cover` path that doesn't point to a real file in a project's folder. The error names the collection (`posts` or `projects`), the file, and the field — open that file and fix the value. (Adding an extra field that *isn't* in the schema is harmless and gets silently ignored, so this only happens when something required is missing or malformed.)

**`npm run dev` won't start, or says a port is already in use.**
Astro's dev server keeps running in the background even after the terminal command returns (this is expected — it manages itself). If you start a second one, it'll conflict. Run:

```bash
npx astro dev stop
```

then `npm run dev` again. `npx astro dev status` shows whether one is already running.

## Structure worth knowing about

- `src/content.config.ts` — the schema for the two content collections (`posts`, `projects`). Files named `_template.md` or folders named `_template` are deliberately excluded from both, so they can hold example frontmatter without needing real content.
- `src/lib/content.ts` — the one place that filters out drafts in production. Both collections go through this, so you don't need to repeat the draft-check logic anywhere else.
- `src/layouts/BaseLayout.astro` — the shared `<head>` (meta tags, Open Graph, RSS link, the dark-mode script) and site header/footer. Every page uses this.
- `src/styles/global.css` — all styling, organized top-to-bottom: design tokens → reset → typography → layout → components → accessibility → responsive.
- `wrangler.jsonc` — tells Cloudflare's deploy step where the built site lives (`./dist`). You shouldn't need to touch this.

## Ongoing upkeep to be aware of

- **Dependencies drift.** Astro, the sitemap/RSS integrations, and the font packages will occasionally have updates. `npm outdated` shows what's behind; not urgent unless something breaks.
- **Font packages** (`@fontsource/atkinson-hyperlegible-next`, `@fontsource/atkinson-hyperlegible-mono`) are self-hosted rather than loaded from Google Fonts, so they're versioned in `package.json` like any other dependency — no external font CDN to go down or add latency.
- **Sitemap and RSS regenerate automatically** on every build from whatever's in the content collections — no manual step.
