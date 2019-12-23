import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from 'components/custom-button/CustomButton';
import CartItem from 'components/cart-item/CartItem';

import { CartContext } from 'providers/cart/cart.provider';

import 'components/cart-dropdown/CartDropdown.scss';

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
