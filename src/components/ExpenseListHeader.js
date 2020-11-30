import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByAmount } from '../actions/filters';

const onSortByDate = (sortByDate, asc) => {
    sortByDate(!asc)
}

export const ExpenseListHeader = ({ filters, sortByDate, sortByAmount }) => {
    return <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop list-header__title">Expense</div>
        <div className="show-for-desktop list-header__date">Date
            <button
                className={`button button--sort ${filters.sortBy == 'createdAt' && (filters.sortByAsc ? 'button--top' : 'button--down')}`}
                onClick={() => {
                    sortByDate(!filters.sortByAsc);
                }}>
                <span className="sr-only">Sort by date</span>
            </button>
        </div>
        <div className="show-for-desktop list-header__amount">Amount
            <button
                className={`button button--sort ${filters.sortBy == 'amount' && (filters.sortByAsc ? 'button--top' : 'button--down')}`}
                onClick={() => {
                    sortByAmount(!filters.sortByAsc);
                }}>
                <span className="sr-only">Sort by amount</span>
            </button>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    sortByDate: (asc) => dispatch(sortByDate(asc)),
    sortByAmount: (asc) => dispatch(sortByAmount(asc))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListHeader);