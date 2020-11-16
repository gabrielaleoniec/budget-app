import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 when no expenses', () => {
    expect(getExpensesTotal([])).toBe(0);
});

test('should return for expenses', () =>{
    expect(getExpensesTotal(expenses)).toBe(2900.00);
});

test('should correctly add for one expense', () => {
    expect(getExpensesTotal(expenses[0])).toBe(450.00);
});