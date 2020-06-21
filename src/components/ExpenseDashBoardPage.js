import React from 'react';
import ExepnseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashBoardPage = () => (
    <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExepnseList/>
    </div>
); 

export default ExpenseDashBoardPage;