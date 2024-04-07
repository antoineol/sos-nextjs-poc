import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const appConfig = {
  fakeApiDelayInDev: true,
  dbtablePrefix: 'ft_drizzle_',
  // Usage in files to host on edge runtime:
  // export const { runtime, preferredRegion } = appConfig.edgeRuntime;
  edgeRuntime: {
    // VSCode Auto-completion in page/layout files.
    /** @type {"edge" | "nodejs" | "experimental-edge" | undefined} */
    runtime: 'edge', // 'edge' | 'nodejs'
    /** @type {'auto' | 'global' | 'home' | ('bom1' | 'cdg1' | 'cle1' | 'cpt1' | 'dub1' | 'fra1' | 'gru1' | 'hkg1' | 'hnd1' | 'iad1' | 'icn1' | 'kix1' | 'lhr1' | 'pdx1' | 'sfo1' | 'sin1' | 'syd1')[]} */
    preferredRegion: 'auto', // 'auto' | 'global' | 'home' | ['fra1', 'cdg1']
    // regions codes: https://vercel.com/docs/edge-network/regions
  },
};

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    PRESTASHOP_KEY: z.string(),
    PRESTASHOP_API_URL: z.string(),
    STRAPI_API_KEY: z.string(),
    STRAPI_API_URL: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PRESTASHOP_KEY: process.env.PRESTASHOP_KEY,
    PRESTASHOP_API_URL: process.env.PRESTASHOP_API_URL,
    STRAPI_API_KEY: process.env.STRAPI_API_KEY,
    STRAPI_API_URL: process.env.STRAPI_API_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
