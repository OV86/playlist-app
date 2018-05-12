import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // needs to be imported before own styles. Makes the website look same in all browsers. Resets default styles.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// console.log(store.getState());

store.dispatch(addExpense({
  description: 'https://www.youtube.com/embed/rQKis2Cfpeo?playlist=uwf38MVMbc8,GuB-d7jRkCw'
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
