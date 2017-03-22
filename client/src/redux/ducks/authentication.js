import { setUser, defaultUserState } from './user';
import { setView, MEETINGS } from './view';
import { post } from '../../lib/httpApi';

const SET_EMAIL = 'authentication/set-email';
const SET_PASSWORD = 'authentication/set-password';
const SET_LOGGED_IN = 'authentication/set-logged-in';
const SET_INVALID_LOGIN = 'authentication/set-invalid-login';
const DEFAULT_AUTHENTICATION_STATE = 'authentication/default-authentication-state';

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  password,
});

export const setLoggedIn = loggedIn => ({ type: SET_LOGGED_IN, loggedIn });

export const setInvalidLogin = () => ({ type: SET_INVALID_LOGIN });

export const defaultAuthenticationState = () => ({ type: DEFAULT_AUTHENTICATION_STATE });

export const authenticate = (email, password) => dispatch => {
  return post('auth', { auth: { password, email } })
  .then(res => {
    if (res.errors) {
      dispatch(setInvalidLogin());
      alert(res.errors[0])
    } else {
      localStorage.setItem('jwt', res.jwt);
      dispatch(setUser(res.user));
      dispatch(setLoggedIn(true));
      dispatch(defaultAuthenticationState());
      dispatch(setView(MEETINGS));
    }
  });
};

export const logOut = () => dispatch => {
  localStorage.removeItem('jwt');
  dispatch(defaultUserState());
  dispatch(setLoggedIn(false));
};

export default (state = { email: '', password: '' }, action) => {
  switch (action.type) {
    case SET_INVALID_LOGIN:
      return Object.assign({}, state, { invalidLogin: true });
    case SET_EMAIL:
      return Object.assign({}, state, { email: action.email });
    case SET_PASSWORD:
      return Object.assign({}, state, { password: action.password });
    case SET_LOGGED_IN:
      return Object.assign({}, state, { loggedIn: action.loggedIn });
    case DEFAULT_AUTHENTICATION_STATE:
      return Object.assign({}, state, { email: '', password: '' });
    default:
      return state;
  }
};
