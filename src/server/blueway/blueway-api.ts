import 'server-only';
import { bluewayToSfProducts } from './blueway-converter';
import { type BWProduct } from './blueway-types';
import { fetchBlueway } from './blueway-utils';

/** Optional wrapper */
export const blueway = {
  fetchProducts: bwFetchProducts,
  searchProducts: bwSearchProducts,
};

interface ProductsResp {
  products: BWProduct[];
}

// Available parameters: https://devdocs.prestashop-project.org/8/webservice/tutorials/advanced-use/additional-list-parameters/
export async function bwFetchProducts() {
  const productsResp = await fetchBlueway<ProductsResp>(
    '/products?display=full',
  );
  const res = productsResp.products ?? [];
  return bluewayToSfProducts(res);
}

interface SearchResp {
  products: BWProduct[];
  categories: unknown[];
}

export async function bwSearchProducts(search?: string) {
  if (!search) {
    return bwFetchProducts();
  }

  const productsResp = await fetchBlueway<SearchResp>(
    `/search?language=1&display=full&query=${encodeURIComponent(search)}`,
  );
  const res = productsResp.products ?? [];
  return bluewayToSfProducts(res);
}

// interface ProductResp {
//   product: Product;
// }
//
// export async function fetchProduct(id: Product["id"]) {
//   const productsResp = await fetchPrestashop<ProductResp>(`/products/${id}`);
//   return productsResp.product;
// }
