import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string().optional(),
		date: z.coerce.date().optional(),
		categories: z.string().optional(),
		layout: z.string().optional(),
		description: z.string().optional(),
	}),
});

const galleriesCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/galleries" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		layout: z.string().default('gallery'),
	}),
});

export const collections = { 
	posts: postsCollection,
	galleries: galleriesCollection 
};
