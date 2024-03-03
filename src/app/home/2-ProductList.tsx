'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { type SfProduct } from '@vue-storefront/unified-data-model';
import { type FC } from 'react';
import { useProducts } from './product-hooks';

interface ProductListProps {
  initialProducts: SfProduct[];
}

export const ProductList: FC<ProductListProps> = function ProductList(props) {
  const { products } = useProducts(props.initialProducts);

  const [ref] = useAutoAnimate();

  return (
    <ul className="list-disc" ref={ref}>
      {products?.map(p => (
        <li className="ml-4" key={p.id}>
          {p.name}
        </li>
      ))}
    </ul>
  );
};
