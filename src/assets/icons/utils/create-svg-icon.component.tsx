import * as React from 'react';

import { SvgIconProps } from '../../../app.model';
import { SvgStyled } from './create-svg-icon.styled';

export const createSvgIcon = (viewBox: string, path: JSX.Element): React.FC<SvgIconProps> => {
  const Icon: React.FC<SvgIconProps> = ({ size, color, title = '', hovered = false, hoveredColor }) => (
    <SvgStyled
      size={size}
      color={color}
      hovered={hovered}
      hoveredColor={hoveredColor}
      viewBox={viewBox}
      title={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMin"
    >
      {path}
    </SvgStyled>
  );

  return React.memo(Icon);
};
