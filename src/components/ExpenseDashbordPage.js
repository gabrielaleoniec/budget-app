import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashbordPage = () => (
    <div>
        <h2>Dashboard Page</h2>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashbordPage;