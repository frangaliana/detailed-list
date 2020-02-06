import styled from '../../styled-components';

export const Title = styled.h1`
  font-size: ${({ theme: { spacing } }) => spacing(12)}px;
  color: ${({ theme: { palette } }) => palette.primary};
  letter-spacing: -0.05em;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  color: ${({ theme: { palette } }) => palette.secondary};
  letter-spacing: -0.03em;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
