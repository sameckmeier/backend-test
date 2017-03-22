import moment from 'moment-timezone';
import { defaultCreateEventState } from './createEventParams';
import { post, get } from '../../lib/httpApi';
import { formatMeeting } from './meetings';
import { EVENT, setView } from './view';

const SET_EVENT = 'event/set-event';
const SET_MEETING = 'event/set-meeting';

const setEvent = event => ({
  type: SET_EVENT,
  event,
});

const setMeeting = meeting => ({
  type: SET_MEETING,
  meeting,
});

export const navigateToEvent = (id, meeting) => dispatch => get(`event/${id}`)
.then(res => {
  const { event } = res;

  event.meetings = event.meetings.map(m => formatMeeting(m));

  dispatch(setEvent(event));
  dispatch(setMeeting(meeting));
  dispatch(setView(EVENT));
});

export const createEvent = params => dispatch => {
  params['image_url'] = params.imageUrl;
  params.meetings = params.meetings.map(m => {
    const meetingParams = {};
    const {
      location,
      price,
      date,
      time,
      timezone,
    } = m;

    const utcOffset = moment.tz(timezone);

    meetingParams['date_time'] = `${date.format('YYYY-MM-DD')} ${time.format('HH:mm')}${utcOffset.format('Z')}`;
    meetingParams['utc_offset'] = utcOffset.utcOffset();

    return Object.assign(
      {},
      {
        location,
        price,
        timezone,
      },
      meetingParams,
    );
  });

  return post('event/create', { event: params })
  .then(res => dispatch(defaultCreateEventState()));
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_EVENT:
      return Object.assign({}, state, action.event);
    case SET_MEETING:
      return Object.assign({}, state, { meeting: action.meeting });
    default:
      return state;
  }
};
