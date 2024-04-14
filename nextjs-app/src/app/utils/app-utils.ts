import { type AppError, type PrestaShopErrorWrapper } from './app-types';

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function handleError(...error: AppError[]) {
  console.error(
    ...error.map(
      err =>
        (err as PrestaShopErrorWrapper).errors || (err as Error).message || err,
    ),
  );
}
