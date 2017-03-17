export const GET_EVENTS = 'events/get-events';
const SET_EVENTS = 'events/set-events';

const setEvents = events => ({
  type: SET_EVENTS,
  events,
});

export const getEvents = () => dispatch => {
  fetch(`${process.env.SERVER_URL}/events`)
  .then(res => res.json())
  .then(res => {
    const { events } = res;
    dispatch(setEvents(events));
  })
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.events;
    default:
      return state;
  }
}
