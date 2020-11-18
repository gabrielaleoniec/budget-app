import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ totalAmount, expenseCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const beWord = expenseCount === 1 ? 'is' : 'are';
    return <h2>`There {beWord} {expenseCount} {expenseWord} totalling to {totalAmount}</h2>
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        totalAmount: getExpensesTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);
