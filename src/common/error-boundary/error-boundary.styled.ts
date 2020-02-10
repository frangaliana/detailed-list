import styled from '../../styled-components';

export const ErrorContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;
