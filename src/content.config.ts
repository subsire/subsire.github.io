import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  categories: z.array(z.string()).min(1),
  authors: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: articleSchema,
});

const devDiary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/dev-diary" }),
  schema: articleSchema,
});

const wiki = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wiki" }),
  schema: articleSchema,
});

const sectionCopySchema = z.object({
  heading: z.string(),
  blurb: z.string(),
  cta: z.string(),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    sections: z.object({
      research: sectionCopySchema,
      "dev-diary": sectionCopySchema,
      wiki: sectionCopySchema,
    }),
    outro: z.string().optional(),
  }),
});

export const collections = {
  research,
  "dev-diary": devDiary,
  wiki,
  pages,
};
