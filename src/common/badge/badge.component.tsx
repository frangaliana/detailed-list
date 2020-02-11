import * as React from 'react';
import { BadgeStyled } from './badge.styled';

type BadgeProps = {
  type: 'default' | 'default2' | 'default3' | 'default4';
  text: string;
  transparent?: boolean;
};

export const Badge: React.FC<BadgeProps> = ({ type, transparent = false, text }) => (
  <BadgeStyled type={type} transparent={transparent}>
    {text}
  </BadgeStyled>
);
