# MoneyPilot — Track Today. Plan Tomorrow.

A free, public, multi-user personal finance application. This branch delivers **Task 1: project foundation only**. It is not ready to accept customer information.

## Requirements and local development

- Node.js 24.15+ (validated with 24.19.0), npm 11+
- Angular 22 (CLI 22.2.6; exact dependency versions in `frontend/package-lock.json`)
- Supabase CLI and Docker are optional for future local backend work; neither is needed to view this foundation.

```sh
cd frontend
npm ci
npm start
# http://localhost:4200
npm run build
npm test
```

Production output: `frontend/dist/frontend/browser`. A future web host must rewrite application routes to `index.html`. No hosting or production deployment is configured in this task.

## Public environment configuration

Copy `.env.example` to `.env` in the repository root. Leave both values blank to run the preview without Supabase, or set only:

```dotenv
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_public_key
```

The `prestart`, `prebuild` and `pretest` hooks generate ignored `frontend/src/environments/environment.generated.ts`. CI may supply the same two environment variables directly. The generator uses an explicit allowlist, requires paired values, HTTPS and a publishable key prefix. It never serializes other environment variables. `.env` supports simple unquoted `KEY=value` entries.

**Both values are public and become part of the browser bundle.** Never put passwords, service-role/secret keys, JWT signing secrets or database connection strings in frontend configuration. The reusable, lazy `SupabaseService` fails clearly if used without configuration. Session persistence, automatic refresh and URL session detection are disabled. No component invokes it and no backend requests are made by the foundation.

## Structure

```text
frontend/
  scripts/                Public configuration generation
  src/app/
    core/theme/           Persisted light/dark/system preference
    core/supabase/        Reusable Supabase client
    layouts/              Public and future authenticated page shells
    shared/               Theme control and placeholder page
    features/
      landing/            Public landing page and fictional dashboard preview
      <feature>/          Lazy route configuration for each future feature
  src/environments/       Ignored generated public configuration
supabase/
  config.toml             Local Supabase project configuration
  migrations/             Reserved; no SQL or financial tables
  functions/              Reserved; no Edge Functions
```

Routes: `/`, `/login`, `/registration`, `/onboarding`, `/dashboard`, `/accounts`, `/transactions`, `/budgets`, `/bills`, `/goals`, `/reports`, `/settings`. Unknown paths display a not-found page. Route titles are provided. The workspace shell is publicly accessible as a clearly labelled preview: it is **not** an authorization boundary. Implement authentication and route guards in a future task before enabling real data.

## UI and accessibility

The landing page includes a labelled illustrative dashboard, features, planned how-it-works flow, privacy information, native expandable FAQs and registration links. Registration and login are explanatory placeholders, not forms. All financial amounts are fictional. No analytics, external fonts, customer information or bank integrations are included.

Responsive grids and navigation support mobile and desktop. The UI uses semantic landmarks, labelled navigation/theme controls, visible focus, a keyboard skip link, native details/summary, reduced-motion support and light/dark colors. System theme changes are applied live; explicit preferences are stored locally with a storage-denied fallback. Manual assistive-technology review remains advisable before production.

## Supabase scope

`supabase/config.toml` follows the Supabase local project structure. Authentication, Storage and Edge Runtime are disabled locally for this foundation. No remote project is linked, no tables/migrations/policies/buckets/functions have been created, and no database commands were run. Future multi-user data work must implement and test per-user row-level security before storing financial information.

The current CLI attempted to create `/home/agent/.supabase` and failed because that home directory is read-only. An older CLI installation also failed. The project structure was therefore added manually; TOML syntax was checked, but CLI startup/configuration compatibility and Docker services were not validated in this environment.

## Validation and review

See `docs/task-1-report.md` for exact check results, environment limitations and the complete file inventory. The branch is `feat/project-foundation`; do not merge without review. No production deployment was performed.
