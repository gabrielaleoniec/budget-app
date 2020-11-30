export const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

export const sortByDate = (sortByAsc = false) => ({
    type: "SORT_BY",
    sortBy: 'createdAt', 
    sortByAsc
});

export const sortByAmount = (sortByAsc = false) => ({
    type: "SORT_BY",
    sortBy: 'amount',
    sortByAsc
});

export const setStartDate = (startDateString = '') => {
    const startDate = new Date(startDateString).valueOf();
    return {
        type: "SET_START_DATE",
        startDate: isNaN(startDate) ? undefined : startDate
    }
}

export const setEndDate = (endDateString = '') => {
    const endDate = new Date(endDateString);
    const dateAsMiliseconds = Date.parse(endDate);

    return {
        type: "SET_END_DATE",
        endDate: isNaN(dateAsMiliseconds) ? undefined : dateAsMiliseconds
    }
}