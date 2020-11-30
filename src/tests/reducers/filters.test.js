import moment from 'moment';
import filterReducer from '../../reducers/filters';

const mockFilter = {
    text: '',
    sortBy: 'createdAt',
    sortByAsc: false,
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
}

test('Should set default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockFilter);
});

test('Should set text filter', () => { 
    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'abc'});
    expect(state).toEqual({
        ...mockFilter,
        text: 'abc'
    })
});

test('Should setup sorting by date filter', () => { 
    const state = filterReducer(undefined, {type: 'SORT_BY', sortBy: 'createdAt', sortByAsc: true});
    expect(state).toEqual({
        ...mockFilter,
        sortBy: 'createdAt',
        sortByAsc: true
    })
});

test('Should setup sorting by amount filter', () => { 
    const state = filterReducer(undefined, {type: 'SORT_BY', sortBy: 'amount', sortByAsc: false});
    expect(state).toEqual({
        ...mockFilter,
        sortBy: 'amount',
        sortByAsc: false
    })
});

test('Should set start date filter', () => { 
    const date = moment().startOf('year').valueOf();
    const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate: date});
    expect(state).toEqual({
        ...mockFilter,
        startDate: date
    })
});

test('Should set end date filter', () => { 
    const date = moment().endOf('year').valueOf();
    const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate: date});
    expect(state).toEqual({
        ...mockFilter,
        endDate: date
    });

});
