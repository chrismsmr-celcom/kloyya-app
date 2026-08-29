import { defineConfig } from 'vitest';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  test: {
    include: ['tests/**/*.{test,spec}.{ts,tsx}'],
  },

  resolve: {
    alias: {
      '@kloyya/types': fileURLToPath(
        new URL('./packages/types/src/index.ts', import.meta.url),
      ),
      '@kloyya/tenancy': fileURLToPath(
        new URL('./packages/tenancy/src/index.ts', import.meta.url),
      ),
      '@kloyya/security': fileURLToPath(
        new URL('./packages/security/src/index.ts', import.meta.url),
      ),
      '@kloyya/validation': fileURLToPath(
        new URL('./packages/validation/src/index.ts', import.meta.url),
      ),
    },
  },
});
