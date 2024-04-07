import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  title: ReactNode;
  content?: ReactNode;
  contentClassName?: string;
  image?: string;
}

export const Card: FC<CardProps> = memo(function Card(props) {
  const { title, content, contentClassName, image } = props;

  if (image) {
    return (
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <a /* href="#" */ className="relative flex h-20 w-full">
          <Image
            className="rounded-t-lg object-cover"
            src={image}
            alt=""
            fill
          />
        </a>
        <div className="p-5">
          <a /* href="#" */>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p
            className={twMerge(
              'mb-3 font-normal text-gray-700 dark:text-gray-400',
              contentClassName,
            )}
          >
            {content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      // href="#" // Navigable card
      className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p
        className={twMerge(
          'font-normal text-gray-700 dark:text-gray-400',
          contentClassName,
        )}
      >
        {content}
      </p>
    </a>
  );
});
