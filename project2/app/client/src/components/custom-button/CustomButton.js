import React from 'react';

import { CustomButtonContainer } from 'components/custom-button/CustomButton.styles.js';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
