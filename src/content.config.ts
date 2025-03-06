import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const zbn = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/zbn" }),
    schema: z.object({
      isDraft: z.boolean().default(false),
      title: z.string(),
      author: z.string().default('آریا بختیاری | Arya Bakhtiari'),
      description: z.string(),
      pubDate: z.string(),
      updatedDate: z.string(),
    })
});

const nvs = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/nvs" }),
  schema: z.object({
    isDraft: z.boolean().default(false),
    title: z.string(),
    author: z.string().default('آریا بختیاری | Arya Bakhtiari'),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string(),
  })
});

export const collections = { zbn , nvs };
