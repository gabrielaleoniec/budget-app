import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
    return <tr>
        <td>{description}</td>
        <td>{note}</td>
        <td>{amount}</td>
        <td>{createdAt}</td>
        <td><Link to={`/edit/${id}`}>Edit</Link></td>
    </tr>
}

export default ExpenseListItem;