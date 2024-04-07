import { fetch2 } from '../../common/fetch';
import { env } from '../../env';

const headersWithAuth = {
  Authorization: `Bearer ${env.STRAPI_API_KEY}`,
};

export async function fetchStrapi<T>(path: string) {
  return fetch2<T>(`${env.STRAPI_BASE_URL}/api`, path, headersWithAuth);
}
