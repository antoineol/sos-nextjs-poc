import { type SfProduct } from '@vue-storefront/unified-data-model';
import { type BWProduct } from './blueway-types';

export function bluewayToSfProducts(products: BWProduct[]) {
  return products.map(p => bluewayToSfProduct(p));
}

export function bluewayToSfProduct(product: BWProduct) {
  const { id, name, description } = product;
  const idStr = `${id}`;
  const SfProduct: SfProduct = {
    id: idStr,
    sku: idStr,
    name: `[BW] ${name}`,
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
