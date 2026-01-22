import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      published: z.boolean(),
      tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.date().optional(),
      href: z.string(),
    }),
});


const reading_list = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/reading",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      author: z.string(),
      year: z.number(),
      type: z.enum(["Book", "TV", "Movie"])
    }),
});

export const collections = { blog, projects, reading_list };
