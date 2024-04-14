import { type SfProduct } from '@vue-storefront/unified-data-model';
import { type PSProduct } from './prestashop-types';

export function prestashopToSfProducts(products: PSProduct[]) {
  return products.map(p => prestashopToSfProduct(p));
}

export function prestashopToSfProduct(product: PSProduct) {
  const { id, name, description } = product;
  const idStr = `${id}`;
  const SfProduct: SfProduct = {
    id: idStr,
    sku: idStr,
    name: `[PS] ${name}`,
    slug: idStr,
    description,
    // ... TODO
    price: null,
    primaryImage: null,
    gallery: [],
    rating: null,
    variants: [],
    attributes: [],
    quantityLimit: null,
  };
  return SfProduct;
}
