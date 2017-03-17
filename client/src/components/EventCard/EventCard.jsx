import React from 'react';
import { connect } from 'react-redux';
import { setEvent } from '../../redux/ducks/event';
import styles from './EventCard.scss';
import share from '../../assets/images/share.png';

const EventCard = props => {
  const { event, meeting } = props;
  const {
    title,
    description,
    image_url,
  } = event;

  const {
    price,
    time,
    date,
    location,
  } = meeting;

  return <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.dateTime}>
        { `${date} @ ${time}` }
      </div>
      <button className={styles.share}>
        <img src={share} alt="Share"/>
      </button>
    </div>
    <div className={styles.middle}>
      <div className={styles.name}>
        { title }
      </div>
    </div>
    <div className={styles.bottom}>
      <button className={styles.view} onClick={() => setEvent(event)}>View</button>
    </div>
  </div>;
};

export default connect(
  null,
  dispatch => ({ setEvent: event => dispatch(setEvent(event)) }),
)(EventCard);
