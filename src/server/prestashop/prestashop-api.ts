'use server';

import { type Product } from './prestashop-types';
import { fetchPrestashop } from './prestashop-utils';

interface ProductsResp {
  products: Product[];
}

// Available parameters: https://devdocs.prestashop-project.org/8/webservice/tutorials/advanced-use/additional-list-parameters/
export async function fetchProducts() {
  const productsResp = await fetchPrestashop<ProductsResp>(
    '/products?display=full',
  );
  const res = productsResp.products ?? [];
  return res;
}

interface SearchResp {
  products: Product[];
  categories: unknown[];
}

export async function searchProducts(search?: string | null) {
  if (!search) {
    return fetchProducts();
  }

  const productsResp = await fetchPrestashop<SearchResp>(
    `/search?language=1&display=full&query=${encodeURIComponent(search)}`,
  );
  const res = productsResp.products ?? [];
  return res;
}

// interface ProductResp {
//   product: Product;
// }
//
// export async function fetchProduct(id: Product["id"]) {
//   const productsResp = await fetchPrestashop<ProductResp>(`/products/${id}`);
//   return productsResp.product;
// }
