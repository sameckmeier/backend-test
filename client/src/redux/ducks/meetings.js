import currencyFormatter from 'currency-formatter';
import moment from 'moment-timezone';
import { get } from '../../lib/httpApi';

const SET_MEETINGS = 'meetings/set-meetings';

const setMeetings = meetings => ({
  type: SET_MEETINGS,
  meetings,
});

export const formatMeeting = meeting => {
  const timeZoned = moment(meeting.date_time).utcOffset(meeting.utc_offset);

  meeting.price = currencyFormatter.format(meeting.price, { code: 'USD' });
  meeting.date = timeZoned.format('ddd MMM DD, Y');
  meeting.time = timeZoned.format('HH:mm');
  meeting.timezone = moment.tz(`${ timeZoned.format('YYYY-MM-DD') } ${ meeting.time }`, meeting.timezone).format('z');

  return meeting;
};

export const getMeetings = () => dispatch => get('meetings')
.then(res => {
  let { meetings } = res;

  meetings = meetings.map(m => formatMeeting(m));

  dispatch(setMeetings(meetings));
});

export default (state = [], action) => {
  switch (action.type) {
    case SET_MEETINGS:
      return action.meetings;
    default:
      return state;
  }
};
