import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './ducks';

export default createStore(reducer, {}, compose(
  applyMiddleware(ReduxThunk),
  typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
));
