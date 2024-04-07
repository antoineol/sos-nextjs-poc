import { type SafeAction } from 'next-safe-action';
import type { FC } from 'react';
import { memo } from 'react';
import { type Schema } from 'zod';
import { type ActionResp } from '../../common/typing';
import { type AppError } from '../utils/app-types';
import { handleError } from '../utils/app-utils';

interface ErrorCompProps {
  error?: AppError;
  resp?: ActionResp<SafeAction<Schema, unknown>>;
}

export const ErrorComp: FC<ErrorCompProps> = memo(function ErrorComp(props) {
  const { resp, error } = props;

  if (error) {
    return <>{typeof error === 'string' ? error : JSON.stringify(error)}</>;
  }
  if (resp) {
    if (resp.validationErrors) {
      handleError('Validation error:', resp.validationErrors);
      return 'Validation error'; // To refine with examples
    }
    if (resp.serverError) {
      handleError(resp.serverError);
      return `Server error: ${resp.serverError}`;
    }
  }

  return null;
});
