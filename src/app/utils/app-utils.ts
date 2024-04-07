import { type ChangeEvent, type FocusEvent } from 'react';
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

// SyntheticEvent might work, if casting e.target to HTMLInputElement.
export type MySubmitEvent =
  | ChangeEvent<HTMLInputElement>
  | FocusEvent<HTMLInputElement>;

export function submit(e: MySubmitEvent) {
  if (!e.target.form) {
    console.warn('No form to submit. `submit()` has no effect.');
  }
  e.preventDefault();
  e.target.form?.requestSubmit();
}

export function getURLSearchParam(name: string) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
