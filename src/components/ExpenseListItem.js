import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
    return <div>
        <div></div>
        <div>{description}</div>
        <div>{note}</div>
        <div>{(amount/100).toFixed(2) + ' zł'}</div>
        <div>{moment(createdAt).format('YYYY-MM-DD')}</div>
        <div><Link to={`/edit/${id}`}>Edit</Link></div>
    </div>
}

export default ExpenseListItem;