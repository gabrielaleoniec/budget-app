
export default (expenses) => {

    if (!Array.isArray(expenses) && typeof expenses === 'object') {
        return (expenses.amount / 100).toFixed(2) * 1;
    };

    const totalAmount = expenses.reduce((accumulator, expense) => {
        return accumulator + parseInt(expense.amount)
    }, 0);

    return (totalAmount / 100).toFixed(2) * 1;
}