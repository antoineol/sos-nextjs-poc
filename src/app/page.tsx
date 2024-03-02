import { Suspense } from 'react';
import { LoaderBlock } from './_components/Loader';
import { Products } from './home/1-Products';
import { type Page } from './utils/common-types';

export const Home: Page = async props => {
  const {
    searchParams: { q = '' },
  } = props;

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Suspense fallback={<LoaderBlock />}>
        <Products defaultQuery={q} />
      </Suspense>
    </main>
  );
};

export default Home;
