import { type NextPage } from 'next';

export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams: Record<string, string | undefined>;
}

export type Page = NextPage<PageProps>;
