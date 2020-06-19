import moment from 'moment';
import { setStartDate,setEndDate, setTextFilter } from '../../actions/filters';

test(`should generate setStartDate action object`, () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
    
});

test(`should generate set end date action object`, () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});


test(`should generate text filter with text param action object`, () => {
    const action = setTextFilter("hello")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    })
});


test(`should generate default empty text filter action object`, () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});
