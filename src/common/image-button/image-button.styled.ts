import styled from '../../styled-components';

export const ImageButtonContainer = styled.a`
  background-color: ${({ theme: { palette } }) => palette.background};
  color: ${({ theme: { palette } }) => palette.primary};
  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  border: 1px solid ${({ theme: { palette } }) => palette.primary};
  font-weight: 500;
  text-decoration: none;

  height: ${({ theme: { spacing } }) => spacing(5)};
  width: ${({ theme: { spacing } }) => spacing(18)};

  padding: ${({ theme: { spacing } }) => spacing(0.5)}px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: ${({ theme: { palette } }) => palette.primary};
    color: ${({ theme: { palette } }) => palette.background};
  }
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
