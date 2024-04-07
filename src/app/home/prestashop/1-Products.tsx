import type { FC } from 'react';
import { SubmitButton } from '../../_components/SubmitButton';
import { ProductList } from './2-ProductList';
import { SearchForm } from './components/SearchForm';
import { SearchInput } from './components/SearchInput';
import { searchProducts } from './product-actions';

interface ProductsProps {
  defaultQuery: string;
}

export const Products: FC<ProductsProps> = async function Products(props) {
  const { defaultQuery } = props;

  const products = await searchProducts(defaultQuery);

  return (
    <>
      <h3 className="mb-2 text-xl font-bold">SOS Products (prestashop)</h3>

      <SearchForm>
        <SearchInput defaultQuery={defaultQuery} />
        <SubmitButton />
      </SearchForm>

      <ProductList initialProducts={products} />
    </>
  );
};
