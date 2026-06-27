import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://styazhkoV.github.io",
  base: "/alexsnow-restvanna.github.io",
});
