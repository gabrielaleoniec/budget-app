import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ totalAmount, expenseCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const beWord = expenseCount === 1 ? 'is' : 'are';
    return <div className="page-header">
        <div className="content-container">
            <h2 className="page-header__title">There {beWord} <span>{expenseCount}</span> {expenseWord} totalling to <span>{totalAmount}</span></h2>
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
        expenseCount: visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);
