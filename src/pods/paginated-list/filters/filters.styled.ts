import styled from '../../../styled-components';

export const FiltersContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(3)}px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing(13)}px;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    flex-direction: row;
  }
`;
