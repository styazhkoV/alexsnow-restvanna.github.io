import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://styazhkov.github.io',
  base: '/alexsnow-restvanna.github.io', // <--- Обязательно так!
  integrations: [tailwind()],
});
