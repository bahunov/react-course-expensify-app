import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test(`should render ExpenseForm correct`, () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
});

test(`should render ExpenseForm with fixture`, () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
});

test(`should render error for invalid form submission`, () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () =>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test(`should set description on input change`, () => {
    const value = 'My bill';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test(`should set note on textarea change`, () => {
    const value = 'My note';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test(`should set valid amount on change`, () => {
    const value = '23.11';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test(`should not set invalid amount on change`, () => {
    const value = '23.1100';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});