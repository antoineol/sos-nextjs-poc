import { type SfProduct } from '@vue-storefront/unified-data-model';
import { blueway } from './blueway/blueway-api';
import { prestashop } from './prestashop/prestashop-api';

export interface SDKSource {
  fetchProducts: () => Promise<SfProduct[]>;
  searchProducts: (search?: string) => Promise<SfProduct[]>;
}

/** Optional SDK layer */
export const sdk = {
  prestashop,
  blueway,
};
