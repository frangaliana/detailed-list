import * as React from 'react';

import { LogoContainer, TitleContainer } from './header.styled';

import { LogoIcon } from '../../assets/icons';
import { Title } from '../../common/styled-fonts';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = props => {
  const title = 'detailedlist';

  return (
    <>
      <LogoContainer>
        <LogoIcon color="primary" size={5} />
      </LogoContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </>
  );
};
