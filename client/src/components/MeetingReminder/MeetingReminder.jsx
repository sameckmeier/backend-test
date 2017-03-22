import React from 'react';
import styles from './MeetingReminder.scss';
import defaultPlaceholder from '../../assets/images/default-placeholder.png';

const MeetingReminder = props => {
  const {
    title,
    description,
    imageUrl,
    time,
    date,
    location,
  } = props;

  let truncatedDescription = description.split(' ').slice(0,5).join(' ')
  truncatedDescription = `${ truncatedDescription }...`

  return <div className={ styles.container }>
    <div className={ styles.left }>
      <img src={ imageUrl || defaultPlaceholder } alt="Event"/>
    </div>
    <div className={ styles.right }>
      <div className={ styles.rightTop }>
        <div className={ styles.nameDateTime }>
          { `${ title } ${ date } @ ${ time }` }
        </div>
        <div className={ styles.description }>
          { truncatedDescription }
        </div>
      </div>
      <div className={ styles.rightBottom }>
        <div className={ styles.location }>{ location }</div>
      </div>
    </div>
  </div>;
}

export default MeetingReminder;
