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
