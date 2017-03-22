import { get } from '../../lib/httpApi';
import { formatMeeting } from './meetings';

const SET_MEETINGS = 'paginated-meetings/set-meetings';
const SET_PAGE_NUMBER = 'paginated-meetings/set-page-number';
const SET_MAX_PAGE_NUMBER = 'paginated-meetings/set-max-page-number';

const setPaginatedMeetings = meetings => ({
  type: SET_MEETINGS,
  meetings,
});

const setMaxPageNumber = maxPageNumber => ({
  type: SET_MAX_PAGE_NUMBER,
  maxPageNumber,
});

export const setPageNumber = pageNumber => ({
  type: SET_PAGE_NUMBER,
  pageNumber,
});

export const getPaginatedMeetings = pageNumber => dispatch => get(`meetings/${pageNumber}`)
.then(res => {
  let { meetings, maxPageNumber } = res;

  meetings = meetings.map(m => formatMeeting(m));

  dispatch(setMaxPageNumber(maxPageNumber));
  dispatch(setPaginatedMeetings(meetings));
});

const defaultState = () => ({
  meetings: [],
  pageNumber: 1,
  maxPageNumber: 1,
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    case SET_MEETINGS:
      return Object.assign({}, state, { meetings: action.meetings });
    case SET_PAGE_NUMBER:
      return Object.assign({}, state, { pageNumber: action.pageNumber });
    case SET_MAX_PAGE_NUMBER:
      return Object.assign({}, state, { maxPageNumber: action.maxPageNumber });
    default:
      return state;
  }
};
