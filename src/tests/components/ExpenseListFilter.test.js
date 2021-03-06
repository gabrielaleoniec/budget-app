import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';

let setTextFilter, setStartDate, setEndDate, wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilter
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('Should render ExpenseListFilter correctly', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').length).toBe(1);
});

test('Should render ExpenseListFilter with alt filters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').length).toBe(1);
});

test('Should handle text change', () => {
    expect(setTextFilter).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('change', {
        target: { value: altFilters.text }
    });
    expect(setTextFilter).toHaveBeenCalledWith(altFilters.text);
});

test('Should handle date change', () => {
    const startDate = moment().add(4, 'years');
    const endDate = moment().add(8, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({
        startDate, endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
});

test('Should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('focusedInput')).toBe(calendarFocused);
});