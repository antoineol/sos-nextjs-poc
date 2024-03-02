'use client';

import { useRef, type FC } from 'react';
import { submit } from '../utils/common-utils';
import { useSubmitDebounced } from '../utils/hooks/useSubmitDebounced';

interface SearchInputProps {
  defaultQuery: string;
}

export const SearchInput: FC<SearchInputProps> = function SearchInput(props) {
  const { defaultQuery } = props;
  const submitDebouned = useSubmitDebounced(150);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevSubmitValue = useRef(defaultQuery);

  return (
    <input
      ref={inputRef}
      type="text"
      name="query"
      placeholder="Title"
      defaultValue={defaultQuery}
      onChange={e => {
        const newValue = inputRef.current?.value ?? '';
        if (newValue !== prevSubmitValue.current) {
          prevSubmitValue.current = newValue;
          submitDebouned(e);
        }
      }}
      onBlur={e => {
        const newValue = inputRef.current?.value ?? '';
        if (newValue !== prevSubmitValue.current) {
          prevSubmitValue.current = newValue;
          submit(e);
        }
      }}
      autoFocus
      className="border-1 flex-1 rounded border border-slate-500 bg-transparent px-2 py-2"
    />
  );
};
