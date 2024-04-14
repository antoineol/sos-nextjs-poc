'use server';

import { z } from 'zod';
import { action } from '../../../common/safe-action';
import { type ActionResp } from '../../../common/typing';
import { psSearchProducts } from '../../../server/prestashop/prestashop-api';

// This schema is used to validate input from client.
const schema = z.string().max(50);

export type SearchProductsResp = ActionResp<typeof searchProducts>;

export const searchProducts = action(schema, async search => {
  // Here, you can switch between data sources, compose...

  // return sdk.prestashop.searchProducts(search);
  // return sdk.blueway.searchProducts(search);
  // return prestashop.searchProducts(search);
  // return blueway.searchProducts(search);
  return psSearchProducts(search);
  // return bwSearchProducts(search);
});
