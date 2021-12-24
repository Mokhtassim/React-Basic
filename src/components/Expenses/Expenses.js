import React,{ useState} from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = (props) => {

  const [filterByYear, setfilterByYear] = useState('all');
  const onFilterHandler = year => {
    setfilterByYear(year);
    console.log(year);
  }
  let filterItem=props.expenses;
if (filterByYear !== 'all') {
      filterItem = props.expenses.filter( expense => {
    
    return expense.date.getFullYear().toString() === filterByYear;
  });
    }
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectYear={filterByYear}
            onFilterHandler={onFilterHandler}
          />
          <ExpensesList items={filterItem}/>
        </Card>
      </div>
    );
}

export default Expenses;