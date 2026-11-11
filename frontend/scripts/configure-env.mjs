import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
let local = {};
try {
  local = Object.fromEntries(
    readFileSync('../.env', 'utf8')
      .split(/\r?\n/)
      .filter((l) => l.trim() && !l.trim().startsWith('#'))
      .map((l) => {
        const i = l.indexOf('=');
        return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
      }),
  );
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
const url = process.env.SUPABASE_URL ?? local.SUPABASE_URL ?? '';
const key = process.env.SUPABASE_PUBLISHABLE_KEY ?? local.SUPABASE_PUBLISHABLE_KEY ?? '';
if (Boolean(url) !== Boolean(key))
  throw new Error('Provide both public Supabase values or leave both empty.');
if (url && new URL(url).protocol !== 'https:') throw new Error('Supabase URL must use HTTPS.');
if (key && !key.startsWith('sb_publishable_'))
  throw new Error('Only a Supabase publishable key is accepted.');
mkdirSync('src/environments', { recursive: true });
writeFileSync(
  'src/environments/environment.generated.ts',
  `// Generated public configuration; do not edit.\nexport const environment = ${JSON.stringify({ supabaseUrl: url, supabasePublishableKey: key })} as const;\n`,
);
