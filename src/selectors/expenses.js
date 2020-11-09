
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
        const matchStartDate = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const matchEndDate = typeof endDate !== 'number' || expense.createdAt <= endDate;

        return matchText && matchStartDate && matchEndDate;
    }).sort((a, b) => {
        if (sortBy === 'createdAt') {
            return b.createdAt - a.createdAt;
        } else if (sortBy === 'amount') {
            return  b.amount - a.amount;
        }
    })
}

export default getVisibleExpenses;