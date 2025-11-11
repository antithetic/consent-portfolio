import presetWind4 from '@unocss/preset-wind4'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'fontsource',
    }),
    presetTagify(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
