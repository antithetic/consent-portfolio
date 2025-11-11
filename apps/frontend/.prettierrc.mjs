/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro', 
    // 'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
}
