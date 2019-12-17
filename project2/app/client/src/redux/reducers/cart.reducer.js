import { TOGGLE_CART_HIDDEN, ADD_ITEM } from 'redux/types/cart.types.js';

const INTITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
