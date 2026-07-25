import { getCollection } from "astro:content";

// Drafts stay visible in `npm run dev` so you can preview them locally,
// but are always excluded from production builds regardless of the draft flag's value.
const notDraft = (data: { draft: boolean }) => !import.meta.env.PROD || !data.draft;

export async function getPosts() {
  const posts = await getCollection("posts", ({ data }) => notDraft(data));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => notDraft(data));
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getAllTags(posts: Awaited<ReturnType<typeof getPosts>>) {
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) tags.add(tag);
  }
  return [...tags].sort();
}

// Rough estimate at 200 words/minute — good enough for a "X min read" label, not meant to be precise.
export function getReadingTime(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Frontmatter dates parse as UTC midnight. Forcing UTC here too means the displayed
// date always matches what's written in frontmatter, regardless of the server's local timezone.
export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { dateStyle: "long", timeZone: "UTC" });
}

// Cover images auto-crop to the 4:3 family instead of whatever ratio the source photo happens
// to be: landscape sources crop to 4:3, portrait sources crop to 3:4. Given a target display
// width, returns the matching height so the crop comes out consistent everywhere it's used.
export function getCoverHeight(cover: { width: number; height: number }, targetWidth: number) {
  const ratio = cover.width >= cover.height ? 4 / 3 : 3 / 4;
  return Math.round(targetWidth / ratio);
}
