import React from 'react';
import styles from './EventReminder.scss';
import defaultPlaceholder from '../../assets/images/default-placeholder.png';

const EventReminder = props => {
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

  let truncatedDescription = description.split(' ').slice(0,5).join(' ')
  truncatedDescription = `${truncatedDescription}...`

  return <div className={styles.container}>
    <div className={styles.left}>
      <img src={defaultPlaceholder} alt="Default Placeholder"/>
    </div>
    <div className={styles.middle}>
      <div className={styles.nameDateTime}>
        { `${title} ${date} @ ${time}` }
      </div>
      <div className={styles.description}>
        { truncatedDescription }
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.location}>{ location }</div>
    </div>
  </div>;
}

export default EventReminder;
