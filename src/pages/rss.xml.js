import rss from "@astrojs/rss";
import { getPosts } from "../lib/content";

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: "Ken Miko",
		description: "Analytics, budgeting, financial systems, and going back to school as a working adult.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}
