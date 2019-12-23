import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { auth } from 'firebase/firebase.utils';

import CartIcon from 'components/cart-icon/CartIcon';
import CartDropdown from 'components/cart-dropdown/CartDropdown';

import CurrentUserContext from 'contexts/current-user/current-user.context';
import { CartContext } from 'providers/cart/cart.provider';

import { ReactComponent as Logo } from 'assets/crown.svg';

import 'components/header/Header.scss';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
