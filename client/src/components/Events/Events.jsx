import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/ducks/events';
import styles from './Events.scss';
import EventCard from '../EventCard';
import EventReminder from '../EventReminder';
import add from '../../assets/images/add.svg';

const composedEvents = events => events.reduce(
  (arr, e) => arr.concat(e.meetings.map(m => ({ meeting: m, event: e }))),
  [],
);

const eventsRows = composedEvents => {
  const rows = [];
  let i = 0

  while(i < composedEvents.length) {
    rows.push(composedEvents.slice(i, i + 2));
    i += 2;
  }

  return rows;
};

let Events = props => {
  const { setEvent } = props;
  let { events } = props;

  events = composedEvents(events);
  const rows = eventsRows(events);

  return <div className={styles.container}>
    <div className={styles.main}>
      {rows.map((row,i) => {
        return <div className={styles.row} key={i}>
          {row.map(({ event, meeting }, i) => <EventCard key={i} event={event} meeting={meeting} /> )}
        </div>;
      })}
    </div>
    <div className={styles.side}>
      <h2 className={styles.remindersTitle}>Today's Highlights</h2>
      {events.map(({ event, meeting }, i) => <EventReminder key={i} event={event} meeting={meeting} /> )}
      <div className={styles.add}>
        <button>
          <img src={add} alt="Add"/>
        </button>
      </div>
    </div>
  </div>;
}

Events = connect(state => ({ events: state.events }))(Events);

const EventsLoader = props => {
  const { getEvents } = props;

  getEvents();

  return <Events />;
};

export default connect(
  null,
  dispatch => ({ getEvents: () => dispatch(getEvents()) }),
)(EventsLoader);
