import React from 'react';
import moment from 'moment';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD'),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        this.setState(
            {
                description: e.target.value
            }
        )
    }

    onNoteChange = (e) => {
        this.setState({
            note: e.target.value
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{1,2})?$/)) {
            this.setState({
                amount: e.target.value
            })
        }
    }

    onCreatedAtChange = (e) => {
        this.setState({
            createdAt: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // Error
            return this.setState(() => ({
                error: 'Please provide description and amount'
            }))
        }

        // Clear the error
        this.setState(() => ({
            error: ''
        }));

        this.props.onSubmit({
            description: this.state.description,
            note: this.state.note,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form input-group">
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <label className="input-group__item">
                <span className="sr-only">Description</span>
                    <input
                        type="text"
                        name="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        className="text-input"
                        placeholder="Description" />
                </label>
                <label className="input-group__item">
                <span className="sr-only">Note</span>
                    <textarea
                        name="note"
                        onChange={this.onNoteChange}
                        placeholder="Put some note here"
                        value={this.state.note}
                        className="textarea"
                    >
                    </textarea>
                </label>
                <label className="input-group__item">
                <span className="sr-only">Amount</span>
                    <input
                        type="number"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        className="text-input"
                        placeholder="Amount"
                    />
                </label>
                <label className="input-group__item">
                <span className="sr-only">Created</span>
                    <input
                        type="date"
                        name="createdAt"
                        value={this.state.createdAt}
                        onChange={this.onCreatedAtChange}
                        className="select" />
                </label>
                <button type="submit" className="button">Save expense</button>
            </form>
        );
    }
}

export default ExpenseForm;