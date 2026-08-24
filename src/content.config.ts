import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    type: z.enum(["Artículo", "Reseña"]),
    externalUrl: z.string().url().optional(),
    source: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    publishedAt: z.coerce.date().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
