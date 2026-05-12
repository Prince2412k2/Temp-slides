# AGENTS.md

## Quick start

- `pnpm install` (uses `pnpm`; `npm`/`yarn` are rejected by preinstall hook)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-server run dev` — run API server (requires `PORT` + `DATABASE_URL`)
- `pnpm --filter @workspace/api-spec run codegen` — regenerate Orval output from `lib/api-spec/openapi.yaml`
  (writes to `lib/api-zod/src/generated/` and `lib/api-client-react/src/generated/`); **run this first if openapi.yaml changes**

## Monorepo map

| Path | Package | Role |
|---|---|---|
| `lib/db/` | `@workspace/db` | Postgres Drizzle ORM schema & client. Exports `.` and `./schema`. Depends on `DATABASE_URL` |
| `lib/api-zod/` | `@workspace/api-zod` | Zod schemas & types, **codegen target** from Orval |
| `lib/api-client-react/` | `@workspace/api-client-react` | React Query hooks + fetch client, **codegen target** from Orval |
| `lib/api-spec/` | `@workspace/api-spec` | `openapi.yaml` source of truth + Orval config; no runtime code |
| `artifacts/api-server/` | `@workspace/api-server` | Express 5 API server, esbuild-bundled CJS→ESM artifact. Entry: `src/index.ts` |
| `artifacts/pm-cert/` | `@workspace/pm-cert` | Vite + React + Tailwind CSS v4 frontend. Port from `PORT`, base path from `BASE_PATH` |
| `artifacts/google-pm-cert/` | `@workspace/google-pm-cert` | Same stack as pm-cert (separate frontend app) |
| `artifacts/mockup-sandbox/` | `@workspace/mockup-sandbox` | Vite + React + shadcn/ui component playground. Has mockup auto-discovery via `mockupPreviewPlugin` |
| `scripts/` | `@workspace/scripts` | Ad-hoc tsx scripts |

## Key conventions

- **pnpm catalogs** manage shared dependency versions in `pnpm-workspace.yaml` (`catalog:` protocol)
- **`autoInstallPeers: false`** in workspace config — peers must be listed explicitly
- **Build order**: `tsc --build` for lib packages (composite projects), esbuild for api-server, Vite for frontends
- **TypeScript**: `moduleResolution: "bundler"`, `customConditions: ["workspace"]`, composite projects in `lib/`
- **Prettier** is configured as devDep but has no `.prettierrc` — defaults apply (orval runs `prettier` on generated code)
- **Generated code** (`lib/*/src/generated/`) is checked in; commit after running codegen
- **Env vars required**: `PORT`, `DATABASE_URL`, `BASE_PATH` (for frontend Vite apps)
- **Security**: `pnpm-workspace.yaml` enforces `minimumReleaseAge: 1440` (1-day supply-chain defense). Add exclusions to `minimumReleaseAgeExclude` only when necessary

## Testing

- No test framework is currently configured in any package

## PPTX export

- `pnpm --filter @workspace/scripts exec tsx src/export-pptx.ts` — generates `Google-PM-Certificate-Study-Guide.pptx` at workspace root from `artifacts/pm-cert` slide React components
- Uses `pptxgenjs` (installed in `scripts/` package). Extracts h1 titles + p text from each slide's TSX and lays them out on PPTX slides with section-colored accents
- Requires slides-manifest.json to be valid first (run `pnpm --filter @workspace/pm-cert run validate-slides`)

## Architecture notes

- All routes mount under `/api` via `artifacts/api-server/src/app.ts`
- Health endpoint at `GET /api/healthz` (validated with `@workspace/api-zod` schemas)
- Vite frontends require `PORT`, `BASE_PATH`, and optionally `REPL_ID` for dev plugins (cartographer, dev-banner)
- mockup-sandbox auto-discovers `src/components/mockups/*.tsx` files; directories/names starting with `_` are excluded
- DB migrations use `drizzle-kit push` (no migration files — schema-as-source via `@workspace/db`)
