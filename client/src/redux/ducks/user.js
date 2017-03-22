import { setLoggedIn } from './authentication';
import { get } from '../../lib/httpApi';

const SET_USER = 'user/set-user';
const DEFAULT_USER_STATE = 'user/default-user-state';

export const defaultUserState = () => ({ type: DEFAULT_USER_STATE });

export const setUser = user => ({
  type: SET_USER,
  user,
});

export const getUser = () => dispatch => {
  get('user')
  .then(res => {
    if (res.errors && res.errors[0] === 'Invalid jwt') {
      localStorage.removeItem('jwt');
      defaultUserState();
    } else {
      dispatch(setUser(res.user));
      dispatch(setLoggedIn(true));
    }
  });
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case DEFAULT_USER_STATE:
      return {};
    default:
      return state;
  }
};
