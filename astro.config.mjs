import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://styazhkoV.github.io/alexsnow-restvanna.github.io",
  base: "/alexsnow-restvanna.github.io",
  output: "static",
  integrations: [sitemap()],
});
