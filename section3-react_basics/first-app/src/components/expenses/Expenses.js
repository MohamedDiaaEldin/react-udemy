import ExpensesList from "./ExpensesList";
import FilterExpenses from "./FilterExpenses";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";



const Expenses = ({ expenses }) => {
  const [selectedYear, setFilterYear] = useState("2020");

  const filterExpenses = (year) => {
    setFilterYear(year);
  };



  const filteredExpenese = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <li>
      <Card>
        <FilterExpenses
          selectedYear={selectedYear}
          filterExpenses={filterExpenses}
        />
        <ExpensesChart expenses={filteredExpenese}/>
        <ExpensesList expenses={filteredExpenese} />
      </Card>
    </li>
  );
};

export default Expenses;
