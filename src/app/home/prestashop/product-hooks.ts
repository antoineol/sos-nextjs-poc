'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { getURLSearchParam, handleError } from '../../utils/app-utils';
import { searchProducts, type SearchProductsResp } from './product-actions';

export function useProducts(initialData?: SearchProductsResp) {
  const { data: products /* , error */ } = useQuery({
    queryKey: ['ps-products'],
    queryFn: () => searchProducts(getURLSearchParam('q') ?? ''),
    initialData,
    gcTime: 0, // Temporary - to avoid a weird SSR cache in the PoC
  });

  // We could also add a mutator here.

  return { products };
}

export function useRefetchProducts() {
  const tsqClient = useQueryClient();
  return useCallback(() => {
    void tsqClient
      .refetchQueries({ queryKey: ['products'] })
      .catch(handleError);
  }, [tsqClient]);
}
