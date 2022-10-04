import "../../styles/ExpensesList.css";
import ExpenseItem from '../expenses/ExpenseItem'
const ExpensesList = ({ expenses }) => {

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Founf no expneses</h2>;
  }



  return (
    <ul>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.title}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
