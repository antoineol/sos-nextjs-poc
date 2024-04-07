'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { type FC } from 'react';
import { ErrorComp } from '../../_components/ErrorComp';
import { type SearchProductsResp } from './product-actions';
import { useProducts } from './product-hooks';

interface ProductListProps {
  initialProducts: SearchProductsResp;
}

export const ProductList: FC<ProductListProps> = function ProductList(props) {
  const { products } = useProducts(props.initialProducts);

  const [ref] = useAutoAnimate();

  if (products?.validationErrors ?? products?.serverError) {
    return <ErrorComp resp={products} />;
  }

  return (
    <ul className="list-disc" ref={ref}>
      {products?.data?.map(p => (
        <li className="ml-4" key={p.id}>
          {p.name}
        </li>
      ))}
    </ul>
  );
};
