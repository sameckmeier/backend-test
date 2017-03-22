import React from 'react';
import { connect } from 'react-redux';
import { setView } from '../../redux/ducks/view';
import styles from './App.scss';
import Meetings from '../Meetings';
import Event from '../Event';
import CreateEvent from '../CreateEvent';
import Login from '../Login';
import back from '../../assets/images/back.svg';
import { getUser } from '../../redux/ducks/user';
import { logOut } from '../../redux/ducks/authentication';
import { defaultCreateEventState } from '../../redux/ducks/createEventParams';

import {
  MEETINGS,
  EVENT,
  CREATE_EVENT,
  LOGIN,
} from '../../redux/ducks/view';

const App = props => {
  const {
    authentication,
    view,
    setView,
    getUser,
    logOut,
    defaultCreateEventState,
  } = props;

  const {
    loggedIn
  } = authentication;

  const handleBackClick = () => {
    if (view === CREATE_EVENT) { defaultCreateEventState() }

    setView(MEETINGS);
  };

  if (!loggedIn && localStorage.getItem('jwt')) { getUser() }

  let renderView;

  switch(view) {
    case MEETINGS:
      renderView = <Meetings />;
      break;
    case EVENT:
      renderView = <Event />;
      break;
    case CREATE_EVENT:
      renderView = <CreateEvent />;
      break;
    case LOGIN:
      renderView = <Login />;
      break;
    default:
      throw new Error('Invalid view type');
  }

  return <div className={ styles.container }>
    <header className={ styles.header }>
      <div className={ styles.headerLeft }>
        {view !== MEETINGS &&
          <button className={ styles.backButton } onClick={ handleBackClick }>
            <img src={ back } alt="Back" />
          </button>
        }
        <h1>Events</h1>
      </div>
      <div className={ styles.headerRight }>
        <button className={ styles.login } onClick={ () => loggedIn ? logOut() : setView(LOGIN) }>
          { loggedIn ? "Log Out" : "Login" }
        </button>
      </div>
    </header>
    <main className={ styles.main }>
      { renderView }
    </main>
    <footer className={ styles.footer } />
  </div>;
};

export default connect(
  state => ({ view: state.view, authentication: state.authentication }),
  dispatch => ({
    setView: view => dispatch(setView(view)),
    getUser: () => dispatch(getUser()),
    logOut: () => dispatch(logOut()),
    defaultCreateEventState: () => dispatch(defaultCreateEventState()),
  }),
)(App);
