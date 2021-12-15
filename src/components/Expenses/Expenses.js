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
          <ExpensesFilter selectYear={filterByYear} onFilterHandler={onFilterHandler}/>

          <ExpenseItem
            name={props.expenses[0].name}
            date={props.expenses[0].date}
            amount={props.expenses[0].amount}
          />
          <ExpenseItem
            name={props.expenses[1].name}
            date={props.expenses[1].date}
            amount={props.expenses[1].amount}
          />
          <ExpenseItem
            name={props.expenses[2].name}
            date={props.expenses[2].date}
            amount={props.expenses[2].amount}
          />
          <ExpenseItem
            name={props.expenses[3].name}
            date={props.expenses[3].date}
            amount={props.expenses[3].amount}
          />
        </Card>
      </div>
    );
}

export default Expenses;