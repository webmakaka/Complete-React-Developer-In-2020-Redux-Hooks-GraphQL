import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from 'firebase/firebase.utils';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from 'redux/selectors/cart.selectors';
import { selectCurrentUser } from 'redux/selectors/user.selectors';

import CartIcon from 'components/cart-icon/CartIcon';
import CartDropdown from 'components/cart-dropdown/CartDropdown';

import { ReactComponent as Logo } from 'assets/crown.svg';
import 'components/header/Header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
