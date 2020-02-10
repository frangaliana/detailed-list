import styled from '../../styled-components';

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  width: ${({ theme: { spacing } }) => spacing(4.5)}px;
  height: ${({ theme: { spacing } }) => spacing(4.5)}px;
  border-radius: 50%;

  background: ${({ theme: { palette } }) => palette.primary};
  background: ${({ theme: { palette } }) =>
    `-moz-linear-gradient(left, ${palette.primary} 10%, rgba(255, 255, 255, 0) 42%)`};
  background: ${({ theme: { palette } }) =>
    `-webkit-linear-gradient(left, ${palette.primary} 10%, rgba(255, 255, 255, 0) 42%)`};
  background: ${({ theme: { palette } }) =>
    `-o-linear-gradient(left, ${palette.primary} 10%, rgba(255, 255, 255, 0) 42%)`};
  background: ${({ theme: { palette } }) =>
    `-ms-linear-gradient(left, ${palette.primary} 10%, rgba(255, 255, 255, 0) 42%)`};
  background: ${({ theme: { palette } }) =>
    `linear-gradient(to right, ${palette.primary} 10%, rgba(255, 255, 255, 0) 42%)`};

  -webkit-animation: loader 1s infinite linear;
  animation: loader 1s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:after {
    background: ${({ theme: { palette } }) => palette.background};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
