import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ztpala.com',
  output: 'static',
  image: {
    service: passthroughImageService()
  }
});
