import "./styles/Expenses.css";
import Expenses from "./components/expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyExpenses = [
  {
    id:"e1",
    title: "car Insurance",
    amount: 379,
    date: new Date(2021, 2, 28),
  },
  {
    id:"e2",
    title: "apple laptop",
    amount: 10000.5,
    date: new Date(2022, 3, 1),
  },
  {
    id:"e3",
    title: "smart watch",
    amount: 600,
    date: new Date(2020, 2, 6),
  },
];
function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);
  const [filterYear, setFilterYear] = useState("2020");

  const filterExpenses = (year) => {
    setFilterYear(year);    
  };

  const addExpense = (data) => {
    // clean way to update state that depends prvious state
    setExpenses((prv) => [data, ...prv]);    
  };
  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <div className="expenses">
        <Expenses
          selectedYear={filterYear}
          filterExpenses={filterExpenses}
          expenses={expenses}
        />
      </div>
    </div>
  );
}

export default App;
