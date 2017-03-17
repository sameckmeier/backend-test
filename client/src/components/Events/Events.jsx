import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/ducks/events';
import { setEvent } from '../../redux/ducks/event';
import styles from './Events.scss';
import add from '../../assets/images/add.svg';
import share from '../../assets/images/share.png';
import defaultPlaceholder from '../../assets/images/default-placeholder.png';

const truncatedDescription = description => {
  let truncated = description.split(' ').slice(0,5).join(' ');
  return `${truncated}...`;
}

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
          {row.map(({ event, meeting }, i) => {
            return <div className={styles.cardContainer} key={i}>
              <div className={styles.cardTop}>
                <div className={styles.cardDateTime}>
                  { `${meeting.date} @ ${meeting.time}` }
                </div>
                <button className={styles.cardShare}>
                  <img src={share} alt="Share"/>
                </button>
              </div>
              <div className={styles.cardMiddle}>
                <div className={styles.cardName}>
                  { event.title }
                </div>
              </div>
              <div className={styles.cardBottom}>
                <button className={styles.cardView} onClick={() => setEvent(event)}>View</button>
              </div>
            </div>;
          })}
        </div>;
      })}
    </div>
    <div className={styles.side}>
      <h2 className={styles.remindersTitle}>Today's Highlights</h2>
      {events.map(({ event, meeting }, i) => {
        return <div className={styles.reminderContainer} key={i}>
          <div className={styles.reminderLeft}>
            <img src={defaultPlaceholder} alt="Default Placeholder"/>
          </div>
          <div className={styles.reminderRight}>
            <div className={styles.reminderRightTop}>
              <div className={styles.reminderNameDateTime}>
                { `${event.title} ${meeting.date} @ ${meeting.time}` }
              </div>
              <div className={styles.reminderDescription}>
                { truncatedDescription(event.description) }
              </div>
            </div>
            <div className={styles.reminderRightBottom}>
              <div className={styles.reminderLocation}>{ meeting.location }</div>
            </div>
          </div>
        </div>;
      })}
      <div className={styles.add}>
        <button>
          <img src={add} alt="Add"/>
        </button>
      </div>
    </div>
  </div>;
}

Events = connect(
  state => ({ events: state.events }),
  dispatch => ({ setEvent: event => dispatch(setEvent(event)) }),
)(Events);

const EventsLoader = props => {
  const { getEvents } = props;

  getEvents();

  return <Events />;
};

export default connect(
  null,
  dispatch => ({ getEvents: () => dispatch(getEvents()) }),
)(EventsLoader);
