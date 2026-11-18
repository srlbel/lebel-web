import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
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
        pattern: '**/[^_]*.{md,mdx}',
        base: './src/content/projects',
    }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            publicationDate: z.date().optional(),
            href: z.string(),
            tags: z.array(z.string()),
        }),
});

export const collections = { blog, projects };
