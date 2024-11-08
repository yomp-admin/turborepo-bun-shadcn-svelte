# Turborepo Bun Template with SvelteKit, TailwindCSS and Shadcn-svelte

- apps
  - web
  - docs
- packages
  - @repo/ui
  - @repo/eslint-config

### Install dependencies

`Bun install`: Install all dependencies

### Apps and Packages

- `web`: another [SvelteKit](https://kit.svelte.dev/) app
- `@repo/ui`: a stub Shadcn-svelte component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next`)

### Adding Shadcn components

`Bun ui:add`: Add a new multiple Shadcn components
`Bun ui:add button`: Add a single Shadcn component
`Bun ui:update`: Update Shadcn components index.ts after adding new components

### Run

`Bun run dev`: Run the development server
