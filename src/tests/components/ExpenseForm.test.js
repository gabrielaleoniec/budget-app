import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error when required data not provided', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'Bicycle repair';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set note on textarea change', () => {
    const value = 'Better save';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set amount on input change', () => {
    const value = '33300';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should not set amount on input change when value is not numeric', () => {
    const value = '12.222';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe((expenses[0].amount / 100).toString());
    expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    const createdAt = moment(expenses[0].createdAt).format('YYYY-MM-DD');
    // const createdAt = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt
    });
});

test('Should set the expense date in input change', () => {
    const value = '2020-11-15';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);

    wrapper.find('input').at(2).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('createdAt')).toBe(value);
})