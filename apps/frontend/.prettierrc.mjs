// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 800,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
    plugins: ['prettier-plugin-astro'],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
  };