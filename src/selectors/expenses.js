
const getVisibleExpenses = (expenses, { text, sortBy, sortByAsc, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
        const matchStartDate = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const matchEndDate = typeof endDate !== 'number' || expense.createdAt <= endDate;

        return matchText && matchStartDate && matchEndDate;
    }).sort((a, b) => {
        if (sortBy === 'createdAt') {
            return sortByAsc ? b.createdAt - a.createdAt : a.createdAt - b.createdAt;
        } else if (sortBy === 'amount') {
            return sortByAsc ? b.amount - a.amount : a.amount - b.amount;
        }
    })
}

export default getVisibleExpenses;