import React from 'react';
import { connect } from 'react-redux';
import styles from './Login.scss';
import {
  authenticate,
  setPassword,
  setEmail,
} from '../../redux/ducks/authentication';

const Login = ({
  authenticate,
  authentication,
  setPassword,
  setEmail,
}) => <div className={ styles.container }>
  <h1>Login</h1>
  <form>
    <input
      type="text"
      className={ styles.email }
      placeholder="Email"
      onChange={ e => setEmail(e.target.value) }
      value={ authentication.email }
    />
    <input
      type="text"
      className={ styles.password }
      placeholder="Password"
      onChange={ e => setPassword(e.target.value) }
      value={ authentication.password }
    />
  <button
    type="button"
    className={ styles.submit }
    onClick={ () => authenticate(authentication.email, authentication.password) }
    >
      Submit
    </button>
  </form>
</div>;

export default connect(
  state => ({ authentication: state.authentication }),
  dispatch => ({
    authenticate: (email, password) => dispatch(authenticate(email, password)),
    setPassword: password => dispatch(setPassword(password)),
    setEmail: email => dispatch(setEmail(email)),
  }),
)(Login);
