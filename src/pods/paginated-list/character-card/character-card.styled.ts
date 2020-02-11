import styled from '../../../styled-components';

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

  display: grid;
  grid-template-areas:
    'avatar-container title-container title-container'
    'avatar-container badge-container more-info-container';
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: auto;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    grid-template-areas:
      'avatar-container title-container badge-container'
      'avatar-container more-info-container more-info-container';
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: auto;
  }

  &:hover {
    border: 1px solid ${({ theme: { palette } }) => palette.primary};
  }
`;

export const AvatarContainer = styled.div`
  grid-area: avatar-container;

  padding: ${({ theme: { spacing } }) => spacing(1)}px;
  align-self: center;
  justify-self: center;
`;

export const TitleContainer = styled.div`
  grid-area: title-container;

  padding: ${({ theme: { spacing } }) => spacing(1)}px;
  align-self: center;
  justify-self: start;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    padding: ${({ theme: { spacing } }) => spacing(1)}px;
    align-self: start;
    justify-self: start;
  }
`;

export const BadgeContainer = styled.div`
  grid-area: badge-container;

  padding: 0 ${({ theme: { spacing } }) => spacing(1)}px;
  align-self: start;
  justify-self: start;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    padding: ${({ theme: { spacing } }) => spacing(1)}px;
    align-self: start;
    justify-self: end;
  }
`;

export const MoreInfoContainer = styled.div`
  grid-area: more-info-container;

  padding: 0 ${({ theme: { spacing } }) => spacing(1)}px;
  align-self: start;
  justify-self: start;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    padding: ${({ theme: { spacing } }) => spacing(1)}px;
    align-self: start;
    justify-self: end;
  }
`;
