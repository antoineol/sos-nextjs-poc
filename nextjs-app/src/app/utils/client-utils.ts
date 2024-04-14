'use client';

import { type ChangeEvent, type FocusEvent } from 'react';

// SyntheticEvent might work, if casting e.target to HTMLInputElement.
export type MySubmitEvent =
  | ChangeEvent<HTMLInputElement>
  | FocusEvent<HTMLInputElement>;

export function getURLSearchParam(name: string) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name) ?? '';
}
export function submit(e: MySubmitEvent) {
  if (!e.target.form) {
    console.warn('No form to submit. `submit()` has no effect.');
  }
  e.preventDefault();
  e.target.form?.requestSubmit();
}
