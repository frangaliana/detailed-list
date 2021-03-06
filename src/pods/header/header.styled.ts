import styled from '../../styled-components';

export const LinkContainer = styled.div`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing(0.5)}px;
  padding-right: ${({ theme: { spacing } }) => spacing(1)}px;
`;

export const TitleContainer = styled.div`
  display: none;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    display: block;
  }
`;
