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
                <div className="page-header">
                    <div className="content-container">
                        <h2 className="page-header__title">Edit expense</h2>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
                    <button onClick={this.onRemove} className="button button--remove">Remove expense</button>
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