import type { FC } from 'react';
import { StrapiProductList } from './2-ProductList';
import { getProducts } from './product-actions';

type ProductsProps = Record<string, never>;

export const StrapiProducts: FC<ProductsProps> = async function Products(
  props,
) {
  const {} = props;

  const products = await getProducts();

  return (
    <>
      <h3 className="mb-2 text-xl font-bold">SOS Products (Strapi)</h3>

      <StrapiProductList initialProducts={products} />
    </>
  );
};
