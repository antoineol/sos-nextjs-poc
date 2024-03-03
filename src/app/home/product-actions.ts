'use server';

import { sdk } from '../../server/sdk';

export async function searchProducts(search?: string) {
  // Here, you can switch between data sources, compose...

  return sdk.prestashop.searchProducts(search);
  // return sdk.blueway.searchProducts(search);
  // return prestashop.searchProducts(search);
  // return blueway.searchProducts(search);
  // return psSearchProducts(search);
  // return bwSearchProducts(search);
}
