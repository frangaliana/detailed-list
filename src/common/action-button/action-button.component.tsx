import * as React from 'react';

import { SvgIconProps } from '../../app.model';
import { ActionButtonContainer, IconContainer, TextContainer } from './action-button.styled';
import { Text } from '../styled-fonts/styled-fonts.styled';

type ActionButtonProps = {
  height: number;
  width: number;
  title: string;
  handleClick: () => void;
  clicked?: boolean;
  changedHover?: boolean;
  Icon?: React.FunctionComponent<SvgIconProps>;
  titleSize?: number;
  iconSize?: number;
  disabled?: boolean;
  isCard?: boolean;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  height,
  width,
  changedHover = false,
  Icon,
  iconSize = 2,
  title,
  titleSize = 2,
  handleClick,
  clicked = false,
  disabled = false,
  isCard = false,
}) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setHovered(true);
  const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setHovered(false);

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick();

  return (
    <ActionButtonContainer
      onClick={onClick}
      width={width}
      height={height}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      hovered={changedHover && hovered}
      clicked={clicked}
      disabled={disabled}
      isCard={isCard}
    >
      {!!Icon && (
        <IconContainer>
          <Icon
            size={iconSize}
            title={title}
            color={disabled ? 'secondary' : (changedHover && hovered) || clicked ? 'background' : 'primary'}
          />
        </IconContainer>
      )}
      <TextContainer>
        <Text
          color={disabled ? 'secondary' : (changedHover && hovered) || clicked ? 'background' : 'primary'}
          size={titleSize}
        >
          {title}
        </Text>
      </TextContainer>
    </ActionButtonContainer>
  );
};
