import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    // options: https://vitest.dev/config/
    // includeSource: ['src/**/*.{js,ts}'],
    setupFiles: 'dotenv/config', // load variables from .env file
    //   environment: "jsdom",
  },
});
