import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import mockExpenses from '../fixtures/expenses';

test('Should filter by text criteria', () => {
    const filters = {
        text: 'food',
        sortBy: 'createdBy',
        startDate: undefined,
        endDate: undefined
    }
    const selected = getVisibleExpenses(mockExpenses, filters);
    expect(selected).toEqual([mockExpenses[1], mockExpenses[3]]);
});

test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'createdAt',
        startDate: new Date('2020-05-01').valueOf(),
        endDate: undefined
    };

    const selected = getVisibleExpenses(mockExpenses, filters);
    expect(selected).toEqual([mockExpenses[0], mockExpenses[1]]);
});

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: new Date('2020-05-01').valueOf()
    };

    const selected = getVisibleExpenses(mockExpenses, filters);
    expect(selected).toEqual([mockExpenses[2], mockExpenses[3]]);
});

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'createdAt',
        startDate: undefined,
        endDate: undefined
    };
    const selected = getVisibleExpenses(mockExpenses, filters);
    expect(selected).toEqual([mockExpenses[0], mockExpenses[1], mockExpenses[2], mockExpenses[3]]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const selected = getVisibleExpenses(mockExpenses, filters);
    expect(selected).toEqual([mockExpenses[2], mockExpenses[0], mockExpenses[1], mockExpenses[3]]);
});