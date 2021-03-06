import database from '../firebase/firebase';

// ADD EXPENSE
export const addExpense = (expense = {}) => {
    return {
        type: "ADD_EXPENSE",
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const date = createdAt ? new Date(createdAt).valueOf() : new Date().valueOf();

        const expense = { description, note, amount, createdAt: date };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                ...expense,
                id: ref.key
            }))
        });
    }
}

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
});

// START REMOVE EXPENSES
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }))
        });
    }
}

// EDIT EXPENSE
export const updateExpense = (id, updates) => ({
    type: "UPDATE_EXPENSE",
    id,
    updates
});

export const startUpdateExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(updateExpense(id, updates));
        });
    };
};

// SET EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then(snapshot => {
            const expenses = [];

            snapshot.forEach(childSnapshot => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        }).catch((e) => {
            console.log('Error', e);
        })
    }
};
