import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h2>Add expense</h2>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}/>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

export default connect(mapStateToProps)(AddExpensePage);