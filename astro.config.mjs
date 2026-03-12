import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://styazhkov.github.io',
  // Указываем путь к репозиторию, чтобы ссылки на стили стали корректными
  base: '/alexsnow-restvanna.github.io',
  integrations: [tailwind()],
});