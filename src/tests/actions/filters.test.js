import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('Should setup the text filter action object with provided parameters', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'bill'
    })
});

test('Should setup the text filter action object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
})

test('Should setup the sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY",
        sortBy: 'createdAt', 
        sortByAsc: false
    })
});

test('Should setup the sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY",
        sortBy: 'amount',
        sortByAsc: false
    });
});

test('Should setup the start date action object with given date', () => {
    const action = setStartDate('2020-01-01');
    expect(action).toEqual({
            type: "SET_START_DATE",
            startDate: expect.any(Number)
    });
});

test('Should setup the default start date action object given no parameters', () => {
    const action = setStartDate();
    expect(action).toEqual({
            type: "SET_START_DATE",
            startDate: undefined
    });
});

test('Should setup the end date action object given a date', () => {
    const action = setEndDate('2020-12-31');
    expect(action).toEqual({
            type: "SET_END_DATE",
            endDate: expect.any(Number)
    });
});

test('Should setup the default end date action object', () => {
    const action = setEndDate();
    expect(action).toEqual({
            type: "SET_END_DATE",
            endDate: undefined
    });
});