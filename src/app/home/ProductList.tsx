'use client';

import { type FC } from 'react';
import { type Product } from '../../server/prestashop/prestashop-types';
import { useProducts } from './product-utils';

interface ProductListProps {
  initialProducts: Product[];
}

export const ProductList: FC<ProductListProps> = function ProductList(props) {
  const { products } = useProducts(props.initialProducts);

  return (
    <ul className="list-disc">
      {products?.map(p => (
        <li className="ml-4" key={p.id}>
          {p.name}
        </li>
      ))}
    </ul>
  );
};
