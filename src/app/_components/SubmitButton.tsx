'use client';

import { memo, type FC } from 'react';
import { useFormStatus } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { Loader } from './Loader';

export const SubmitButton: FC = memo(function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={twMerge(
        'relative rounded-full bg-white/10 px-10 py-3 font-semibold transition disabled:text-gray-400',
        !pending && 'hover:bg-white/20',
      )}
      disabled={pending}
    >
      <span className={pending ? 'opacity-20' : undefined}>Submit</span>
      {pending && (
        <Loader wrapperClassName="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2" />
      )}
    </button>
  );
});
