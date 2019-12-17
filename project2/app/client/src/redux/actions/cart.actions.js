import { TOGGLE_CART_HIDDEN, ADD_ITEM } from 'redux/types/cart.types.js';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
