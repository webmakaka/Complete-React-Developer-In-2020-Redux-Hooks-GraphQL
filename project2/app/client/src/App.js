import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/homepage/HomePage';
import ShopPage from 'pages/shoppage/ShopPage';
import Header from 'components/header/Header';
import SignInSignUp from 'pages/sign-in-sign-up/SignInSignUp';

import { auth } from 'firebase/firebase.utils';

import './App.css';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsibscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
