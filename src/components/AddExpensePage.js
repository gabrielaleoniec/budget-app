import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (<div>
            <div className="page-header">
                <div className="content-container">
                    <h2 className="page-header__title">Add expense</h2>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);