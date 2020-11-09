import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/storeConfiguration';
import { addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from '../src/selectors/expenses';

import './styles/styles.scss';


store.dispatch(addExpense({ description: 'water bill', amount: 1000, createdAt: '2019-05-12' }));
store.dispatch(addExpense({ description: 'house', amount: 45000000, createdAt: '2020-08-12' }));
store.dispatch(addExpense({ description: 'gas bill', amount: 12000, createdAt: '2019-02-12' }));
store.dispatch(addExpense({ description: 'shoe lacess bill', amount: 1200, createdAt: '2020-05-12' }));
store.dispatch(addExpense({ description: 'food bill', amount: 12500, createdAt: '2019-09-12' }));
store.dispatch(addExpense({ description: 'clothes bill', amount: 35000, createdAt: '2019-05-16' }));
store.dispatch(addExpense({ description: 'shoes bill', amount: 45000, createdAt: '2019-08-12' }));

store.dispatch(setTextFilter('bill'));

const { expenses, filters } = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));