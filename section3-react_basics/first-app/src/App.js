import "./styles/Expenses.css";
import Expenses from "./components/expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {

  const [filterYear, setFilterYear] = useState('2020')

  const [expenses, setExpenses] = useState([
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
  ]);

  const filterExpenses = (year) => {
    setFilterYear(year);
  };

  const addExpense = (data) => {
    setExpenses([...expenses, data]);
  };
  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <div className="expenses">
        <Expenses selectedYear={filterYear} filterExpenses={filterExpenses} expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
