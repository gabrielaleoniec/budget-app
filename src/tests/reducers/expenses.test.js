import expensifyReducer from '../../reducers/expenses';
import mockExpenses from '../fixtures/expenses';

test('Should set default expenses state (empty array)', () => {
    const state = expensifyReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should add expense to the array of expenses', () => {
    const newExpense = {
        description: 'Pants and underwear',
        note: 25000
    }
    const state = expensifyReducer(mockExpenses, { type: 'ADD_EXPENSE', expense: newExpense });
    expect(state).toEqual([...mockExpenses, newExpense]);
});

test('Should remove expense from the array of expenses', () => {
    const id = mockExpenses[1].id;
    const state = expensifyReducer(mockExpenses, { type: 'REMOVE_EXPENSE', id });
    expect(state).toEqual([mockExpenses[0], mockExpenses[2], mockExpenses[3]]);
});

test('Should not remove expense when id does not exist', () => {
    const state = expensifyReducer(mockExpenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(state).toEqual([mockExpenses[0], mockExpenses[1], mockExpenses[2], mockExpenses[3]]);
})

test('Should update an expense in the array of expenses ', () => {
    const id = mockExpenses[1].id;
    const updates = {
        note: 'Zielony Spichlerz',
        amount: 12650
    };
    const state = expensifyReducer(mockExpenses, { type: 'UPDATE_EXPENSE', id, updates });
    expect(state).toEqual([
        mockExpenses[0],
        {
            ...mockExpenses[1],
            note: 'Zielony Spichlerz',
            amount: 12650
        },
        mockExpenses[2],
        mockExpenses[3]
    ])
});

test('Should not update an expense when id does not exist', () => {
    const updates = {
        note: 'Zielony Spichlerz',
        amount: 12650
    };
    const state = expensifyReducer(mockExpenses, { type: 'UPDATE_EXPENSE', id: '-1', updates });
    expect(state).toEqual(mockExpenses);
});

test('Should setup expenses', () => {
    const expenses = [
        {
            description: 'Hugo',
            note: 'Hockey',
            amount: 6000,
            createdAt: new Date().valueOf()
        },
        {
            description: 'Zuzia',
            note: 'Books',
            amount: 18000,
            createdAt: new Date().valueOf()
        }
    ]
    const state = expensifyReducer(mockExpenses, { type: 'SET_EXPENSES', expenses });
    expect(state).toEqual(expenses)
})
