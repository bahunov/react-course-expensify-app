import React from 'react';
import { shallow } from 'enzyme';
import { EditExpenseWithId } from '../../components/EditExpenseWithId';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
     removeExpense = jest.fn()
     editExpense = jest.fn()
     history = {push: jest.fn()}
     wrapper = shallow(<EditExpenseWithId 
        removeExpense={removeExpense} 
        editExpense={editExpense} 
        history={history}
        expense={expenses[2]} 
        />);
})

test(`should render EditExpenseWithId `, () => {
    expect(wrapper).toMatchSnapshot()
});

test(`should handle editExpense`, () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test(`should handle removeExpense`, () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});

