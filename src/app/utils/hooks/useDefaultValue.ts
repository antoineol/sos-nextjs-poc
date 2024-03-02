import { useRef } from 'react';

/**
 * @returns The value from the first render. It won't change until the component is destroyed. Useful for input default values that log an error when they change.
 */
export function useDefaultValue<T>(value: T) {
  return useRef(value).current;
}
