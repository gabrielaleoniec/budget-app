import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ExpenseForm from './ExpenseForm';
import { updateExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    if(!props.expense || !props.expense.id) {
        return <p>Expense for the given id does not exist</p>
    }

    const id = props.expense.id;
    return (
        <div>
            <h2>Edit expense</h2>
            <ExpenseForm onSubmit={(expense) => {
                const createdAt = typeof expense.createdAt === 'string' ? moment(expense.createdAt).valueOf() : expense.createdAt;
                console.log(createdAt);
                
                console.log('Edited', expense, typeof expense.createdAt);
                props.dispatch(updateExpense(id, {...expense, createdAt}));
                props.history.push('/');
            }} expense={props.expense} />
            <div>
                <button onClick={(e) => {
                    props.dispatch(removeExpense({ id }))
                    props.history.push('/');
                }}>Remove</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        expense: state.expenses.find((expense) => expense.id === id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);