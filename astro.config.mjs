import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// FIXME Change your site before deploying!
import vercel from "@astrojs/vercel/serverless";
const site = process.env.ASTRO_SITE ?? "https://example.com/";


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: site,
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [tailwind(), mdx()],
  trailingSlash: "never",
  adapter: vercel()
});