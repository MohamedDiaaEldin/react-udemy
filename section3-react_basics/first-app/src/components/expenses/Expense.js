import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses";
const Expenses = ({ expenses, filterExpenses, selectedYear }) => {
  const filteredExpenese = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card>
      <FilterExpenses
        selectedYear={selectedYear}
        filterExpenses={filterExpenses}
      />
      {filteredExpenese.map((item) => (
        <ExpenseItem
          key={item.title}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
