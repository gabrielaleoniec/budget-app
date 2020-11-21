import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import ExpenseForm from './ExpenseForm';
import { startUpdateExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        const createdAt = typeof expense.createdAt === 'string' ? moment(expense.createdAt).valueOf() : expense.createdAt;

        this.props.startUpdateExpense(this.props.expense.id, { ...expense, createdAt });
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        if (!this.props.expense || !this.props.expense.id) {
            return <p>Expense for the given id does not exist</p>
        }

        return (
            <div>
                <h2>Edit expense</h2>
                <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
                <div>
                    <button onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    startUpdateExpense: (id, expense) => dispatch(startUpdateExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);