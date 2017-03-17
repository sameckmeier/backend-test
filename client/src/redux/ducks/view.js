export const EVENTS = 'events';
export const EVENT = 'event';
export const CREATE_EVENT = 'createEvent';

export const SET_VIEW = 'view/set-view';

export const setView = view => ({
  type: SET_VIEW,
  view,
});

export default function reducer(state = 'events', action) {
  switch (action.type) {
    case SET_VIEW:
      return action.view;
    default:
      return state;
  }
}
