export const MEETINGS = 'meetings';
export const EVENT = 'event';
export const LOGIN = 'login';
export const CREATE_EVENT = 'createEvent';

const SET_VIEW = 'view/set-view';

export const setView = view => ({
  type: SET_VIEW,
  view,
});

export default (state = 'meetings', action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.view;
    default:
      return state;
  }
};
