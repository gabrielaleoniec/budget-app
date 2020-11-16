import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

describe('Tests agains valid data', () => {
    let history, removeExpense, updateExpense, wrapper;
    beforeEach(() => {
        updateExpense = jest.fn();
        removeExpense = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(
            <EditExpensePage
                expense={expenses[0]}
                removeExpense={removeExpense}
                updateExpense={updateExpense}
                history={history}
            />);
    });

    test('Should render EditExpensePage correctly', () => {
        expect(wrapper.find('ExpenseForm').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call updateExpense with properties on valid form submission', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
        expect(updateExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
        expect(history.push).toHaveBeenLastCalledWith('/');
    });

    test('Should call removeExpense with right properties on button click ', () => {
        wrapper.find('button').simulate('click');
        expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
        expect(history.push).toHaveBeenLastCalledWith('/');
    });
});

test('Should render error message when not expense', () => {
    const wrapper = shallow(<EditExpensePage />);
    expect(wrapper.find('p').length).toBeGreaterThan(0);
});
