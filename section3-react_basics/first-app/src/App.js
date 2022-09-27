import './style/Expenses.css'
import Expenses from "./components/Expense";
function App() {  

  const expenses = [
    {
      title: "car Insurance",
      amount: 379,
      date: new Date(2021, 2, 28),
    },
    {
      title: "apple laptop",
      amount: 10000.5,
      date: new Date(2022, 3, 1),
    },
    {
      title: "smart watch",
      amount: 600,
      date: new Date(2020, 2, 6),
    },
  ];
  

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;