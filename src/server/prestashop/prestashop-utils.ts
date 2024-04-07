import { fetch2 } from '../../common/fetch';
import { env } from '../../env';

function toBase64(s: string) {
  // equivalent to `btoa(s)`, which is deprecated.
  return Buffer.from(s, 'utf8').toString('base64');
}

const headersWithAuth = {
  'Output-Format': 'JSON',
  Authorization: `Basic ${toBase64(env.PRESTASHOP_KEY)}`,
};

export async function fetchPrestashop<T>(path: string) {
  return fetch2<T>(env.PRESTASHOP_API_URL, path, headersWithAuth);
}
