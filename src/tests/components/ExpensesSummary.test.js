import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should correctly render ExpensesSummary for multiple expenses out of many', () => {
    const wrapper = shallow(<ExpensesSummary totalAmount={1200} expensesCount={3} allExpensesCount={6} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary for single expense out of many', () => {
    const wrapper = shallow(<ExpensesSummary totalAmount={1200} expensesCount={1} allExpensesCount={6} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary for single expense out of one', () => {
    const wrapper = shallow(<ExpensesSummary totalAmount={1200} expensesCount={1} allExpensesCount={1} />);
    expect(wrapper).toMatchSnapshot();
});