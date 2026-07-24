import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// "_template" files/folders are excluded from both collections so they can hold
// example frontmatter (including a fake image path) without breaking the build.
const templateIgnore = ["!**/_*.{md,mdx}", "!**/_*/**"];

const posts = defineCollection({
  loader: glob({ pattern: ["**/*.{md,mdx}", ...templateIgnore], base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    summary: z.string().optional(), // optional 1-3 sentence summary shown in a collapsible box at the top of the post
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: ["**/*.{md,mdx}", ...templateIgnore], base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      tools: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      tier: z.string().optional(), // optional track/category label, e.g. "Foundational ETL"
      scope: z.string().optional(), // optional one-line scope summary, e.g. "single-day turnaround, two sources"
      deliverables: z.array(z.string()).default([]), // optional list of concrete outputs, distinct from `tools`
    }),
});

export const collections = { posts, projects };
