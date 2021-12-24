import React,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();


    if(!enteredName) 
    setMessage("please enter Name"); 
     
    else if(!enteredName.match(/^[a-zA-Z]+$/)) 
    setMessage("Enter Name Expense is not Number");

    else if(enteredName.length <3) 
    setMessage("Enter 3 caracter or more");

    else{
        setMessage("");
        const expenseData = {
          name: enteredName,
          amount: enteredAmount,
          date: new Date(enteredDate),
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredName("");
        setEnteredAmount("");
        setEnteredDate("");
        setActive(false);
    }
  };

  const showForm = () => setActive(!active);

  if (active === false) {
   return <div className="new-expense__add">
      <button onClick={showForm}>Add New Expense</button>
    </div>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
          <p> {message}</p>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={showForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;