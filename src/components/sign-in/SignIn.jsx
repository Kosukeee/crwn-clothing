import React, { Component } from 'react';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="email" handleChange={this.handleChange} defaultValue={email} required />
          <FormInput name="password" type="password" label="password" handleChange={this.handleChange} defaultValue={password} required />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
};

export default SignIn;