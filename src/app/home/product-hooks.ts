'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { type SfProduct } from '@vue-storefront/unified-data-model';
import { useCallback } from 'react';
import { getSearchParam, handleError } from '../utils/common-utils';
import { searchProducts } from './product-utils';

export function useProducts(initialData?: SfProduct[]) {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () => searchProducts(getSearchParam('q') ?? ''),
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
