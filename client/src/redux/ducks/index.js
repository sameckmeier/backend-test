import { combineReducers } from 'redux';
import meetings from './meetings';
import paginatedMeetings from './paginatedMeetings';
import view from './view';
import event from './event';
import authentication from './authentication';
import createEventParams from './createEventParams';
import user from './user';

export default combineReducers({
  meetings,
  paginatedMeetings,
  view,
  event,
  createEventParams,
  authentication,
  user,
});
