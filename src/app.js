import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/storeConfiguration';
import { startSetExpenses, addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from '../src/selectors/expenses';

import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});
