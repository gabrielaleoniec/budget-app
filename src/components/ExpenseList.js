import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filteredExpenses from '../selectors/expenses';
import ExpenseListHeader from './ExpenseListHeader';

export const ExpenseList = (props) => {
    if(!props.expenses.length) {
        return <p>The list of expenses is empty</p>
    }

    return (
        <div>
            <h3>Expense List</h3>
            <div>
                <ExpenseListHeader/>
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