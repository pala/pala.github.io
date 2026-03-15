import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('posts');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
			const match = post.id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
			const year = match ? match[1] : '1970';
			const titleSlug = match ? match[4] : post.id;
			const link = `/${year}/${titleSlug}`;

			return {
				title: post.data.title || post.id,
				pubDate: post.data.date || new Date(post.id.slice(0, 10)),
				description: post.data.description || '',
				link: link,
			};
		}),
	});
}
