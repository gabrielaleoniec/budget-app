import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        focusedInput: null,
        startDate: moment().startOf('year').subtract(1, 'year'),
        endDate: moment().endOf('month')
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate })
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = focusedInput => this.setState({ focusedInput });

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                            placeholder="Search expenses"
                            className="text-input"
                        />
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="filter_start_date" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="filter_end_date" // PropTypes.string.isRequired,
                            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                            displayFormat="DD-MM-YYYY"
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);