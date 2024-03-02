import { env } from '../../env';

const headersWithAuth = {
  'Output-Format': 'JSON',
  Authorization: `Basic ${btoa(env.PRESTASHOP_KEY)}`,
};

export async function fetchPrestashop<T>(path: string) {
  if (!path.startsWith('/')) path = `/${path}`;
  const url = `${env.PRESTASHOP_API_URL}${path}`;
  const res = await fetch(url, { headers: headersWithAuth, cache: 'no-store' });
  const productsResp: T = await (res.json() as Promise<T>);
  return productsResp;
}
