import React from 'react';
import querystring from 'querystring';
import { connect } from 'react-redux';
import { navigateToEvent } from '../../redux/ducks/event';
import TwitterWidget from '../TwitterWidget';
import styles from './MeetingCard.scss';

const MeetingCard = props => {
  const {
    eventId,
    title,
    date,
    time,
    price,
    navigateToEvent,
  } = props;

  const status = querystring.stringify({ text: `I will attend ${title} @ ${date} ${time}` });

  return <div className={ styles.container }>
    <div className={ styles.top }>
      <div className={ styles.dateTime }>
        { `${date} @ ${time}` }
      </div>
      <TwitterWidget status={ status }/>
    </div>
    <div className={ styles.middle }>
      <div className={ styles.name }>
        { title }
      </div>
    </div>
    <div className={ styles.bottom }>
      <button
        className={ styles.view }
        onClick={() => navigateToEvent(
          eventId,
          {
            title,
            date,
            time,
            price,
          },
        )}
      >
        View
      </button>
    </div>
  </div>;
};

export default connect(
  null,
  dispatch => ({ navigateToEvent: (id, meeting) => dispatch(navigateToEvent(id, meeting)) }),
)(MeetingCard);
