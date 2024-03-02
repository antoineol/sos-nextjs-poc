'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { searchProducts } from '../../server/prestashop/prestashop-api';
import { type Product } from '../../server/prestashop/prestashop-types';
import { getSearchParam, handleError } from '../utils/common-utils';

export function useProducts(initialData?: Product[]) {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () => searchProducts(getSearchParam('q')),
    initialData,
    cacheTime: 0, // Temporary - to avoid a weird SSR cache in the PoC
  });

  // const { mutate } = useMutation({
  //   mutationFn: () => updateProduct(),
  //   onSuccess: () => refetch(),
  // });

  return { products /* , mutate */ };
}

export function useRefetchProducts() {
  const tsqClient = useQueryClient();
  return useCallback(() => {
    void tsqClient
      .refetchQueries({ queryKey: ['products'] })
      .catch(handleError);
  }, [tsqClient]);
}
