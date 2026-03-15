import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'http://ztpala.com',
  output: 'static',

  image: {
    service: passthroughImageService()
  },

  adapter: cloudflare({
    imageService: 'passthrough'
  })
});