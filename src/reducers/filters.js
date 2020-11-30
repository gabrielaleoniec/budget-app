import moment from 'moment';

const defaultStateFilterReducer = {
    text: '',
    sortBy: 'createdAt',
    sortByAsc: false,
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
}

const filterReducer = (state = defaultStateFilterReducer, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            console.log('reducer', action);
            return {
                ...state,
                sortBy: action.sortBy,
                sortByAsc: action.sortByAsc
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

export default filterReducer;