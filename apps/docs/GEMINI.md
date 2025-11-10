# Gemini Project Analysis

## Project Overview

This is a documentation website built with [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) theme. The project is configured to use the `starlight-theme-flexoki` theme for a custom look and feel.

## Key Technologies

- **Astro:** The core framework for building the site.
- **Starlight:** An official Astro template for building documentation sites.
- **starlight-theme-flexoki:** A custom theme for Starlight.

## Project Structure

- **`astro.config.mjs`:** The main configuration file for Astro and Starlight.
- **`src/content/`:** This directory contains the Markdown and MDX files that make up the content of the documentation.
  - **`src/content/docs/`:** The main content of the documentation is organized here.
    - The sidebar is configured in `astro.config.mjs` to have a "Guides" section and a "Reference" section.
- **`package.json`:** Defines the project's dependencies and scripts.

## How to Run the Project

- **Development:** `pnpm dev` or `pnpm start`
- **Build:** `pnpm build`
- **Preview:** `pnpm preview`
