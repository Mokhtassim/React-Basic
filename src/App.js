import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
  
    const expenses = [
      {
        id: "1",
        name: "car",
        date: new Date(2021, 12, 30),
        amount: 245,
      },
      {
        id: "2",
        name: "bus",
        date: new Date(2021, 12, 14),
        amount: 5786,
      },
      {
        id: "3",
        name: "moto",
        date: new Date(2021, 11, 30),
        amount: 9864,
      },
      {
        id: "4",
        name: "PC",
        date: new Date(2021, 11, 5),
        amount: 96584,
      },
    ];
    const addExpenseHandler = (expense) => {
      console.log('in APP');
      console.log(expense);
    } 
  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
