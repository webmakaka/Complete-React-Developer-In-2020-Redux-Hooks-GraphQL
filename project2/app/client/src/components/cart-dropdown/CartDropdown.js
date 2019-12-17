import React from 'react';

import CustomButton from 'components/custom-button/CustomButton';

import 'components/cart-dropdown/CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
