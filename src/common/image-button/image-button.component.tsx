import * as React from 'react';

import { IconLink } from '../../app.model';

import { ImageButtonContainer, IconContainer, TextContainer } from './image-button.styled';

type ImageButtonProps = {
  iconSize: number;
  iconLink: IconLink;
};

export const ImageButton: React.FC<ImageButtonProps> = ({ iconSize, iconLink: { title, url, Icon } }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(true);
  const handleMouseOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(false);

  return (
    <ImageButtonContainer href={url} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <IconContainer>
        <Icon size={iconSize} title={title} color={hovered ? 'background' : 'primary'} />
      </IconContainer>
      <TextContainer>{title}</TextContainer>
    </ImageButtonContainer>
  );
};
