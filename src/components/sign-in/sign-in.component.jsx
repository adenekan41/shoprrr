import React from 'react';
import PropTypes from 'prop-types';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.emailSignInStart(email, password);
  };
  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password </span>

        <form action="" onSubmit={e => this.handleSubmit(e)}>
          <FormInput
            onChange={e => this.handleChange(e)}
            type="email"
            label="Email"
            name="email"
            value={email}
            required
          />
          <FormInput
            onChange={e => this.handleChange(e)}
            type="password"
            name="password"
            label="Password"
            value={password}
            required
          />
          <div className="buttons d-block d-md-flex">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              theme="primary"
              onClick={googleSignInStart}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  googleSignInStart: PropTypes.func,
  emailSignInStart: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
