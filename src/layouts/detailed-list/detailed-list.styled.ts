import styled from '../../styled-components';

export const General = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  flex: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  top: ${({ theme: { spacing } }) => spacing(0)}px;

  background-color: ${({ theme: { palette } }) => palette.navigationBackground};
  border-bottom: ${({ theme: { spacing } }) => `${spacing(0.125)}px solid rgba(0,0,0,0.2)`};
`;

export const List = styled.section`
  flex: 1 0 auto;

  margin: ${({ theme: { spacing } }) => `${spacing(8)}px ${spacing(4)}px`};

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    padding: ${({ theme: { spacing } }) => `0 ${spacing(35)}px`};
  }
`;
