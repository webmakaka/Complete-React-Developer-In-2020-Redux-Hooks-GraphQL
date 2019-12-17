import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from 'redux/selectors/cart.selectors.js';

import CustomButton from 'components/custom-button/CustomButton';
import CartItem from 'components/cart-item/CartItem';

import 'components/cart-dropdown/CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
