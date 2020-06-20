import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import {filters, altfilter} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
     wrapper = shallow(
         <ExpenseListFilter 
        filters={filters} 
        setTextFilter={setTextFilter} 
        sortByDate={sortByDate}
        sortByAmount={sortByAmount} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        />);
})

test(`should render ExpenseListFilter `, () => {
    expect(wrapper).toMatchSnapshot()
});


test(`should render ExpenseListFilter with alt filter `, () => {
    wrapper.setProps({
        filters: altfilter
    })
    expect(wrapper).toMatchSnapshot()
});


test(`should handle text change`, () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// test(`should sort by date`, () => {
//     const value = 'rent'
//     console.log(wrapper.debug());
//     wrapper.find('DateRangePicker').simulate('click', {
//         target: {value}
//     })
//     expect(setTextFilter).toHaveBeenLastCalledWith(value);
// });

