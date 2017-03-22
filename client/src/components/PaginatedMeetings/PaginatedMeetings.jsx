import React from 'react';
import { connect } from 'react-redux';
import { getPaginatedMeetings, setPageNumber } from '../../redux/ducks/paginatedMeetings';
import styles from './PaginatedMeetings.scss';

let PaginatedMeetings = ({
  meetings,
  pageNumber,
  maxPageNumber,
  setPageNumber,
}) => {
  const handlePaginate = number => {
    if (!number <= 0 && number <= maxPageNumber) {
      setPageNumber(number);
    }
  };

  return <div className={ styles.container }>
    <table className={ styles.paginatedMeetings }>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {meetings.map(({
          date,
          time,
          price,
          location,
          timezone,
          event,
        }, i) => <tr className={ styles.tableRow } key={ i }>
            <td>{ event.title }</td>
            <td>{ date }</td>
            <td>{ `${time} ${timezone}` }</td>
            <td>{ location }</td>
            <td>{ price }</td>
          </tr>
        )}
      </tbody>
    </table>
    <div className={ styles.paginationButtons }>
      <button
        className={ styles.left }
        onClick={() => handlePaginate(pageNumber - 1)}
      >
        &#8678;
      </button>
      <span className={ styles.pageCount }>{ `${pageNumber}...${maxPageNumber}` }</span>
      <button
        className={ styles.right }
        onClick={() => handlePaginate(pageNumber + 1)}
      >
        &#8680;
      </button>
    </div>
  </div>;
};

PaginatedMeetings = connect(
  state => ({
    meetings: state.paginatedMeetings.meetings,
    pageNumber: state.paginatedMeetings.pageNumber,
    maxPageNumber: state.paginatedMeetings.maxPageNumber,
  }),
  dispatch => ({ setPageNumber: number => dispatch(setPageNumber(number)) }),
)(PaginatedMeetings);

const PaginatedMeetingsLoader = props => {
  const { getPaginatedMeetings, pageNumber } = props;

  getPaginatedMeetings(pageNumber);

  return <PaginatedMeetings />;
};

export default connect(
  state => ({ pageNumber: state.paginatedMeetings.pageNumber }),
  dispatch => ({ getPaginatedMeetings: pageNumber => dispatch(getPaginatedMeetings(pageNumber)) }),
)(PaginatedMeetingsLoader);
