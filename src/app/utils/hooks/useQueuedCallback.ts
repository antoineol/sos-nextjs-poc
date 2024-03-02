import { useCallback, useRef } from 'react';

/**
 * Use it to wrap server actions, to work around not being able to cancel server action calls, causing race conditions. For cases when you call multiple times a server action.
 * @param callback The function which calls must be queued. It can take any arguments, and must return a Promise. Queueing is based on Promise resolution.
 * @returns `callback` wrapped by the queue. Calls to this returned function will be queued
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useQueuedCallback<T extends (...args: any[]) => Promise<void>>(
  callback: T,
) {
  const queueRef = useRef<(() => Promise<void>)[]>([]);
  const isProcessingRef = useRef<boolean>(false);

  const processQueue = useCallback(async () => {
    if (isProcessingRef.current || queueRef.current.length === 0) return;

    isProcessingRef.current = true;
    const nextSaveFn = queueRef.current.shift();
    if (nextSaveFn) {
      try {
        await nextSaveFn();
      } finally {
        isProcessingRef.current = false;
      }
      await processQueue();
    }
  }, []);

  const saveIntervalsQueued = useCallback(
    async (...args: unknown[]) => {
      return new Promise<void>((resolve, reject) => {
        const saveFn = async () => {
          try {
            const res = await callback(...args); // Forwarding arguments to saveIntervals
            resolve(res);
            return res;
          } catch (error) {
            reject(error);
            throw error;
          }
        };

        queueRef.current.push(saveFn);
        processQueue().catch(() => {
          /* Ignore */
        });
      });
    },
    [callback, processQueue],
  ) as T;

  return saveIntervalsQueued;
}
