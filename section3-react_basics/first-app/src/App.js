import './styles/Expenses.css'
import Expenses from "./components/expenses/Expense"; 
import NewExpense from './components/NewExpense/NewExpense';


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
  

  const addExpense = (data)=>{
    console.log('from appo ', data)
  }
  return (
    <div>
      <NewExpense addExpense={addExpense}/>
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;