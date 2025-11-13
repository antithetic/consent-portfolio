// @ts-check
import alpinejs from '@astrojs/alpinejs';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), UnoCSS({}), markdoc(), alpinejs()],
  adapter: vercel(),
})