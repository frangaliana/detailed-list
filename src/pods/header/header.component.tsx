import * as React from 'react';

import { useHistory } from 'react-router-dom';

import { LogoContainer, TitleContainer, LinkContainer } from './header.styled';

import { LogoIcon } from '../../assets/icons';
import { Title } from '../../common/styled-fonts';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = props => {
  const title = 'detailedlist';
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (history.location.pathname === '/') {
      location.reload();
    } else {
      history.push('/');
      location.reload();
    }
  };

  return (
    <>
      <LinkContainer onClick={handleClick}>
        <LogoContainer>
          <LogoIcon color="primary" size={5} />
        </LogoContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </LinkContainer>
    </>
  );
};
