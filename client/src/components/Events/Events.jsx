import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/ducks/events';
import styles from './Events.scss';
import add from '../../assets/images/add.svg';
import EventCard from '../EventCard';
import EventReminder from '../EventReminder';

const eventsRows = events => {
  const rows = [];
  let i = 0

  while(i < events.length) {
    rows.push(events.slice(i, i + 2));
    i += 2;
  }

  return rows;
};

let Events = props => {
  const { events } = props;
  const rows = eventsRows(events);

  return <div className={styles.container}>
    <div className={styles.main}>
      {rows.map((r,i) => {
        return <div className={styles.row} key={i}>
          {r.map((e,i) => <EventCard key={i} {...e} />)}
        </div>;
      })}
    </div>
    <div className={styles.side}>
      <h2 className={styles.remindersTitle}>Today's Highlights</h2>
      {events.map((e,i) => <EventReminder key={i} {...e} />)}
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
