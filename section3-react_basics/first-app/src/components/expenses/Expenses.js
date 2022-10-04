import ExpensesList from "./ExpensesList";
import FilterExpenses from "./FilterExpenses";
import { useState } from "react";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  const [selectedYear, setFilterYear] = useState("2020");

  const filterExpenses = (year) => {
    setFilterYear(year);
  };

  const filteredExpenese = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  console.log("in Expenses with selected year ", selectedYear);
  return (
    <li>
      <Card>
        <FilterExpenses
          selectedYear={selectedYear}
          filterExpenses={filterExpenses}
        />
        <ExpensesList expenses={filteredExpenese} />
      </Card>
    </li>
  );
};

export default Expenses;
