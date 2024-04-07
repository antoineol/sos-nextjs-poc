import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { submit } from '../app-utils';

export function useSubmitDebounced(delay = 1000) {
  const submitDebouned = useDebouncedCallback(submit, delay);

  useEffect(
    () => () => {
      submitDebouned.flush();
    },
    [submitDebouned],
  );

  return submitDebouned;
}
