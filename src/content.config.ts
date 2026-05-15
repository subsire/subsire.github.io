import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    categories: z.array(z.string()).min(1),
    authors: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { research };
