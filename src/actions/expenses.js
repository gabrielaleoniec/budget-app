import { v4 as uuidv4 } from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt } = {}) => {
    const date = createdAt ? new Date(createdAt) : new Date();
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt: Date.parse(date)
        }
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
 