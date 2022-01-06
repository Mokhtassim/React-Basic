import React, { useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const DEFAULT_EXPENSES = [
  {
    id: "1",
    name: "car",
    date: new Date(2019, 12, 30),
    amount: 245,
  },
  {
    id: "2",
    name: "bus",
    date: new Date(2020, 12, 14),
    amount: 5786,
  },
  {
    id: "3",
    name: "moto",
    date: new Date(2020, 11, 30),
    amount: 9864,
  },
  {
    id: "4",
    name: "PC",
    date: new Date(2021, 11, 5),
    amount: 6584,
  },
  {
    id: "5",
    name: "Door",
    date: new Date(2021, 7, 5),
    amount: 4500,
  },
];
const App = () => {
  
    const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);
    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    } 
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
