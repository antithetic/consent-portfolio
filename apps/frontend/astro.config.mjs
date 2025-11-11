// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import markdoc from '@astrojs/markdoc';

import vercel from '@astrojs/vercel';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), UnoCSS({}), markdoc(), alpinejs()],
  adapter: vercel(),
})