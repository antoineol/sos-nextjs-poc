import { createSafeActionClient } from 'next-safe-action';
import { FetchError } from './fetch';

// https://next-safe-action.dev/
// To add zod validation, middleware...
export const action = createSafeActionClient({
  handleServerErrorLog(e) {
    if (e instanceof FetchError) {
      console.error(`[${e.status} ${e.statusText}] ${e.url} - ${e.message}`);
      console.error(e.body);
    } else {
      console.error(e);
    }
  },
  //   handleReturnedServerError(e) {
  //     // In this case, we can use the 'MyCustomError` class to unmask errors
  //     // and return them with their actual messages to the client.
  //     if (e instanceof FetchError) {
  //       return e.message;
  //     }
  //     if (e instanceof PrestashopError) {
  //       return e.message;
  //     }
  //
  //     // Every other error that occurs will be masked with the default message.
  //     return DEFAULT_SERVER_ERROR;
  //   },
});
