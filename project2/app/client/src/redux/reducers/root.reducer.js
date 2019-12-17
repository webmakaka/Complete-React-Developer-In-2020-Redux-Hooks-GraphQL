import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user.reducer';
import cartReducer from 'redux/reducers/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
