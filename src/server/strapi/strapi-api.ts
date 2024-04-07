import 'server-only';
import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { env } from '../../env';
import { fetchStrapi } from './strapi-utils';

// Ideally, should be generated from Strapi

interface StrapiMediaFormat {
  name: 'thumbnail_Zwieback-1.jpg';
  hash: 'thumbnail_Zwieback_1_afcb0d0748';
  ext: '.jpg';
  mime: 'image/jpeg';
  path: null;
  width: 203;
  height: 156;
  size: 5.11;
  sizeInBytes: 5107;
  url: '/uploads/thumbnail_Zwieback_1_afcb0d0748.jpg';
}

interface StrapiMedia {
  data: {
    attributes: {
      alternativeText: null;
      caption: null;
      createdAt: '2024-04-07T20:18:02.227Z';
      ext: '.jpg';
      formats: {
        thumbnail: StrapiMediaFormat;
        small: StrapiMediaFormat;
        medium: StrapiMediaFormat;
        large: StrapiMediaFormat;
      };
      hash: 'Zwieback_1_afcb0d0748';
      height: 926;
      mime: 'image/jpeg';
      name: 'Zwieback-1.jpg';
      previewUrl: null;
      provider: 'local';
      provider_metadata: null;
      size: 178.88;
      updatedAt: '2024-04-07T20:18:02.227Z';
      url: string;
      width: 120;
    };
    id: number;
  };
}

interface StrapiProductsResp {
  data: {
    id: number;
    attributes: {
      Name: string;
      Description: BlocksContent;
      PreviewImage: StrapiMedia;
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
  const productsResp = await fetchStrapi<StrapiProductsResp>(
    '/restaurants?populate=PreviewImage',
  );
  const products: StrapiProduct[] =
    productsResp.data.map(res => {
      const { id, attributes } = res;
      // p.PreviewImage.data.attributes.url
      const p = { id, ...attributes };
      if (p.PreviewImage?.data.attributes.url) {
        p.PreviewImage.data.attributes.url = `${env.STRAPI_BASE_URL}${p.PreviewImage.data.attributes.url}`;
      }
      return p;
    }) ?? [];

  return products;
}
