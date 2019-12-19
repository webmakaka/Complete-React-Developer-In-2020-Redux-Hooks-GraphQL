import React from 'react';

import {
  SpinnerContainer,
  SpinnerOverlay
} from 'components/with-spinner/WithSpinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otheProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otheProps} />
  );
};

export default WithSpinner;
