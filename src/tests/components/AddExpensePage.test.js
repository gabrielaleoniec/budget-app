import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('Should render AddExpense correcty ', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should call startAddExpense prop on valid form submission', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});