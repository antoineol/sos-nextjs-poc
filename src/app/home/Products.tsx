import type { FC } from 'react';
import { SubmitButton } from '../_components/SubmitButton';
import {
  fetchProducts,
  searchProducts,
} from '../../server/prestashop/prestashop-api';
import { ProductList } from './ProductList';
import { SearchForm } from './SearchForm';
import { SearchInput } from './SearchInput';

interface ProductsProps {
  defaultQuery: string;
}

export const Products: FC<ProductsProps> = async function Products(props) {
  const { defaultQuery } = props;

  const products = await (defaultQuery
    ? searchProducts(defaultQuery)
    : fetchProducts());

  return (
    <div className="flex flex-col gap-1">
      <h3 className="mb-2 text-xl font-bold">PrestaShop Products</h3>

      <SearchForm>
        <SearchInput defaultQuery={defaultQuery} />
        <SubmitButton />
      </SearchForm>

      <ProductList initialProducts={products} />
    </div>
  );
};
