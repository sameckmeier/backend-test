import React from 'react';
import { connect } from 'react-redux';
import styles from './Event.scss';
import defaultPlaceholder from '../../assets/images/default-placeholder.png';

const Event = ({ event }) => {
  const {
    title,
    description,
    image_url,
    meetings,
    meeting,
  } = event;
  const { location } = meeting;

  return <div className={ styles.container }>
    <div className={ styles.main }>
      <div className={ styles.titleLocation }>
        <span className={ styles.title }>{ title }</span>
        <span className={ styles.location }>{ location }</span>
      </div>
      <div className={ styles.description }>{ description }</div>
    </div>
    <div className={ styles.side }>
      <div className={ styles.image }>
        <img src={ image_url || defaultPlaceholder } alt="Default Placeholder"/>
      </div>
      <table className={ styles.meetings }>
        <thead>
          <tr className={ styles.tableHeaders }>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map(({
            date,
            time,
            price,
            location,
            timezone,
          }, i) => <tr className={ styles.tableRow } key={i}>
              <td>{ date }</td>
              <td>{ `${time} ${timezone}` }</td>
              <td>{ location }</td>
              <td>{ price }</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>;
};

export default connect(state => ({ event: state.event }))(Event);
