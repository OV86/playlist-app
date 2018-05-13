import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import CssBaseline from 'material-ui/CssBaseline';
import 'normalize.css/normalize.css'; // needs to be imported before own styles. Makes the website look same in all browsers. Resets default styles.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <CssBaseline>
      <AppRouter />
    </CssBaseline>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
