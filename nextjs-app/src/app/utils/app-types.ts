import { type NextPage } from 'next';

export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams: Record<string, string | undefined>;
}

export type Page = NextPage<PageProps>;

export type PrestaShopErrorWrapper = {
  errors: { code: number; message: string }[];
};
export type ValidationError = Partial<Record<'_root', string[]>>;
export type AppError =
  | PrestaShopErrorWrapper
  | ValidationError
  | Error
  | string;
