import React, { Component } from 'react';

import FormInput from 'components/form-input/FormInput';
import CustomButton from 'components/custom-button/CustomButton';

import 'components/sign-in/SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
