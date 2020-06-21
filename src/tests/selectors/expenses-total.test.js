import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
const expensesEmpty = [{}];



test(`should return 0 for empty expense`, () => {
    const result = expensesTotal([]);
    expect(result).toEqual(0)
});

test(`should correctly add up single expense`, () => {
    const result = expensesTotal([expenses[1]]);
    expect(result).toEqual(10950)
});

test(`should correctly add up multiple expense`, () => {
    const result = expensesTotal(expenses);
    expect(result).toEqual(15645)
});

