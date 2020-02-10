import styled from '../styled-components';

export const Card = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing(2)}px;
  height: ${({ theme: { spacing } }) => spacing(10)}px;
  max-width: 100%;

  padding: ${({ theme: { spacing } }) => spacing(1)}px;

  background-color: ${({ theme: { palette } }) => palette.cardBackground};
  border: 1px solid ${({ theme: { palette } }) => palette.secondary};
  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme: { palette } }) => palette.primary};
  }
`;
