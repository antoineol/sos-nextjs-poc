import 'server-only';
import { prestashopToSfProducts } from './prestashop-converter';
import { type PSProduct } from './prestashop-types';
import { fetchPrestashop } from './prestashop-utils';

/** Optional wrapper */
export const prestashop = {
  fetchProducts: psFetchProducts,
  searchProducts: psSearchProducts,
};

interface ProductsResp {
  products: PSProduct[];
}

// Available parameters: https://devdocs.prestashop-project.org/8/webservice/tutorials/advanced-use/additional-list-parameters/
export async function psFetchProducts() {
  const productsResp = await fetchPrestashop<ProductsResp>(
    '/products?display=full',
  );
  const res = productsResp.products ?? [];
  return prestashopToSfProducts(res);
}

interface SearchResp {
  products: PSProduct[];
  categories: unknown[];
}

export async function psSearchProducts(search?: string) {
  if (!search) {
    return psFetchProducts();
  }

  const productsResp = await fetchPrestashop<SearchResp>(
    `/search?language=1&display=full&query=${encodeURIComponent(search)}`,
  );
  const res = productsResp.products ?? [];
  return prestashopToSfProducts(res);
}

// interface ProductResp {
//   product: Product;
// }
//
// export async function fetchProduct(id: Product["id"]) {
//   const productsResp = await fetchPrestashop<ProductResp>(`/products/${id}`);
//   return productsResp.product;
// }
