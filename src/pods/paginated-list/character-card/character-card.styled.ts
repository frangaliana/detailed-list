import styled from '../../../styled-components';

import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  margin-bottom: ${({ theme: { spacing } }) => spacing(2)}px;
  height: ${({ theme: { spacing } }) => spacing(10)}px;
  max-width: 100%;

  padding: ${({ theme: { spacing } }) => spacing(1)}px;

  background-color: ${({ theme: { palette } }) => palette.cardBackground};
  border: 1px solid ${({ theme: { palette } }) => palette.secondary};
  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: stretch;

  &:hover {
    border: 1px solid ${({ theme: { palette } }) => palette.primary};
  }
`;

export const AvatarContainer = styled.div`
  flex: 1 0 auto;

  padding: ${({ theme: { spacing } }) => `${spacing(0.5)}px ${spacing(0.5)}px`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  flex: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

export const TitleContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(1)}px;

  flex: 1;
  display: flex;
  align-items: center;
`;

export const MoreInfoContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(1)}px;

  flex: 1;
  align-self: stretch;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    flex: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
