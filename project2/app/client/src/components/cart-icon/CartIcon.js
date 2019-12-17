import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from 'redux/actions/cart.actions.js';
import { selectCartItemsCount } from 'redux/selectors/cart.selectors.js';

import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';

import 'components/cart-icon/CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
