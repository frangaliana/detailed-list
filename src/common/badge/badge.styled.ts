import styled from '../../styled-components';

type BadgeProps = {
  type: 'default' | 'default2' | 'default3' | 'default4';
  transparent: boolean;
};

export const BadgeStyled = styled.div<BadgeProps>`
  box-sizing: border-box;
  min-width: 0px;
  display: inline-block;
  vertical-align: baseline;
  font-size: ${({ theme: { spacing } }) => spacing(1.5)}px;
  font-weight: 700;
  white-space: nowrap;
  padding-left: ${({ theme: { spacing } }) => spacing(0.5)}px;
  padding-right: ${({ theme: { spacing } }) => spacing(0.5)}px;
  border: ${({ theme: { palette }, transparent, type }) => (transparent ? `1px solid ${palette.badges[type]}` : '0')};
  color: ${({ theme: { palette }, transparent, type }) =>
    !transparent ? palette.navigationBackground : palette.badges[type]};
  background-color: ${({ theme: { palette }, type, transparent }) =>
    transparent ? palette.cardBackground : palette.badges[type]};
  margin: 0px;
  border-radius: ${({ theme: { spacing } }) => spacing(0.25)}px;
`;
