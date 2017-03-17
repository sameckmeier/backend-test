import React from 'react';
import { connect } from 'react-redux';
import styles from './App.scss';
import Events from '../Events';
import {
  EVENTS,
  EVENT,
  CREATE_EVENT,
} from '../../redux/ducks/view';

const App = props => {
  const { view } = props;

  let renderView;

  switch(view) {
    case EVENTS:
      renderView = <Events events={props.events} />;
      break;
    case EVENT:
      break;
    case CREATE_EVENT:
      break;
    default:
      throw new Error('Invalid view type');
  }

  return <div className={styles.container}>
    <div className={styles.header}>
      <h1>Events</h1>
    </div>
    <div className={styles.main}>
      { renderView }
    </div>
    <div className={styles.footer}>
    </div>
  </div>;
};

export default connect(state => ({ view: state.view }))(App);
