import * as React from 'react';

import { FiltersContainer } from './filters.styled';

import { ActionButton, SearchInput } from '../../../common';
import { SortIcon } from '../../../assets/icons';

type FiltersProps = {
  loading: boolean;
  sorted: boolean;
  handleSortClick: () => void;
  handleSearch: (searchText: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({ loading, sorted, handleSortClick, handleSearch }) => {
  return (
    <FiltersContainer>
      <SearchInput disabled={loading} handleSearch={handleSearch} />
      <ActionButton
        height={5}
        width={12}
        title={'Name'}
        handleClick={handleSortClick}
        Icon={SortIcon}
        iconSize={3}
        clicked={sorted}
        disabled={loading}
      />
    </FiltersContainer>
  );
};
