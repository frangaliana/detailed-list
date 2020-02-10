import * as React from 'react';
import { General, Header, List } from './detailed-list.styled';

type GeneralLayoutProps = {
  HeaderContent: React.ReactNode;
  ListContent: React.ReactNode;
};

export const GeneralLayout: React.FC<GeneralLayoutProps> = ({ HeaderContent, ListContent }) => (
  <General>
    <Header>{HeaderContent}</Header>
    <List>{ListContent}</List>
  </General>
);
