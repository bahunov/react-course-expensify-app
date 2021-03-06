import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component{
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) =>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);

  }

  onFocusChange = (calendarFocused) =>{
    this.setState(() => ({calendarFocused}))
  }

  onSortChange = (e) => { (e.target.value === 'amount' ? 
  this.props.sortByAmount() : this.props.sortByDate());
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  render() {
    return (
      <div>
      <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
      <select 
      value = {this.props.filters.sortBy}
      onChange={this.onSortChange} 
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker 
       startDate={this.props.filters.startDate}
       endDate={this.props.filters.endDate}
       onDatesChange={this.onDatesChange}
       focusedInput={this.state.calendarFocused}
       onFocusChange={this.onFocusChange}
       showClearDates={true}
       numberOfMonths={1}
       isOutsideRange={() => false}
      
      />
    </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter);

// onChange={(e) => {
//     const value = e.target.value
//     value === 'amount' ? props.dispatch(sortByAmount) : props.dispatch(sortByDate))}