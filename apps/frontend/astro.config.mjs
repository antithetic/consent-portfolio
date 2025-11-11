// @ts-check
import mdx from '@astrojs/mdx'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), UnoCSS({})],
})
