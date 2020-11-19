import database from '../firebase/firebase';

export const addExpense = (expense = {}) => {
    return {
        type: "ADD_EXPENSE",
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const date = createdAt ? new Date(createdAt).valueOf() : new Date().valueOf();

        const expense = { description, note, amount, createdAt: date };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                ...expense,
                id: ref.key
            }))
        });
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
})

export const updateExpense = (id, updates) => ({
    type: "UPDATE_EXPENSE",
    id,
    updates
})
