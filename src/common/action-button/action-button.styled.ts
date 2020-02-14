import styled from '../../styled-components';

type ActionButtonContainerProps = {
  height: number;
  width: number;
  hovered: boolean;
  clicked: boolean;
  disabled: boolean;
  isCard: boolean;
};

export const ActionButtonContainer = styled.button<ActionButtonContainerProps>`
  width: ${({ theme: { spacing }, width }) => spacing(width)}px;
  height: ${({ theme: { spacing }, height }) => spacing(height)}px;

  padding: ${({ theme: { spacing } }) => spacing(0.5)}px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  border: 1px solid
    ${({ theme: { palette }, hovered, disabled }) =>
      disabled ? palette.secondary : !hovered ? palette.primary : palette.background};
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  background-color: ${({ theme: { palette }, hovered, clicked, disabled, isCard }) =>
    isCard ? palette.cardBackground : !disabled && (hovered || clicked) ? palette.primary : palette.background};
`;

export const IconContainer = styled.div`
  align-self: stretch;
  flex: 1 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  align-self: stretch;
  flex: 2 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
