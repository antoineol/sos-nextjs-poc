'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts, type GetProductsResp } from './product-actions';

export function useStrapiProducts(initialData?: GetProductsResp) {
  const { data: products /* , error */ } = useQuery({
    queryKey: ['strapi-products'],
    queryFn: () => getProducts(),
    initialData,
  });

  // We could also add a mutator here.

  return { products };
}
