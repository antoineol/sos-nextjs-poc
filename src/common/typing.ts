import { type SafeAction } from 'next-safe-action';
import { type Schema } from 'zod';

// Awaited => kind of UnwrapPromise
export type ActionResp<T extends SafeAction<Schema, unknown>> = Awaited<
  ReturnType<T>
>;
