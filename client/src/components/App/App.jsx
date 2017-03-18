import React from 'react';
import { connect } from 'react-redux';
import { setView } from '../../redux/ducks/view';
import styles from './App.scss';
import Events from '../Events';
import Event from '../Event';
import back from '../../assets/images/back.svg';
import {
  EVENTS,
  EVENT,
  CREATE_EVENT,
} from '../../redux/ducks/view';

const App = props => {
  const { view, setView } = props;

  let renderView;

  switch(view) {
    case EVENTS:
      renderView = <Events />;
      break;
    case EVENT:
      renderView = <Event />;
      break;
    case CREATE_EVENT:
      break;
    default:
      throw new Error('Invalid view type');
  }

  return <div className={styles.container}>
    <header className={styles.header}>
      {view !== EVENTS &&
        <button className={ styles.backButton }>
          <img src={back} alt="Back" onClick={ () => setView(EVENTS) }/>
        </button>
      }
      <h1>Events</h1>
    </header>
    <main className={styles.main}>
      { renderView }
    </main>
    <footer className={styles.footer} />
  </div>;
};

export default connect(
  state => ({ view: state.view }),
  dispatch => ({ setView: view => dispatch(setView(view)) }),
)(App);
