import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
    return (
        <Link to={`/edit/${id}`} className="list-item">
            <div className="list-item__title">
                <h3>{description}</h3>
                <div className="list-item__subtitle">{note}</div>
            </div>
            <div className="list-item__date">
                {moment(createdAt).format('YYYY-MM-DD')}
            </div>
            <strong className="list-item__amount">
                {(amount / 100).toFixed(2) + ' zł'}
            </strong>
        </Link>
    )
}

export default ExpenseListItem;