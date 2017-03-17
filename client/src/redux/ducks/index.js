import { combineReducers } from 'redux';
import events from './events';
import view from './view';

export default combineReducers({
  events,
  view,
});
