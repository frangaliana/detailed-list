import styled from '../../styled-components';

type SearchContainerProps = {
  disabled: boolean;
};

export const SearchContainer = styled.div<SearchContainerProps>`
  height: ${({ theme: { spacing } }) => spacing(5)}px;
  width: ${({ theme: { spacing } }) => spacing(25)}px;

  border-radius: ${({ theme: { spacing } }) => spacing(0.4)}px;
  border: 1px solid ${({ theme: { palette }, disabled }) => (disabled ? palette.secondary : palette.primary)};

  display: flex;
`;

export const IconContainer = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(1)}px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.input`
  border: none;

  width: ${({ theme: { spacing } }) => spacing(19.5)}px;

  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette }, disabled }) => (disabled ? palette.secondary : palette.primary)};
  background-color: ${({ theme: { palette } }) => palette.background};

  &:focus {
    outline: none;
  }
`;
