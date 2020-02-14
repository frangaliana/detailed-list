import styled from '../../../styled-components';

export const CharacterDetailContainer = styled.div`
  height: ${({ theme: { spacing } }) => spacing(52)}px;
  max-width: 100%;

  padding: ${({ theme: { spacing } }) => spacing(2)}px ${({ theme: { spacing } }) => spacing(2)}px;

  background-color: ${({ theme: { palette } }) => palette.cardBackground};
  border: 1px solid ${({ theme: { palette } }) => palette.secondary};
  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  flex-direction: column;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    padding: ${({ theme: { spacing } }) => spacing(5)}px ${({ theme: { spacing } }) => spacing(5)}px;
  }
`;

export const AvatarContainer = styled.div`
  flex: 1;

  padding-top: ${({ theme: { spacing } }) => spacing(2)}px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  flex: 3;

  padding-left: ${({ theme: { spacing } }) => spacing(2)}px;
  padding-top: ${({ theme: { spacing } }) => spacing(1)}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BadgeContainer = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing(1)}px;
`;

export const MainInformation = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
`;

export const AdditionalInformation = styled.div`
  flex: 3;

  padding-top: ${({ theme: { spacing } }) => spacing(2)}px;

  display: flex;
  justify-content: flex-end;
`;

export const TextContainer = styled.div`
  padding-left: ${({ theme: { spacing } }) => spacing(2)}px;
`;

export const LinksInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ColorsContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(1)}px 0;

  display: flex;
  justify-content: flex-end;
`;

export const LinkContainer = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing(1)}px;
`;
