import { addExpense, removeExpense, updateExpense } from '../../actions/expenses';
import { v4 as uuidv4 } from 'uuid';

const mockID = uuidv4();
const now = new Date('2020-11-10');
const mockExpense = {
    description: 'Shoes',
    note: 'I must spend less',
    amount: 45000,
    createdAt: now
}

test('Should setup add expense action object with given parameters', () => {
    const action = addExpense({ ...mockExpense });
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            amount: mockExpense.amount,
            createdAt: now.valueOf(),
            description: mockExpense.description,
            id: expect.any(String),
            note: mockExpense.note
        }
    })
})

test('Should set up an add expense action generator for default parameters', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: expect.any(Number)
        }
    })
})

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: mockID });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: mockID
    })
})

test('Should setup update expense action object', () => {
    const action = updateExpense(mockID, mockExpense);
    expect(action).toEqual({
        type: "UPDATE_EXPENSE",
        id: mockID,
        updates: mockExpense
    })
})