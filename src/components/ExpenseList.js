import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filteredExpenses from '../selectors/expenses';
import ExpenseListHeader from './ExpenseListHeader';

export const ExpenseList = (props) => {
    return (
        <div className="content-container">
            <div>
                <h3>Expense List</h3>
            </div>
            <div>
                <ExpenseListHeader />
                {(!props.expenses.length) && <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                }
                {props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        expenses: filteredExpenses(state.expenses, state.filters)
    }
)

export default connect(mapStateToProps)(ExpenseList);