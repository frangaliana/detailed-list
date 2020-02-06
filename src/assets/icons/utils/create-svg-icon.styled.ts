import styled from '../../../styled-components';
import { SvgIconProps } from '../../../app.model';

export const SvgStyled = styled.svg<SvgIconProps>`
  fill: ${({ theme: { palette }, color }) => palette[color]};
  height: ${({ theme: { spacing }, size }) => spacing(size)}px;
  width: ${({ theme: { spacing }, size }) => spacing(size)}px;

  &:hover {
    fill: ${({ theme: { palette }, color, hoveredColor, hovered }) =>
      hovered ? palette[hoveredColor] : palette[color]};
  }
`;
