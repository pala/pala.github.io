import { defineConfig, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://ztpala.com',
  output: 'static',

  image: {
    service: passthroughImageService()
  },

  adapter: cloudflare()
});