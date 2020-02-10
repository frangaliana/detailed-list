import * as React from 'react';
import { ErrorContainer } from './error-boundary.styled';

import { Emoji } from '../../assets/icons/utils';

type ErrorBoundaryProps = {};

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: 'Something went wrong. Try later' };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>
            {this.state.errorMessage}
            <Emoji symbol="😅" label="sorry" />
          </h1>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
