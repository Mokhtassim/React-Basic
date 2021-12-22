import React,{ useState} from 'react';
import './Expenses.css';

import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

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
          {filterItem.map((filterExpense) => (
              <ExpenseItem
                key={filterExpense.id}
                name={filterExpense.name}
                date={filterExpense.date}
                amount={filterExpense.amount}
              />
            ))
          }
        </Card>
      </div>
    );
}

export default Expenses;