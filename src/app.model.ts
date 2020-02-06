import { Theme } from './app.theme';

export type Color = keyof Theme['palette'];

export type SvgIconProps = {
  color: Color;
  hovered?: boolean;
  hoveredColor?: Color;
  size: number;
  title?: string;
};
