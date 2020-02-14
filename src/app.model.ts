import { Theme } from './app.theme';

export type Color = keyof Theme['palette'];

export type SvgIconProps = {
  color: Color;
  hovered?: boolean;
  hoveredColor?: Color;
  size: number;
  title?: string;
};

export type IconLink = {
  title: string;
  url: string;
  Icon: React.FunctionComponent<SvgIconProps>;
};

export interface Character {
  name: string;
  birthYear: string;
  gender: string;
  mass: string;
  height: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  homeworld: string;
  url: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}
