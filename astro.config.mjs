// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kenmiko.com',
  integrations: [sitemap(), pagefind()],
  markdown: {
    // Links to other sites open in a new tab; internal links (/blog/, /projects/, etc.) don't.
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener', 'noreferrer'],
            // Skip links back to this site itself, even when written as a full URL.
            test: (element) => !String(element.properties?.href ?? '').includes('kenmiko.com'),
          },
        ],
      ],
    }),
  },
});
