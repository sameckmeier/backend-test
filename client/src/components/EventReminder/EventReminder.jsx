import React from 'react';
import styles from './EventReminder.scss';
import defaultPlaceholder from '../../assets/images/default-placeholder.png';

const EventReminder = props => {
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

  let truncatedDescription = description.split(' ').slice(0,5).join(' ')
  truncatedDescription = `${truncatedDescription}...`

  return <div className={styles.container}>
    <div className={styles.left}>
      <img src={defaultPlaceholder} alt="Default Placeholder"/>
    </div>
    <div className={styles.right}>
      <div className={styles.rightTop}>
        <div className={styles.nameDateTime}>
          { `${event.title} ${meeting.date} @ ${meeting.time}` }
        </div>
        <div className={styles.description}>
          { truncatedDescription }
        </div>
      </div>
      <div className={styles.rightBottom}>
        <div className={styles.location}>{ meeting.location }</div>
      </div>
    </div>
  </div>;
}

export default EventReminder;
