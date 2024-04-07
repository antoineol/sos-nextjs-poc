'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { type FC } from 'react';
import { Card } from '../../_components/Card';
import { ErrorComp } from '../../_components/ErrorComp';
import { type GetProductsResp } from './product-actions';
import { useStrapiProducts } from './product-hooks';

interface ProductListProps {
  initialProducts: GetProductsResp;
}

export const StrapiProductList: FC<ProductListProps> = function ProductList(
  props,
) {
  const { products } = useStrapiProducts(props.initialProducts);

  const [ref] = useAutoAnimate();

  if (products?.validationErrors ?? products?.serverError) {
    return <ErrorComp resp={products} />;
  }

  return (
    <div className="flex flex-row" ref={ref}>
      {products?.data?.map(p => {
        return (
          <Card
            key={p.id}
            title={p.Name}
            // TODO SSR issues
            // Inspiration: https://strapi.io/blog/integrating-strapi-s-new-rich-text-block-editor-with-next-js-a-step-by-step-guide
            content={<BlocksRenderer content={p.Description} />}
            contentClassName="prose dark:prose-invert"
            image={p.PreviewImage.data.attributes.url}
          />
        );
      })}
    </div>
  );
};
