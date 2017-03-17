import React from 'react';
import styles from './EventCard.scss';
import share from '../../assets/images/share.png';

const EventCard = props => {
  const {
    title,
    description,
    location,
    image_url,
    user_id,
    meeting,
  } = props;

  const {
    price,
    time,
    date,
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
      <button className={styles.view}>View</button>
    </div>
  </div>;
}

export default EventCard;
