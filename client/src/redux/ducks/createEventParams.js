import moment from 'moment';

const SET_TITLE = 'create-event/set-title';
const SET_DESCRIPTION = 'create-event/set-description';
const SET_IMAGE_URL = 'create-event/set-imageUrl';
const SET_MEETING_DATE = 'create-event/set-meeting-date';
const SET_MEETING_TIME = 'create-event/set-meeting-time';
const SET_MEETING_TIMEZONE = 'create-event/set-meeting-timezone';
const SET_MEETING_LOCATION = 'create-event/set-meeting-location';
const SET_MEETING_PRICE = 'create-event/set-meeting-price';
const ADD_MEETING = 'create-event/add-meeting';
const DEFAULT_CREATE_EVENT_STATE = 'create-event/default-create-event-state';

export const setTitle = title => ({
  type: SET_TITLE,
  title,
});

export const setDescription = description => ({
  type: SET_DESCRIPTION,
  description,
});

export const setImageUrl = imageUrl => ({
  type: SET_IMAGE_URL,
  imageUrl,
});

export const setMeetingDate = (index, date) => ({
  type: SET_MEETING_DATE,
  index,
  date,
});

export const setMeetingTime = (index, time) => ({
  type: SET_MEETING_TIME,
  index,
  time,
});

export const setMeetingTimezone = (index, timezone) => ({
  type: SET_MEETING_TIMEZONE,
  index,
  timezone,
});

export const setMeetingPrice = (index, price) => ({
  type: SET_MEETING_PRICE,
  index,
  price,
});

export const setMeetingLocation = (index, location) => ({
  type: SET_MEETING_LOCATION,
  index,
  location,
});

export const addMeeting = meeting => ({
  type: ADD_MEETING,
  meeting,
});

export const defaultCreateEventState = () => ({ type: DEFAULT_CREATE_EVENT_STATE });

const defaultMeetingParams = () => {
  const now = moment();

  return {
    date: now,
    time: now.hour(0).minute(0),
    timezone: 'America/New_York',
    price: 0.00,
    location: 'Death Star',
  };
};

const defaultState = () => ({
  title: '',
  description: '',
  imageUrl: '',
  meetings: [defaultMeetingParams()],
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case DEFAULT_CREATE_EVENT_STATE:
      return defaultState();
    case SET_TITLE:
      return Object.assign({}, state, { title: action.title });
    case SET_DESCRIPTION:
      return Object.assign({}, state, { description: action.description });
    case SET_IMAGE_URL:
      return Object.assign({}, state, { imageUrl: action.imageUrl });
    case SET_MEETING_TIME:
      state.meetings[action.index] = Object.assign(
        {},
        state.meetings[action.index],
        { time: action.time }
      );

      return Object.assign({}, state, { meetings: state.meetings.slice() });
    case SET_MEETING_TIMEZONE:
      state.meetings[action.index] = Object.assign(
        {},
        state.meetings[action.index],
        { timezone: action.timezone }
      );

      return Object.assign({}, state, { meetings: state.meetings.slice() });
    case SET_MEETING_DATE:
      state.meetings[action.index] = Object.assign(
        {},
        state.meetings[action.index],
        { date: action.date }
      );

      return Object.assign({}, state, { meetings: state.meetings.slice() });
    case SET_MEETING_PRICE:
      state.meetings[action.index] = Object.assign(
        {},
        state.meetings[action.index],
        { price: action.price }
      );

      return Object.assign({}, state, { meetings: state.meetings.slice() });
    case SET_MEETING_LOCATION:
      state.meetings[action.index] = Object.assign(
        {},
        state.meetings[action.index],
        { location: action.location }
      );

      return Object.assign({}, state, { meetings: state.meetings.slice() });
    case ADD_MEETING:
      state.meetings.push(defaultMeetingParams());
      return Object.assign({}, state, { meetings: state.meetings.slice() });
    default:
      return state;
  }
};
