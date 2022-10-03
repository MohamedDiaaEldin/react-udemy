import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses";
const Expenses = ({ expenses, filterExpenses, selectedYear }) => {
  return (
    <Card>
      <FilterExpenses selectedYear={selectedYear} filterExpenses={filterExpenses} />
      {expenses.map((item) => (
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
