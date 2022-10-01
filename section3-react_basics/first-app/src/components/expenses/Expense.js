import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = ({ expenses }) => {
  return (
    <Card>
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
