'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { type FC } from 'react';
import { ErrorComp } from '../../_components/ErrorComp';
import { type GetProductsResp } from './product-actions';
import { useStrapiProducts } from './product-hooks';

interface ProductListProps {
  initialProducts: GetProductsResp;
}

export const StrapiProductList: FC<ProductListProps> = function ProductList(
  props,
) {
  const { products } = useStrapiProducts(props.initialProducts);

  const [ref] = useAutoAnimate();

  if (products?.validationErrors ?? products?.serverError) {
    return <ErrorComp resp={products} />;
  }

  return (
    <ul className="list-disc" ref={ref}>
      {products?.data?.map(p => (
        <li className="ml-4" key={p.id}>
          {p.Name}
        </li>
      ))}
    </ul>
  );
};
