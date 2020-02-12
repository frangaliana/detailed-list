import * as React from 'react';

import { FiltersContainer } from './filters.styled';
import { ImageButton } from '../../common';
import { IconLink } from '../../app.model';
import { SortIcon } from '../../assets/icons/sort.icon';

type FiltersProps = {};

export const Filters: React.FC<FiltersProps> = props => {
  const tryAgainLink: IconLink = {
    title: 'Title',
    url: '',
    Icon: SortIcon,
  };

  const searchLink: IconLink = {
    title: 'Search',
    url: '',
    Icon: SortIcon,
  };

  return (
    <FiltersContainer>
      <ImageButton iconLink={tryAgainLink} iconSize={2} />
      <ImageButton iconLink={searchLink} iconSize={2} />
    </FiltersContainer>
  );
};
