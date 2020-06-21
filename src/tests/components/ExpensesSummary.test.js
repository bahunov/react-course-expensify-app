import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expensesSummary with 1 expense' , () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render expensesSummary with multiple expense' , () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={232342345} />)
    expect(wrapper).toMatchSnapshot();
});