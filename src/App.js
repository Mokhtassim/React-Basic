import Expenses from "./components/Expenses/Expenses";

function App() {
  
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
