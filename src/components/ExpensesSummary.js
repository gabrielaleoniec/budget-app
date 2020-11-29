import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ totalAmount, expensesCount, allExpensesCount }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const beWord = expensesCount === 1 ? 'is' : 'are';
    const allExpenseWord = allExpensesCount === 1 ? 'expense' : 'expenses';
    const hidenExpensesCount = allExpensesCount - expensesCount;
    return <div className="page-header">
        <div className="content-container">
            <h2 className="page-header__title">There {beWord} <span>{expensesCount}</span> {expenseWord} totalling to <span>{totalAmount}</span></h2>
            {!!hidenExpensesCount && <p>Not showing {hidenExpensesCount} out of {allExpensesCount} {allExpenseWord} because of filters</p>}
            <div>
                <Link to="/create" className="button">Create</Link>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        totalAmount: getExpensesTotal(visibleExpenses),
        expensesCount: visibleExpenses.length,
        allExpensesCount: state.expenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);
