export const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

export const sortByDate = () => ({
    type: "SORT_BY",
    sortBy: 'createdAt'
});

export const sortByAmount = () => ({
    type: "SORT_BY",
    sortBy: 'amount'
});

export const setStartDate = (startDateString = '') => {
    const startDate = new Date(startDateString);
    const dateAsMiliseconds = Date.parse(startDate);
    return {
        type: "SET_START_DATE",
        startDate: isNaN(dateAsMiliseconds) ? undefined : dateAsMiliseconds
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