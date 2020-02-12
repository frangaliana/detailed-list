import * as React from 'react';
import { General, Header, List, Navigation } from './detailed-list.styled';

type GeneralLayoutProps = {
  HeaderContent: React.ReactNode;
  NavigationContent: React.ReactNode;
  ListContent: React.ReactNode;
};

export const GeneralLayout: React.FC<GeneralLayoutProps> = ({ HeaderContent, NavigationContent, ListContent }) => (
  <General>
    <Header>{HeaderContent}</Header>
    <Navigation>{NavigationContent}</Navigation>
    <List>{ListContent}</List>
  </General>
);
