import * as React from 'react';

import { Emoji } from '../../assets/icons/utils';
import { TryAgainIcon } from '../../assets/icons';

import { ImageButton } from '../image-button';
import { IconLink } from '../../app.model';

import { NotFoundContainer } from './not-found.styled';

type NotFoundProps = {};

export const NotFound: React.FC<NotFoundProps> = props => {
  const title = 'Page Not Found';

  const tryAgainLink: IconLink = {
    title: 'Try again',
    url: '',
    Icon: TryAgainIcon,
  };

  return (
    <NotFoundContainer>
      <h1>
        {title}
        <Emoji symbol="😭" label="cry" />
      </h1>
      <ImageButton iconLink={tryAgainLink} iconSize={3} />
    </NotFoundContainer>
  );
};
