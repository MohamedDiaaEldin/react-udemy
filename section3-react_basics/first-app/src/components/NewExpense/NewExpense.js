import "../../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default NewExpense;
