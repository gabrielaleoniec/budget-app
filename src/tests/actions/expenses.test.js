import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { v4 as uuidv4 } from 'uuid';
import {
    startSetExpenses, startAddExpense, startRemoveExpense, startUpdateExpense,
    setExpenses, addExpense, removeExpense, updateExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const middlewares = [thunk]
const createMockStore = configureMockStore(middlewares)

const mockID = uuidv4();
const now = new Date('2020-11-10');
const mockExpense = {
    description: 'Shoes',
    note: 'I must spend less',
    amount: 45000,
    createdAt: now
}

beforeEach((done) => {
    const expensesData = {};

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData);
    done();
});

test('Should setup add expense action object with given parameters', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test('Should add expense and store the data to the database', (done) => {
    const store = createMockStore({});
    const expense = {
        description: 'Mouse',
        note: '',
        amount: 3000,
        createdAt: 4587
    }
    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then(() => {
            //expect().toEqual(expense);
            done();
        });
    })
});

test('Should not add expense with defaults and store the data to the database', (done) => {
    const store = createMockStore({});

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions({});

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: expect.any(Number)
            }
        });

        database.ref(`expenses/${actions[0].expense.id}`).once('value', (snapshot) => {
            expect(snapshot.val()).toBeFalsy();
        })

        done();
    });
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: mockID });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: mockID
    });
})

test('Should setup update expense action object', () => {
    const action = updateExpense(mockID, mockExpense);
    expect(action).toEqual({
        type: "UPDATE_EXPENSE",
        id: mockID,
        updates: mockExpense
    })
});

test('Should set expenses action with given parameters', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('Should get expenses from the database and set them to the store', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        database.ref('expenses').once('value').then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            });
            done();
        })
    });
});

test('Should update expense in the store and database', (done) => {
    const store = createMockStore({});
    const id = expenses[3].id;
    const updates = {
        description: 'Holidays',
        note: '',
        amount: 45000,
        createdAt: new Date('2020-09-09').valueOf()
    };

    store.dispatch(startUpdateExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'UPDATE_EXPENSE',
            id,
            updates
        });

        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            ...snapshot.val(),
            ...updates
        })
        done();
    });;
});

test('Should remove an expense from db and store', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });

        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});
