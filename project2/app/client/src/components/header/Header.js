import React, { useContext } from 'react';

import { auth } from 'firebase/firebase.utils';

import CartIcon from 'components/cart-icon/CartIcon';
import CartDropdown from 'components/cart-dropdown/CartDropdown';

import CurrentUserContext from 'contexts/current-user/current-user.context';

import { ReactComponent as Logo } from 'assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from 'components/header/Header.styles.js';

const Header = ({ hidden }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
