import React from 'react';
import ExepnseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
const ExpenseDashBoardPage = () => (
    <div>
    <ExpenseListFilter />
    <ExepnseList/>
    </div>
); 

export default ExpenseDashBoardPage;