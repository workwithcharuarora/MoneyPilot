# Initialize MoneyPilot Angular 22 and Supabase foundation

Base: `main`

Head: `feat/project-foundation`

MoneyPilot previously contained only a README. This change adds the Angular 22 application, a responsive public landing page, lazy feature placeholders, reusable public/workspace layouts, light/dark/system preferences and a lazy Supabase client configured exclusively with public values.

The Supabase local project structure reserves migrations and Edge Functions without adding financial tables, authentication, storage buckets, functions or customer data. All dashboard figures are fictional. Workspace routes are explicitly labelled previews, with no authorization claims.

Validation: clean `npm ci`, production build, all 18 Vitest tests, Chromium responsive/route/theme/FAQ/keyboard checks, and production dependency audit. See `docs/task-1-report.md` for exact results and complete file inventory.

Review limitations: no approved visual artifact was present in the repository; the landing design follows the supplied brand and requested sections. Supabase CLI cannot initialize its home state in this read-only environment, so its local config was added manually and syntax-checked only. No remote Supabase integration or production deployment was attempted.
