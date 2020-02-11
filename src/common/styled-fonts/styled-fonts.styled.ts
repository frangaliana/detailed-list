import styled from '../../styled-components';
import { Theme } from '../../app.theme';

export const Title = styled.h1`
  font-size: ${({ theme: { spacing } }) => spacing(6)}px;
  color: ${({ theme: { palette } }) => palette.primary};
  letter-spacing: -0.05em;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

type HeadingProps = {
  size: 'm' | 'l' | 'xl' | 'xxl';
  color: keyof Theme['palette'];
};

export const Heading = styled.h1<HeadingProps>`
  font-size: ${({ theme: { spacing }, size }) => {
    switch (size) {
      case 'm':
        return spacing(3);
      case 'l':
        return spacing(4);
      case 'xl':
        return spacing(5);
      case 'xxl':
        return spacing(6);
      default:
        return spacing(3);
    }
  }}px;
  color: ${({ theme: { palette }, color }) => palette[color]};
  letter-spacing: -0.03em;
  margin: 0;
  padding: 0;
`;

type TextProps = {
  bold: boolean;
};

export const Text = styled.p<TextProps>`
  color: ${({ theme: { palette } }) => palette.text};
  letter-spacing: -0.03em;
  font-weight: ${({ bold }) => (!!bold ? 'bold' : '500')};
  margin: 0;
  padding: 0;
`;
