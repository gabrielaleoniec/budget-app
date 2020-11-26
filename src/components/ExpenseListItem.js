import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
    return (
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description}</h3>
                <div>{note}</div>
                <div className="list-item__subtitle">{moment(createdAt).format('YYYY-MM-DD')}</div>
            </div>
            <strong className="list-item__amount">
                {(amount / 100).toFixed(2) + ' zł'}
            </strong>
        </Link>
    )
}

export default ExpenseListItem;