import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

      if (props.items.length === 0) {
       return <h2 className="expenses-list__fallback">Found not Data</h2>;
      }
    return (
      <ul className="expenses-list">
        {props.items.map((filterExpense) => (
          <ExpenseItem
            key={filterExpense.id}
            name={filterExpense.name}
            date={filterExpense.date}
            amount={filterExpense.amount}
          />
        ))}
      </ul>
    );
}

export default ExpensesList;