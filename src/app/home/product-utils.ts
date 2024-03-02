import { psSearchProducts } from '../../server/prestashop/prestashop-api';

export async function searchProducts(search?: string) {
  // Switch between data sources, compose... here

  return psSearchProducts(search);
  // return bwSearchProducts(search);
}
