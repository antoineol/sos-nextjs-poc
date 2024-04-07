import { type PrestaShopErrorWrapper } from '../app/utils/app-types';

export async function fetch2<T>(
  baseUrl: string,
  path: string,
  headers?: Record<string, string>,
) {
  if (!path.startsWith('/')) path = `/${path}`;
  const url = `${baseUrl}${path}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await readBody<T>(res);
    if ((body as PrestaShopErrorWrapper)?.errors?.[0]?.message) {
      throw new PrestashopError(body as PrestaShopErrorWrapper);
    }
    throw new FetchError(res, body);
  }
  const res2: T = await (res.json() as Promise<T>);
  return res2;
}

async function readBody<T>(res: Response) {
  try {
    return await (res.json() as Promise<T>);
  } catch (error) {
    return await res.text();
  }
}

type Body<T> = Awaited<ReturnType<typeof readBody<T>>>;

export class PrestashopError extends Error {
  code: number;
  constructor(error: PrestaShopErrorWrapper) {
    const errObj = error.errors?.[0] ?? { message: '', code: -1 };
    const message = errObj.message ?? '';
    super(message);
    this.code = errObj.code;
  }
}

export class FetchError<T> extends Error {
  status: Response['status'];
  statusText: Response['statusText'];
  headers: Response['headers'];
  ok: Response['ok'];
  redirected: Response['redirected'];
  url: Response['url'];
  body: Body<T>;
  constructor(res: Response, body: Body<T>) {
    const message =
      typeof body === 'string'
        ? body
        : (body as PrestaShopErrorWrapper)?.errors?.[0]?.message ?? '';
    super(message);
    this.status = res.status;
    this.statusText = res.statusText;
    this.headers = res.headers;
    this.ok = res.ok;
    this.redirected = res.redirected;
    this.url = res.url;
    this.body = body;
  }
}
