import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem (props) {
 
  // const expenseName = props.name;
  // const expenseAmount = 12.304;
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    );
}

export default ExpenseItem;