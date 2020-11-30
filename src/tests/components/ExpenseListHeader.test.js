import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListHeader } from '../../components/ExpenseListHeader';
import { filters, altFilters } from '../fixtures/filters';

let sortByDate, sortByAmount, wrapper;
beforeEach(() => {
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenseListHeader
            filters={filters}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
        />);
});

test('Should render ExpenseListHeader correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('button').first().simulate('click');
    expect(sortByDate).toHaveBeenCalled();
});

test('Should handle sort by amount', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('button').last().simulate('click');
    expect(sortByAmount).toHaveBeenCalled();
});