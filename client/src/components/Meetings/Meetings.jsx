import React from 'react';
import { connect } from 'react-redux';
import { getMeetings } from '../../redux/ducks/meetings';
import { setView, CREATE_EVENT } from '../../redux/ducks/view';
import styles from './Meetings.scss';
import PaginatedMeetings from '../PaginatedMeetings';
import MeetingCard from '../MeetingCard';
import MeetingReminder from '../MeetingReminder';
import add from '../../assets/images/add.svg';

const meetingsRows = meetings => {
  const rows = [];
  let i = 0

  while(i < meetings.length) {
    rows.push(meetings.slice(i, i + 2));
    i += 2;
  }

  return rows;
};

let Meetings = ({
  meetings,
  setView,
  authentication,
}) => {
  const { loggedIn } = authentication;
  const rows = meetingsRows(meetings);

  return <div className={ styles.container }>
    <div className={ styles.main }>
      {loggedIn ?
        <PaginatedMeetings /> :
        rows.map((row,i) => {
          return <div className={ styles.row } key={ i }>
            {row.map((m, i) => <MeetingCard
                key={ i }
                eventId={ m.event.id }
                title={ m.event.title }
                date={ m.date }
                time={ m.time }
                price={ m.price }
              />
            )}
          </div>;
        })
      }
    </div>
    <div className={ styles.side }>
      <h2 className={ styles.remindersTitle }>Today's Highlights</h2>
      {meetings.map((m, i) => <MeetingReminder
          key={ i }
          eventId={ m.event.id }
          title={ m.event.title }
          description={ m.event.description }
          imageUrl={ m.event.image_url }
          date={ m.date }
          time={ m.time }
          location={ m.location }
        />
      )}
      <div className={ styles.add }>
        {loggedIn &&
          <button onClick={ setView }>
            <img src={ add } alt="Add"/>
          </button>
        }
      </div>
    </div>
  </div>;
}

Meetings = connect(
  state => ({ meetings: state.meetings, authentication: state.authentication }),
  dispatch => ({ setView: () => dispatch(setView(CREATE_EVENT)) }),
)(Meetings);

const MeetingsLoader = props => {
  const { getMeetings } = props;

  getMeetings();

  return <Meetings />;
};

export default connect(
  null,
  dispatch => ({ getMeetings: () => dispatch(getMeetings()) }),
)(MeetingsLoader);
