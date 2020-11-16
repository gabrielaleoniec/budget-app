import moment from 'moment';

export const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'createdAt'
};

export const altFilters = {
    text: 'bill',
    startDate: moment('2019-01-01'),
    endDate: moment('2020-06-01'),
    sortBy: 'amount'
};