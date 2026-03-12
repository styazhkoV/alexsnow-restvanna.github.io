import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://styazhkov.github.io', // Замените на ваш URL GitHub Pages
  base: '/restvanna', // Замените на имя вашего репозитория (если деплой не в корень)
  integrations: [tailwind()],
});
