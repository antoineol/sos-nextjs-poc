'use server';

import { z } from 'zod';
import { action } from '../../../common/safe-action';
import { type ActionResp } from '../../../common/typing';
import { fetchStrapiProducts } from '../../../server/strapi/strapi-api';

// This schema is used to validate input from client.
const schema = z.void();

export type GetProductsResp = ActionResp<typeof getProducts>;

export const getProducts = action(schema, async () => {
  return fetchStrapiProducts();
});
