import 'server-only';
import { fetchStrapi } from './strapi-utils';

// Ideally, should be generated from Strapi

interface RichTextNode {
  type: string;
  children: RichTextNode[];
}

interface StrapiProductsResp {
  data: {
    id: number;
    attributes: {
      Name: string;
      Description: RichTextNode[];
    };
  }[];
  // products: StrapiProduct[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

type ProdId = Pick<StrapiProductsResp['data'][number], 'id'>;
type ProdAttr = StrapiProductsResp['data'][number]['attributes'];

interface StrapiProduct extends ProdId, ProdAttr {}

export async function fetchStrapiProducts() {
  const productsResp = await fetchStrapi<StrapiProductsResp>('/restaurants');
  const products: StrapiProduct[] =
    productsResp.data.map(res => {
      const { id, attributes } = res;
      return { id, ...attributes };
    }) ?? [];

  return products;
}
