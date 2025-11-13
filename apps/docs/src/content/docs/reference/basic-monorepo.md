---
title: "Basic Monorepo"
decription: "basic install for a monorepo"
---

### Quick read on your current setup

- You already have a valid `pnpm` workspace root: `package.json` and `pnpm-workspace.yaml`.
- Your `pnpm-workspace.yaml` globs (`apps/*`, `packages/*`) are standard and correct for a monorepo.
- You have at least one app at `apps/frontend`.

### What to add/change to make it a clean monorepo

- Configure useful root scripts in `package.json` (keep `private: true` and your `packageManager`):

```json
{
  "private": true,
  "name": "consent-portfolio",
  "version": "1.0.0",
  "scripts": {
    "install": "pnpm -w install",
    "build": "pnpm -r build",
    "dev": "pnpm -r --parallel dev",
    "lint": "pnpm -r lint",
    "test": "pnpm -r test",
    "clean": "pnpm -r clean"
  },
  "packageManager": "pnpm@10.15.1"
}
```

- Ensure each workspace has its own `package.json` with a unique `name` and proper scripts. Example for a shared package:

```json
{
  "name": "@consent/ui",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --dts --format esm,cjs",
    "dev": "tsup src/index.ts --watch",
    "clean": "rimraf dist"
  }
}
```

- Use workspace protocol for internal deps. In an app (e.g. `apps/frontend/package.json`):

```json
{
  "dependencies": {
    "@consent/ui": "workspace:*"
  }
}
```

- Add a root `.npmrc` to keep the root package clean:

```
strict-peer-dependencies=false
auto-install-peers=true
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*typescript*
```

- Optional but recommended
  - Shared TypeScript config: create `packages/tsconfig/tsconfig.base.json` and extend it in apps/packages.
  - Linting/formatting shared configs in `packages/eslint-config` and `packages/prettier-config`.
  - Pipeline/orchestration with Turborepo for fast builds and caching.

Minimal `turbo.json` if you choose Turborepo:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".astro/**", "build/**"]
    },
    "dev": {
      "persistent": true,
      "cache": false
    },
    "lint": {},
    "test": {
      "dependsOn": ["build"]
    }
  }
}
```

### Typical commands you’ll run

- Install all:

```bash
pnpm -w install
```

- Run all dev servers in parallel:

```bash
pnpm -r --parallel dev
```

- Build everything with proper topological order:

```bash
pnpm -r build
```

- Target a single project:

```bash
pnpm --filter apps/frontend dev
```

### Folder structure to aim for

- `apps/frontend` (your Astro app)
- `packages/ui` (shared UI components)
- `packages/configs` (shared tsconfig/eslint/prettier)
- `packages/utils` (shared utilities)

If you want, I can:

- Add the root scripts to `package.json`.
- Create a skeleton `packages/ui` and shared `tsconfig` package.
- Set up `turbo.json`.
