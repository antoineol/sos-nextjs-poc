'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { handleError } from '../../utils/app-utils';
import { getURLSearchParam } from '../../utils/client-utils';
import { searchProducts, type SearchProductsResp } from './product-actions';

export function useProducts(initialData?: SearchProductsResp) {
  const { data: products /* , error */ } = useQuery({
    queryKey: ['ps-products'],
    queryFn: () => searchProducts(getURLSearchParam('q')),
    initialData,
    gcTime: 0, // Temporary - to avoid a weird SSR cache in the PoC - or maybe it is because I don't include the `q` value in the queryKey? adding a dynamic key there doesn't seem easy, e.g. because of the refetch below.
  });

  // We could also add a mutator here.

  return { products };
}

export function useRefetchProducts() {
  const tsqClient = useQueryClient();
  return useCallback(() => {
    void tsqClient
      .refetchQueries({
        queryKey: ['ps-products'],
      })
      .catch(handleError);
  }, [tsqClient]);
}
