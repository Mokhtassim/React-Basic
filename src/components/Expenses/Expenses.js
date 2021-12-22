import React,{ useState} from 'react';
import './Expenses.css';

import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [filterByYear, setfilterByYear] = useState('2021');
  const onFilterHandler = year => {
    setfilterByYear(year);
    console.log(year);
  }
    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectYear={filterByYear}
            onFilterHandler={onFilterHandler}
          />
          {props.expenses.map((filterExpense) => (
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