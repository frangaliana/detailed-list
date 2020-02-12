import * as React from 'react';
import { ErrorContainer } from './error-boundary.styled';

import { Emoji } from '../../assets/icons/utils';
import { TryAgainIcon } from '../../assets/icons';

import { ImageButton } from '../image-button';
import { IconLink } from '../../app.model';

type ErrorBoundaryProps = {};

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: 'Oops! Something went wrong ' };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const tryAgainLink: IconLink = {
      title: 'Try again',
      url: '',
      Icon: TryAgainIcon,
    };

    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>
            {this.state.errorMessage}
            <Emoji symbol="😅" label="sorry" />
          </h1>
          <ImageButton iconLink={tryAgainLink} iconSize={3} />
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
