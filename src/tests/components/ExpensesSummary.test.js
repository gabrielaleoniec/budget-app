import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Should correctly render ExpensesSummary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary totalAmount={1200} expenseCount={3} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary totalAmount={1200} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
});