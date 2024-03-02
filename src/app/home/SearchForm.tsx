'use client';

import type { FC, PropsWithChildren } from 'react';
import { useRefetchProducts } from './product-utils';

type SearchFormProps = PropsWithChildren;

export const SearchForm: FC<SearchFormProps> = function SearchForm(props) {
  const { children } = props;

  const refetchProducts = useRefetchProducts();

  function submit(formData: FormData) {
    const q = (formData.get('query') as string) || '';
    const url = new URL(window.location.href);
    if (q) {
      url.searchParams.set('q', q);
    } else {
      url.searchParams.delete('q');
    }

    history.replaceState(history.state, '', url);

    refetchProducts();
  }

  return (
    <form action={submit} className="flex gap-2">
      {children}
    </form>
  );
};
