import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://styazhkov.github.io',
  base: '/RestVanna',
  integrations: [tailwind()],
  output: 'static',
});
