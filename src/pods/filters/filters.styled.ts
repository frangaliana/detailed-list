import styled from '../../styled-components';

export const FiltersContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(3)}px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
