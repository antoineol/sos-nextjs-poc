import { Suspense } from 'react';
import { LoaderBlock } from './_components/Loader';
import { Products } from './home/prestashop/1-Products';
import { StrapiProducts } from './home/strapi/1-Products';
import { type Page } from './utils/app-types';

const Home: Page = async props => {
  const {
    searchParams: { q = '' },
  } = props;

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Suspense fallback={<LoaderBlock />}>
        <div className="flex flex-col gap-1">
          <StrapiProducts />
          <Products defaultQuery={q} />
        </div>
      </Suspense>
    </main>
  );
};

export default Home;
