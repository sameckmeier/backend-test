import React from 'react';
import { connect } from 'react-redux';
import styles from './App.scss';
import { getEvents } from '../../redux/ducks/events';
import Events from '../Events';

const App = props => {
  const { getEvents } = props;

  getEvents();

  return <div className={styles.container}>
    <div className={styles.header}>
      <h1>Events</h1>
    </div>
    <div className={styles.main}>
      <Events events={props.events} />
    </div>
    <div className={styles.footer}>
    </div>
  </div>;
};

export default connect(
  null,
  dispatch => ({ getEvents: () => dispatch(getEvents()) }),
)(App);
