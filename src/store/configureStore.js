import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/songs';
import filtersReducer from '../reducers/filters';

export default () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers({
      songs: expensesReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  return store;
};

