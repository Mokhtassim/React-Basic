import React,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredName:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // });
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState,enteredName:event.target.value};
    // });

  }

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  }
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name : enteredName,
      amount : enteredAmount,
      date : Date(enteredDate)
    }
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredName('');
    setEnteredAmount('');
    setEnteredDate('');
  }
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Name</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-30" value={enteredDate} onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}

export default ExpenseForm;