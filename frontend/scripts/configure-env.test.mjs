import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const script = fileURLToPath(new URL('./configure-env.mjs', import.meta.url));

function run(overrides, check) {
  const directory = mkdtempSync(join(tmpdir(), 'moneypilot-env-'));
  const output = join(directory, 'src/environments/environment.generated.ts');
  try {
    const result = spawnSync(process.execPath, [script], {
      cwd: directory,
      env: {
        ...process.env,
        SUPABASE_URL: '',
        SUPABASE_PUBLISHABLE_KEY: '',
        ...overrides,
      },
      encoding: 'utf8',
    });
    check(result, output);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('creates missing nested directories with empty public configuration', () => {
  run({}, (result, output) => {
    assert.equal(result.status, 0, result.stderr);
    assert.match(readFileSync(output, 'utf8'), /"supabaseUrl":"","supabasePublishableKey":""/);
  });
});

test('serializes only the public URL and publishable key', () => {
  run(
    {
      SUPABASE_URL: 'https://example.supabase.co',
      SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_example',
      SUPABASE_SERVICE_ROLE_KEY: 'private-test-sentinel',
      DATABASE_URL: 'database-test-sentinel',
    },
    (result, output) => {
      assert.equal(result.status, 0, result.stderr);
      const source = readFileSync(output, 'utf8');
      const config = JSON.parse(source.match(/export const environment = (.*) as const;/)[1]);
      assert.deepEqual(config, {
        supabaseUrl: 'https://example.supabase.co',
        supabasePublishableKey: 'sb_publishable_example',
      });
      assert.doesNotMatch(source, /private-test-sentinel|database-test-sentinel/);
    },
  );
});

for (const [name, values] of [
  ['unpaired values', { SUPABASE_URL: 'https://example.supabase.co' }],
  [
    'secret keys',
    { SUPABASE_URL: 'https://example.supabase.co', SUPABASE_PUBLISHABLE_KEY: 'sb_secret_example' },
  ],
  [
    'non-HTTPS URLs',
    {
      SUPABASE_URL: 'http://example.supabase.co',
      SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_example',
    },
  ],
]) {
  test(`rejects ${name} before generating frontend code`, () => {
    run(values, (result, output) => {
      assert.notEqual(result.status, 0);
      assert.equal(existsSync(output), false);
    });
  });
}
