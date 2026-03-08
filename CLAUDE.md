# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint
- `npx shadcn@latest add <component>` — Add shadcn/ui components

## Architecture

Next.js 16 App Router project with React 19, TypeScript (strict), and Tailwind CSS v4.

**Stack:**
- UI primitives: @base-ui/react (shadcn base-nova style)
- Icons: lucide-react
- Backend: Supabase (@supabase/supabase-js + @supabase/ssr)
- Class utility: `cn()` from `@/lib/utils` (clsx + tailwind-merge)

**Path aliases** (`@/*` maps to root):
- `@/components/ui/*` — shadcn components (button, card, input, label, dropdown-menu, sheet, dialog, avatar)
- `@/lib/*` — Utilities
- `@/hooks/*` — Custom hooks (convention, dir not yet created)

**Styling:** Tailwind v4 with CSS variables for theming (oklch colors). Light/dark mode via `.dark` class. Global styles in `app/globals.css`.

**Components:** All UI components are client components ("use client") wrapping @base-ui/react primitives with cva variants.

## Conventions

- React Server Components by default; add "use client" only when needed
- Import with `@/` path alias, not relative paths
- Use `cn()` for conditional/merged Tailwind classes

## Git

- Remote: https://github.com/iclaudioo/pope.git
- Branch: main
- Deploys to Vercel on push
