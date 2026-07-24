# kenmiko.com

Personal portfolio + blog. Astro, deployed to Cloudflare via Workers static assets, auto-deployed on every push to `main`.

## Adding a blog post

1. Create a new file: `src/content/posts/your-slug-here.md` (the filename becomes the URL: `/blog/your-slug-here/`).
2. Add frontmatter and content:

   ```md
   ---
   title: "Your Post Title"
   description: "One sentence for search results and social previews."
   date: 2026-08-01
   tags: ["analytics", "budgeting"]
   draft: false
   ---

   Your content in Markdown.
   ```

3. Commit and push to `main`. Cloudflare builds and deploys automatically — usually live within a couple of minutes.

**Drafts:** set `draft: true` to work on a post without publishing it. Draft posts show up when you run the site locally (`npm run dev`) but are always excluded from the production build, so a half-finished post pushed to `main` won't go live by accident.

**Tags:** any tag you use in frontmatter automatically gets a filter page at `/blog/tags/<tag>/` — nothing else to configure.

## Adding a project

Projects live in their own folder (not a single file) so each one can carry its own cover image:

1. Create `src/content/projects/your-project-slug/index.md`
2. Add a cover image next to it, e.g. `src/content/projects/your-project-slug/cover.jpg`
3. Frontmatter:

   ```md
   ---
   title: "Project Title"
   description: "One sentence summarizing the project."
   date: 2026-08-01
   tags: ["sql", "dashboards"]
   draft: false
   tools: ["SQL", "Python", "Power BI"]
   cover: "./cover.jpg"
   coverAlt: "Describe the image for screen readers"
   ---

   Write-up: the problem, what you built, what you used, what the outcome was.
   ```

4. Commit and push. See `src/content/projects/sample-analytics-dashboard/` for a working example — delete it once you have a real project in place.

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`. Draft content is visible locally; `npm run build` (what Cloudflare runs) excludes it.

## Deploying

Deployment is automatic: push to `main` on GitHub, Cloudflare picks it up, runs `npm run build`, then `npx wrangler deploy` to publish the static output. Nothing to trigger by hand.

To preview the exact production build locally before pushing:

```bash
npm run build
npm run preview
```

## Structure worth knowing about

- `src/content.config.ts` — the schema for the two content collections (`posts`, `projects`). If you add a new frontmatter field, add it here too or the build will fail on any file missing it.
- `src/lib/content.ts` — the one place that filters out drafts in production. Both collections go through this, so you don't need to repeat the draft-check logic anywhere else.
- `src/layouts/BaseLayout.astro` — the shared `<head>` (meta tags, Open Graph, RSS link, the dark-mode script) and site header/footer. Every page uses this.
- `src/styles/global.css` — all styling, organized top-to-bottom: design tokens → reset → typography → layout → components → accessibility → responsive. Change a `--variable` in the tokens section at the top rather than hunting for hard-coded values elsewhere.
- `wrangler.jsonc` — tells Cloudflare's deploy step where the built site lives (`./dist`). You shouldn't need to touch this.

## Ongoing upkeep to be aware of

- **Dependencies drift.** Astro, the sitemap/RSS integrations, and the font packages will occasionally have updates. `npm outdated` shows what's behind; not urgent unless something breaks.
- **Font packages** (`@fontsource/atkinson-hyperlegible-next`, `@fontsource/atkinson-hyperlegible-mono`) are self-hosted rather than loaded from Google Fonts, so they're versioned in `package.json` like any other dependency — no external font CDN to go down or add latency.
- **Sitemap and RSS regenerate automatically** on every build from whatever's in the content collections — no manual step.
- **The `site` URL** in `astro.config.mjs` (`https://kenmiko.com`) is used to build canonical URLs, RSS links, and the sitemap. If the domain ever changes, that's the one place to update it.
