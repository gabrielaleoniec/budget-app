import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

describe('Tests agains valid data', () => {
    let history, startRemoveExpense, startUpdateExpense, wrapper;
    beforeEach(() => {
        startUpdateExpense = jest.fn();
        startRemoveExpense = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(
            <EditExpensePage
                expense={expenses[0]}
                startRemoveExpense={startRemoveExpense}
                startUpdateExpense={startUpdateExpense}
                history={history}
            />);
    });

    test('Should render EditExpensePage correctly', () => {
        expect(wrapper.find('ExpenseForm').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should call startUpdateExpense with properties on valid form submission', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
        expect(startUpdateExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
        expect(history.push).toHaveBeenLastCalledWith('/');
    });

    test('Should call showConfirmationModal with right properties on button click ', () => {
        jest.useFakeTimers();
        expect(wrapper.find('button').length).toBe(1);
        wrapper.find('button').simulate('click');
        expect(wrapper.state('showConfirmation')).toBe(true);
        jest.runAllTimers();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
        expect(wrapper.state('showConfirmationBox')).toBe(true);

    });
});

test('Should render error message when not expense', () => {
    const wrapper = shallow(<EditExpensePage />);
    expect(wrapper.find('p').length).toBeGreaterThan(0);
});
