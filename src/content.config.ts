import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const nvs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/nvs" }),
  schema: z.object({
    isDraft: z.boolean().default(false),
    title: z.string(),
    author: z.string().default('آریا بختیاری'),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string(),
    version: z.string(),
  })
});

const nvs_en = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/nvs_en" }),
  schema: z.object({
    isDraft: z.boolean().default(false),
    title: z.string(),
    author: z.string().default('Arya Bakh'),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string(),
    version: z.string(),
  })
});

export const collections = { nvs ,nvs_en };
