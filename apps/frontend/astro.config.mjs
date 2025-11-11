// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import markdoc from '@astrojs/markdoc';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), UnoCSS({}), markdoc()],
  adapter: vercel(),
})