import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        focusedInput: null,
        startDate: moment().startOf('year'),
        endDate: moment().endOf('month')
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate })
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render() {
        return <div>
            <input
                type="text"
                value={this.props.filters.text}
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}
            />
            <div>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="filter_start_date" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="filter_end_date" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    displayFormat="DD-MM-YYYY"
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>

            <select
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    switch (e.target.value) {
                        case 'date': return this.props.dispatch(sortByDate());
                        case 'amount': return this.props.dispatch(sortByAmount());
                    }
                }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilter);